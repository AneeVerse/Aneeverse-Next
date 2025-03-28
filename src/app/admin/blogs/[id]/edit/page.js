'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { useParams, useRouter } from 'next/navigation';

export default function EditBlog() {
  const params = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
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

  useEffect(() => {
    const fetchBlog = async () => {
      if (!params.id) return;
      
      try {
        setIsLoading(true);
        setError('');
        
        // First try the API
        const response = await fetch(`/api/blogs/${params.id}`);
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
            const staticBlog = blogs.find(b => b.id === params.id);
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
  }, [params.id]);

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
      
      const response = await fetch(`/api/blogs/${params.id}`, {
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
    <div>
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
            <div className="space-y-4">
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
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select a category</option>
                  <option value="Local SEO">Local SEO</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Web Design">Web Design</option>
                  <option value="SEO">SEO</option>
                  <option value="eBay">eBay</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Content Marketing">Content Marketing</option>
                  <option value="Design">Design</option>
                </select>
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
            </div>

            <div className="space-y-4">
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
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content (HTML)
            </label>
            <textarea
              name="content"
              value={typeof formData.content === 'string' ? formData.content : ''}
              onChange={handleChange}
              rows="15"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 font-mono"
              required
              disabled={isSubmitting}
            />
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
  );
} 