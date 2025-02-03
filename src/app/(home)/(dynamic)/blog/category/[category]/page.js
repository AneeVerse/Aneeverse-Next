"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Layout from "@/components/common/Layout";
import { blogs } from "@/data/blogData";
import Image from "next/image";
import Link from "next/link";

export default function BlogCategoryPage() {
  const { category } = useParams(); // ✅ Get category from URL
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    if (category) {
      const formattedCategory = category.replace(/-/g, " "); // Handle category slugs
      const filtered = blogs.filter((blog) => blog.category.toLowerCase() === formattedCategory);
      setFilteredBlogs(filtered);
    }
  }, [category]);

  if (!category) return <div className="text-center py-20">Category not found</div>;

  return (
    <>

      <div className="bg-white py-16">
        <Layout>
          {/* ✅ Page Header */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold capitalize">{category} Blogs</h1>
            <p className="text-gray-500 mt-2">Explore the latest articles on {category}</p>
          </header>

          {/* ✅ Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.id}`} className="border rounded-xl overflow-hidden hover:shadow-lg transition">
                  <div className="relative h-64">
                    <Image src={blog.thumbnail} alt={blog.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                    <p className="text-gray-500">{blog.shortDescription}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <Image src={blog.author.image} alt={blog.author.name} width={32} height={32} className="rounded-full" />
                      <div>
                        <span className="text-sm font-semibold">{blog.author.name}</span>
                        <p className="text-xs text-gray-500">{blog.author.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{blog.date} • {blog.timeToRead}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600">No blogs found in this category.</p>
            )}
          </div>
        </Layout>
      </div>
    </>
  );
}
