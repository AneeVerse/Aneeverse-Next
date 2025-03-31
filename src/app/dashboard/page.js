'use client';

import Link from 'next/link';
import { FaBlog, FaPlus } from 'react-icons/fa';
import { blogs } from '@/data/blogData';

export default function AdminDashboard() {
  // Get counts by category
  const categoryCounts = blogs.reduce((acc, blog) => {
    acc[blog.category] = (acc[blog.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <Link 
          href="/admin/blogs/new" 
          className="bg-secondary-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-secondary-600"
        >
          <FaPlus /> New Blog
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Total Blogs</h3>
          <p className="text-3xl font-bold text-secondary-500">{blogs.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <p className="text-3xl font-bold text-secondary-500">{Object.keys(categoryCounts).length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Latest Blog</h3>
          <p className="text-lg font-medium text-secondary-500 truncate">{blogs[0]?.title}</p>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Blogs by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(categoryCounts).map(([category, count]) => (
            <div key={category} className="border p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800">{category}</h3>
              <p className="text-2xl font-bold text-secondary-500">{count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Blogs */}
      <div className="bg-white p-6 rounded-lg shadow mt-8">
        <h2 className="text-xl font-bold mb-4">Recent Blogs</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Title</th>
                <th className="text-left py-3">Category</th>
                <th className="text-left py-3">Author</th>
                <th className="text-left py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {blogs.slice(0, 5).map((blog) => (
                <tr key={blog.id} className="border-b hover:bg-gray-50">
                  <td className="py-3">{blog.title}</td>
                  <td className="py-3">{blog.category}</td>
                  <td className="py-3">{blog.author.name}</td>
                  <td className="py-3">{blog.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 