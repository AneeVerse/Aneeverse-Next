'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { FaImage, FaYoutube, FaPaste, FaPlus } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import { Toaster, toast } from 'react-hot-toast';

// Dynamically import the RichTextEditor component
const RichTextEditor = dynamic(() => import('@/components/editor/RichTextEditor'), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-gray-100 animate-pulse rounded-lg" />
});

export default function NewBlog() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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

  // Fetch categories on component mount
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
        setErrorMessage(data.error);
      }
    } catch (error) {
      console.error('Error adding category:', error);
      setErrorMessage('Failed to add category');
    }
  };

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const insertContentTemplate = (template) => {
    const contentTextarea = contentTextareaRef.current;
    if (!contentTextarea) return;

    const start = contentTextarea.selectionStart;
    const end = contentTextarea.selectionEnd;

    const newContent = 
      formData.content.substring(0, start) + 
      template +
      formData.content.substring(end);

    setFormData(prev => ({
      ...prev,
      content: newContent
    }));
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
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/admin/blogs');
      } else {
        setErrorMessage(data.error || 'Failed to create blog');
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      setErrorMessage('Failed to create blog');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Create New Blog</h1>
        
        {errorMessage && (
          <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
            {errorMessage}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Blog Title*
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category*
              </label>
              <div className="flex gap-2">
                {!isAddingCategory ? (
                  <>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
              Short Description*
            </label>
            <textarea
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows="2"
              disabled={isSubmitting}
            ></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content*
            </label>
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
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Thumbnail URL*
            </label>
            <input
              type="url"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              disabled={isSubmitting}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author Name*
              </label>
              <input
                type="text"
                name="author.name"
                value={formData.author.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author Role*
              </label>
              <input
                type="text"
                name="author.role"
                value={formData.author.role}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author Image URL*
              </label>
              <input
                type="url"
                name="author.image"
                value={formData.author.image}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                disabled={isSubmitting}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time to Read (e.g., "5 min")
              </label>
              <input
                type="text"
                name="timeToRead"
                value={formData.timeToRead}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Publication Date*
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                disabled={isSubmitting}
              />
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => router.push('/admin/blogs')}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-secondary-500 text-white rounded-md hover:bg-secondary-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Create Blog'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
} 