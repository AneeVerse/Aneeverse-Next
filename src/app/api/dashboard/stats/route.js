import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { db } = await connectToDatabase();

    // Get total blogs count
    const totalBlogs = await db.collection('blogs').countDocuments();

    // Get total categories count
    const totalCategories = await db.collection('categories').countDocuments();

    // Get latest blog
    const latestBlog = await db.collection('blogs')
      .findOne({}, { sort: { createdAt: -1 } });

    // Get blogs by category
    const blogsByCategory = await db.collection('blogs')
      .aggregate([
        { $group: { _id: "$category", count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ]).toArray();

    // Get recent blogs (last 5)
    const recentBlogs = await db.collection('blogs')
      .find({})
      .sort({ createdAt: -1 })
      .limit(5)
      .project({
        title: 1,
        category: 1,
        author: 1,
        createdAt: 1
      })
      .toArray();

    // Get database stats
    const dbStats = await db.stats();
    const storageStats = {
      dataSize: dbStats.dataSize,
      storageSize: dbStats.storageSize,
      maxSize: 536870912, // 512MB (typical free tier limit)
      usagePercentage: ((dbStats.storageSize / 536870912) * 100).toFixed(2)
    };

    // Get last 5 days blog stats
    const last5DaysStats = await db.collection('blogs').aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
          }
        }
      },
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$createdAt"
            }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]).toArray();

    return NextResponse.json({
      success: true,
      stats: {
        totalBlogs,
        totalCategories,
        latestBlog,
        blogsByCategory,
        recentBlogs,
        storageStats,
        last5DaysStats
      }
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch dashboard statistics'
    }, { status: 500 });
  }
} 