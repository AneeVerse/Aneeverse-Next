'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaImage, FaYoutube, FaPaste, FaPlus } from 'react-icons/fa';
import { useParams, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Toaster, toast } from 'react-hot-toast';

// Dynamically import the RichTextEditor component
const RichTextEditor = dynamic(() => import('@/components/editor/RichTextEditor'), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-gray-100 animate-pulse rounded-lg" />
});

export default function EditBlog() {
  const params = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [categories, setCategories] = useState([]);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    shortDescription: '',
    content: '',
    thumbnail: '',
    author: {
      name: '',
      role: '',
      image: ''
    },
    timeToRead: '',
    date: new Date().toISOString().split('T')[0]
  });

  // Create ref for the content textarea
  const contentTextareaRef = useRef(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!params.slug) return;
      
      try {
        setIsLoading(true);
        setError('');
        
        // First try the API
        const response = await fetch(`/api/blogs/${params.slug}`);
        const data = await response.json();
        
        if (response.ok && data.success) {
          // Use the API data if available
          const blog = data.blog;
          setFormData({
            ...blog,
            date: blog.date ? new Date(blog.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
            content: blog.content || ''
          });
        } else {
          // If API failed, try static data as fallback
          import('@/data/blogData').then(({ blogs }) => {
            const staticBlog = blogs.find(b => b.slug === params.slug);
            if (staticBlog) {
              setFormData({
                ...staticBlog,
                date: staticBlog.date ? new Date(staticBlog.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
                content: staticBlog.content || ''
              });
            } else {
              setError('Blog not found');
            }
          }).catch(err => {
            console.error('Error importing static blogs:', err);
            setError('Failed to load blog data');
          });
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Failed to load blog data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [params.slug]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories');
      const data = await response.json();
      if (data.success) {
        setCategories(data.categories);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCategory)
      });

      const data = await response.json();
      if (data.success) {
        setCategories([...categories, data.category]);
        setFormData({ ...formData, category: data.category.name });
        setNewCategory({ name: '', description: '' });
        setIsAddingCategory(false);
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error('Error adding category:', error);
      setError('Failed to add category');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      setError('');
      
      // Create a copy of the form data and remove the _id field
      const submitData = {...formData};
      if (submitData._id) {
        delete submitData._id;
      }
      
      // Generate or update slug from title
      submitData.slug = submitData.title
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-');
      
      const response = await fetch(`/api/blogs/${params.slug}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to update blog');
      }
      
      // Navigate back to the blogs list
      router.push('/admin/blogs?updated=true');
    } catch (err) {
      console.error('Error updating blog:', err);
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('author.')) {
      const authorField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        author: {
          ...prev.author,
          [authorField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <>
      <Toaster />
      <div className="max-w-5xl mx-auto py-10">
        <div className="flex items-center gap-4 mb-8">
          <Link 
            href="/admin/blogs"
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <FaArrowLeft />
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Edit Blog</h1>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-4xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <div className="flex gap-2">
                  {!isAddingCategory ? (
                    <>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="">Select a category</option>
                        {categories.map((cat) => (
                          <option key={cat.name} value={cat.name}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                      <button
                        type="button"
                        onClick={() => setIsAddingCategory(true)}
                        className="px-3 py-2 bg-secondary-500 text-white rounded-md hover:bg-secondary-600"
                      >
                        <FaPlus />
                      </button>
                    </>
                  ) : (
                    <div className="w-full">
                      <div className="flex gap-2 mb-2">
                        <input
                          type="text"
                          placeholder="Category name"
                          value={newCategory.name}
                          onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        <button
                          type="button"
                          onClick={handleAddCategory}
                          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                        >
                          Add
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsAddingCategory(false)}
                          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                        >
                          Cancel
                        </button>
                      </div>
                      <input
                        type="text"
                        placeholder="Category description (optional)"
                        value={newCategory.description}
                        onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Short Description
              </label>
              <textarea
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Content*
              </label>
              <div className="sticky top-4 z-10 bg-white rounded-lg shadow-lg h-[600px]">
                <div className="h-full">
                  <RichTextEditor
                    value={formData.content}
                    onChange={(data) => {
                      setFormData(prev => ({
                        ...prev,
                        content: data
                      }));
                    }}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Thumbnail URL
              </label>
              <input
                type="text"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Author Name
                </label>
                <input
                  type="text"
                  name="author.name"
                  value={formData.author?.name || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Author Role
                </label>
                <input
                  type="text"
                  name="author.role"
                  value={formData.author?.role || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Author Image URL
                </label>
                <input
                  type="text"
                  name="author.image"
                  value={formData.author?.image || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time to Read (in minutes)
                </label>
                <input
                  type="text"
                  name="timeToRead"
                  value={formData.timeToRead}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Publication Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Link
                href="/admin/blogs"
                className="px-6 py-2 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="px-6 py-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
} 