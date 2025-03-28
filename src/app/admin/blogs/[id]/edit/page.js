'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaImage, FaYoutube, FaPaste } from 'react-icons/fa';
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

  // New state for the rich text editor reference
  const contentTextareaRef = useRef(null);

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

  // Setup the paste event handler
  useEffect(() => {
    const textarea = contentTextareaRef.current;
    if (!textarea) return;

    const handlePaste = (e) => {
      // Prevent the default paste behavior
      e.preventDefault();
      
      // Get the clipboard data
      const clipboardData = e.clipboardData || window.clipboardData;
      let pastedData;
      
      // Try to get HTML content first (this preserves formatting)
      if (clipboardData.types.includes('text/html')) {
        pastedData = clipboardData.getData('text/html');
        
        // Clean the HTML: remove head, scripts, styles, etc.
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = pastedData;
        
        // Remove unwanted elements
        const elementsToRemove = ['head', 'script', 'style', 'meta', 'link'];
        elementsToRemove.forEach(tag => {
          const elements = tempDiv.getElementsByTagName(tag);
          while (elements[0]) elements[0].parentNode.removeChild(elements[0]);
        });
        
        // Process Word-specific markup
        // Convert Word list items
        const wordListItems = tempDiv.querySelectorAll('p.MsoListParagraph, p[style*="mso-list"]');
        wordListItems.forEach(item => {
          const newLi = document.createElement('li');
          newLi.innerHTML = item.innerHTML;
          item.parentNode.replaceChild(newLi, item);
        });
        
        // Wrap consecutive list items in ul
        let currentUl = null;
        Array.from(tempDiv.children).forEach(child => {
          if (child.tagName === 'LI') {
            if (!currentUl) {
              currentUl = document.createElement('ul');
              child.parentNode.insertBefore(currentUl, child);
            }
            currentUl.appendChild(child);
          } else {
            currentUl = null;
          }
        });
        
        // Convert Word's specific span styles to standard HTML
        const spans = tempDiv.querySelectorAll('span');
        spans.forEach(span => {
          const style = span.getAttribute('style') || '';
          
          // Bold
          if (style.includes('font-weight:bold') || style.includes('font-weight: bold')) {
            const b = document.createElement('b');
            b.innerHTML = span.innerHTML;
            span.parentNode.replaceChild(b, span);
          }
          // Italic
          else if (style.includes('font-style:italic') || style.includes('font-style: italic')) {
            const i = document.createElement('i');
            i.innerHTML = span.innerHTML;
            span.parentNode.replaceChild(i, span);
          }
        });
        
        // Get the cleaned HTML
        pastedData = tempDiv.innerHTML;
      } else {
        // Fallback to plain text
        pastedData = clipboardData.getData('text/plain');
      }
      
      // Get cursor position
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      
      // Insert the pasted content at cursor position
      const newContent = 
        formData.content.substring(0, start) + 
        pastedData + 
        formData.content.substring(end);
      
      // Update the form data
      setFormData(prev => ({
        ...prev,
        content: newContent
      }));
    };
    
    // Add the paste event listener
    textarea.addEventListener('paste', handlePaste);
    
    // Clean up
    return () => {
      textarea.removeEventListener('paste', handlePaste);
    };
  }, [formData.content]);

  const insertContentTemplate = (template) => {
    // Get cursor position
    const contentTextarea = contentTextareaRef.current;
    if (!contentTextarea) return;
    
    const start = contentTextarea.selectionStart;
    const end = contentTextarea.selectionEnd;
    
    // Insert template at cursor position
    const newContent = 
      formData.content.substring(0, start) + 
      template + 
      formData.content.substring(end);
    
    setFormData({
      ...formData,
      content: newContent
    });
    
    // Focus back on textarea and place cursor after inserted content
    setTimeout(() => {
      contentTextarea.focus();
      const newCursorPos = start + template.length;
      contentTextarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const insertImage = () => {
    const imageUrl = prompt('Enter image URL:', 'https://example.com/image.jpg');
    if (imageUrl) {
      const imageTemplate = `
<div class="my-8">
  <img 
    src="${imageUrl}" 
    alt="Blog image" 
    class="rounded-lg max-w-full max-h-[500px] object-contain"
  />
</div>
`;
      insertContentTemplate(imageTemplate);
    }
  };

  const insertYouTube = () => {
    const videoId = prompt('Enter YouTube video ID or full URL:', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    
    if (videoId) {
      // Extract ID from URL if needed
      let youtubeId = videoId;
      if (videoId.includes('youtube.com/watch?v=')) {
        const url = new URL(videoId);
        youtubeId = url.searchParams.get('v');
      } else if (videoId.includes('youtu.be/')) {
        youtubeId = videoId.split('youtu.be/')[1];
      }
      
      if (youtubeId) {
        const youtubeTemplate = `
<div class="my-8 flex justify-center">
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/${youtubeId}" 
    title="YouTube video" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    class="rounded-lg"
  ></iframe>
</div>
`;
        insertContentTemplate(youtubeTemplate);
      }
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
            <div className="mb-2 flex gap-2">
              <button
                type="button"
                onClick={insertImage}
                className="px-3 py-1 bg-blue-50 text-blue-600 rounded flex items-center gap-1 hover:bg-blue-100"
                disabled={isSubmitting}
              >
                <FaImage /> Insert Image
              </button>
              <button
                type="button"
                onClick={insertYouTube}
                className="px-3 py-1 bg-red-50 text-red-600 rounded flex items-center gap-1 hover:bg-red-100"
                disabled={isSubmitting}
              >
                <FaYoutube /> Insert YouTube Video
              </button>
              <div className="ml-auto px-3 py-1 bg-green-50 text-green-600 rounded flex items-center gap-1">
                <FaPaste /> Rich Paste Enabled
              </div>
            </div>
            <textarea
              ref={contentTextareaRef}
              name="content"
              value={typeof formData.content === 'string' ? formData.content : ''}
              onChange={handleChange}
              rows="15"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 font-mono"
              required
              disabled={isSubmitting}
            />
            <p className="text-xs text-gray-500 mt-1">
              Paste formatted text from Word/Google Docs to preserve formatting. Use the buttons above to insert media.
            </p>
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