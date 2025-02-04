"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Layout from "@/components/common/Layout";
import { blogs } from "@/data/blogData";
import Image from "next/image";
import BlogCard from "@/components/blog/BlogCard";

// ✅ Category Images Map
const categoryImages = {
  "creative-design": "/images/blog/creative-design/blog1/thumbnail.avif",
  "marketing-strategies": "/images/categories/marketing-strategy.jpg",
  "design-branding": "/images/categories/design-branding.jpg",
};

export default function BlogCategoryPage() {
  const { category } = useParams(); 
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    if (category) {
      const formattedCategory = category.replace(/-/g, " ");
      const filtered = blogs.filter((blog) => blog.category.toLowerCase() === formattedCategory);
      setFilteredBlogs(filtered);
    }
  }, [category]);

  if (!category) return <div className="text-center py-20">Category not found</div>;

  return (
    <div className="bg-white py-16">
      <Layout>
        {/* ✅ Category Header */}
        <header className="mb-12 flex flex-col md:flex-row items-center gap-6">
          {/* Left - Category Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold capitalize">{category.replace(/-/g, " ")}</h1>
            <p className="text-gray-500 mt-2 text-lg">
              Explore the latest articles on {category.replace(/-/g, " ")}
            </p>
          </div>

          {/* Right - Category Image */}
          {categoryImages[category.toLowerCase().replace(" ","-")] && (
            <div className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-md">
              <Image
                src={categoryImages[category.toLowerCase().replace(" ","-")]}
                alt={category}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </header>

        {/* ✅ Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            <p className="col-span-full text-center text-gray-600">No blogs found in this category.</p>
          )}
        </div>
      </Layout>
    </div>
  );
}
