/**
 * Utility functions for working with Sanity content
 */

/**
 * Convert Sanity's block content to HTML (simple version)
 * For a more robust solution, consider using the @portabletext/react package
 */
export function blockContentToHtml(blocks) {
  if (!blocks || !Array.isArray(blocks)) {
    return '';
  }

  return blocks
    .map(block => {
      // Handle different block types
      switch (block._type) {
        case 'block':
          return textBlockToHtml(block);
        case 'image':
          return imageBlockToHtml(block);
        case 'youtube':
          return youtubeBlockToHtml(block);
        case 'youtubeEmbed':
          return youtubeBlockToHtml(block);
        case 'table':
          return tableBlockToHtml(block);
        default:
          console.warn('Unsupported block type:', block._type);
          return '';
      }
    })
    .join('');
}

/**
 * Convert a text block to HTML
 */
function textBlockToHtml(block) {
  if (!block) return '';

  // Get the base text with spans applied
  const text = block.children
    .map(child => {
      let text = child.text;
      
      // Apply marks (formatting)
      if (child.marks && child.marks.length > 0) {
        child.marks.forEach(mark => {
          switch (mark) {
            case 'strong':
              text = `<strong>${text}</strong>`;
              break;
            case 'em':
              text = `<em>${text}</em>`;
              break;
            case 'code':
              text = `<code>${text}</code>`;
              break;
            case 'underline':
              text = `<u>${text}</u>`;
              break;
            case 'strike-through':
              text = `<s>${text}</s>`;
              break;
            default:
              // Handle link marks or custom marks here
              if (mark.startsWith('link-')) {
                // Extract link from mark name if using a simple approach
                // For a robust solution, use the proper annotation data
                text = `<a href="#">${text}</a>`;
              }
          }
        });
      }
      
      return text;
    })
    .join('');

  // Apply block style
  switch (block.style) {
    case 'h1':
      return `<h1>${text}</h1>`;
    case 'h2':
      return `<h2>${text}</h2>`;
    case 'h3':
      return `<h3>${text}</h3>`;
    case 'h4':
      return `<h4>${text}</h4>`;
    case 'h5':
      return `<h5>${text}</h5>`;
    case 'h6':
      return `<h6>${text}</h6>`;
    case 'blockquote':
      return `<blockquote>${text}</blockquote>`;
    case 'normal':
    default:
      return `<p>${text}</p>`;
  }
}

/**
 * Convert an image block to HTML
 */
function imageBlockToHtml(block) {
  if (!block || !block.asset || !block.asset._ref) {
    return '';
  }

  // Extract image ID from reference
  const ref = block.asset._ref;
  const [, id, dimensions, format] = ref.split('-');
  
  // Get Sanity project ID and dataset from environment (fallback to values if not available at build time)
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
  
  // Build image URL
  const imageUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`;
  
  // Create HTML with alt text and caption if available
  const alt = block.alt || 'Blog image';
  const caption = block.caption ? `<figcaption>${block.caption}</figcaption>` : '';
  
  return `
    <figure>
      <img src="${imageUrl}" alt="${alt}" />
      ${caption}
    </figure>
  `;
}

/**
 * Convert a YouTube block to HTML
 */
function youtubeBlockToHtml(block) {
  if (!block || !block.url) {
    return '';
  }

  // Extract YouTube video ID from URL
  let videoId = '';
  const url = block.url;
  
  if (url.includes('youtube.com/watch')) {
    const urlParams = new URL(url).searchParams;
    videoId = urlParams.get('v');
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0];
  }
  
  if (!videoId) {
    return `<p>Invalid YouTube URL: ${url}</p>`;
  }
  
  // Create responsive embed like Superside uses
  const caption = block.caption ? `<figcaption>${block.caption}</figcaption>` : '';
  
  return `
    <figure class="youtube-embed">
      <iframe 
        src="https://www.youtube.com/embed/${videoId}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        class="youtube-player"
      ></iframe>
      ${caption}
    </figure>
  `;
}

/**
 * Convert a table block to HTML
 */
function tableBlockToHtml(block) {
  if (!block || !block.rows || !Array.isArray(block.rows)) {
    return '';
  }
  
  const hasHeaderRow = block.hasHeaderRow;
  const caption = block.caption ? `<caption>${block.caption}</caption>` : '';
  let tableHtml = `<div class="table-container"><table class="table-auto w-full border-collapse">${caption}`;
  
  // Process rows
  block.rows.forEach((row, rowIndex) => {
    tableHtml += '<tr>';
    
    // Process cells
    if (row.cells && Array.isArray(row.cells)) {
      row.cells.forEach((cell, cellIndex) => {
        // Use th for header row if specified
        if (hasHeaderRow && rowIndex === 0) {
          tableHtml += `<th class="border p-2 font-semibold text-left">${cell}</th>`;
        } else {
          tableHtml += `<td class="border p-2">${cell}</td>`;
        }
      });
    }
    
    tableHtml += '</tr>';
  });
  
  tableHtml += '</table></div>';
  return tableHtml;
}