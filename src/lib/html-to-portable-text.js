/**
 * Library for converting HTML to Sanity Portable Text format
 * This allows copy-pasting content from anywhere while preserving formatting
 */

/**
 * Convert HTML string to Sanity Portable Text format
 * @param {string} html - The HTML string to convert
 * @returns {Array} - Array of Portable Text blocks
 */
export function htmlToPortableText(html) {
  if (!html) return [];
  
  // Create a DOM parser
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  
  // Process the main content
  return processNode(doc.body);
}

/**
 * Process a DOM node and its children into Portable Text
 * @param {Node} node - The DOM node to process
 * @returns {Array} - Array of Portable Text blocks
 */
function processNode(node) {
  if (!node) return [];
  
  const blocks = [];
  
  // Process all child nodes
  Array.from(node.childNodes).forEach(child => {
    // Handle different node types
    switch (child.nodeType) {
      case Node.ELEMENT_NODE:
        blocks.push(...processElement(child));
        break;
      case Node.TEXT_NODE:
        // Only add text nodes with actual content
        if (child.textContent.trim()) {
          blocks.push(createTextBlock(child.textContent.trim()));
        }
        break;
    }
  });
  
  return blocks;
}

/**
 * Process an element node into Portable Text
 * @param {Element} element - The element to process
 * @returns {Array} - Array of Portable Text blocks
 */
function processElement(element) {
  const blocks = [];
  const tagName = element.tagName.toLowerCase();
  
  // Handle block elements
  switch (tagName) {
    case 'table':
      blocks.push(processTable(element));
      break;
    case 'p':
      blocks.push(processParagraph(element));
      break;
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      blocks.push(processHeading(element));
      break;
    case 'ul':
    case 'ol':
      blocks.push(...processList(element));
      break;
    case 'blockquote':
      blocks.push(processBlockquote(element));
      break;
    case 'div':
      // For divs, process all children
      blocks.push(...processNode(element));
      break;
    default:
      // For inline elements or unknown elements, just get their text content
      if (element.textContent.trim()) {
        blocks.push(processInlineElement(element));
      }
      break;
  }
  
  return blocks;
}

/**
 * Process a table element into a Portable Text table block
 * @param {Element} tableElement - The table element to process
 * @returns {Object} - A Portable Text table block
 */
function processTable(tableElement) {
  const rows = [];
  let hasHeaderRow = false;
  
  // Process rows
  tableElement.querySelectorAll('tr').forEach((rowElement, rowIndex) => {
    const cells = [];
    const isHeader = rowIndex === 0 && rowElement.querySelectorAll('th').length > 0;
    
    if (isHeader) {
      hasHeaderRow = true;
    }
    
    // Process cells
    rowElement.querySelectorAll('th, td').forEach(cellElement => {
      cells.push(cellElement.textContent.trim());
    });
    
    rows.push({
      _type: 'row',
      cells
    });
  });
  
  return {
    _type: 'table',
    hasHeaderRow,
    rows
  };
}

/**
 * Process a paragraph element into a Portable Text block
 * @param {Element} element - The paragraph element to process
 * @returns {Object} - A Portable Text block
 */
function processParagraph(element) {
  return {
    _type: 'block',
    style: 'normal',
    children: processInlineContent(element)
  };
}

/**
 * Process a heading element into a Portable Text block
 * @param {Element} element - The heading element to process
 * @returns {Object} - A Portable Text block
 */
function processHeading(element) {
  const tagName = element.tagName.toLowerCase();
  
  return {
    _type: 'block',
    style: tagName, // h1, h2, etc.
    children: processInlineContent(element)
  };
}

/**
 * Process a list element into Portable Text blocks
 * @param {Element} element - The list element to process
 * @returns {Array} - Array of Portable Text blocks
 */
function processList(element) {
  const blocks = [];
  const listType = element.tagName.toLowerCase() === 'ol' ? 'number' : 'bullet';
  
  // Process list items
  element.querySelectorAll('li').forEach(item => {
    blocks.push({
      _type: 'block',
      style: 'normal',
      listItem: listType,
      level: 1,
      children: processInlineContent(item)
    });
  });
  
  return blocks;
}

/**
 * Process a blockquote element into a Portable Text block
 * @param {Element} element - The blockquote element to process
 * @returns {Object} - A Portable Text block
 */
function processBlockquote(element) {
  return {
    _type: 'block',
    style: 'blockquote',
    children: processInlineContent(element)
  };
}

/**
 * Process inline content into Portable Text spans
 * @param {Element} element - The element containing inline content
 * @returns {Array} - Array of Portable Text spans
 */
function processInlineContent(element) {
  const spans = [];
  
  // Process all inline nodes
  processInlineNodes(element, spans);
  
  // If no spans, add a default span with the text content
  if (spans.length === 0 && element.textContent.trim()) {
    spans.push({
      _type: 'span',
      text: element.textContent.trim()
    });
  }
  
  return spans;
}

/**
 * Process inline nodes recursively
 * @param {Node} node - The node to process
 * @param {Array} spans - Array of spans to add to
 * @param {Array} marks - Current active marks
 */
function processInlineNodes(node, spans, marks = []) {
  if (!node) return;
  
  // Process different node types
  switch (node.nodeType) {
    case Node.TEXT_NODE:
      // Add text node with current marks
      if (node.textContent.trim()) {
        spans.push({
          _type: 'span',
          text: node.textContent,
          marks: [...marks]
        });
      }
      break;
    case Node.ELEMENT_NODE:
      // Get marks for this element
      const elementMarks = getMarksForElement(node, marks);
      
      // If element has no children, add its text content with current marks
      if (node.childNodes.length === 0 && node.textContent.trim()) {
        spans.push({
          _type: 'span',
          text: node.textContent,
          marks: elementMarks
        });
      } else {
        // Process all children with updated marks
        Array.from(node.childNodes).forEach(child => {
          processInlineNodes(child, spans, elementMarks);
        });
      }
      break;
  }
}

/**
 * Get marks for an element based on its tag and attributes
 * @param {Element} element - The element to get marks for
 * @param {Array} currentMarks - Current active marks
 * @returns {Array} - Updated marks array
 */
function getMarksForElement(element, currentMarks = []) {
  const newMarks = [...currentMarks];
  const tagName = element.tagName.toLowerCase();
  
  // Add marks based on tag name
  switch (tagName) {
    case 'strong':
    case 'b':
      newMarks.push('strong');
      break;
    case 'em':
    case 'i':
      newMarks.push('em');
      break;
    case 'u':
      newMarks.push('underline');
      break;
    case 's':
    case 'strike':
    case 'del':
      newMarks.push('strike-through');
      break;
    case 'a':
      // For links, we would normally create a link annotation
      // This is simplified for the example
      newMarks.push('link');
      break;
    case 'code':
      newMarks.push('code');
      break;
  }
  
  // Check for style attribute (simplified)
  if (element.style) {
    if (element.style.fontWeight === 'bold' || parseInt(element.style.fontWeight) >= 600) {
      newMarks.push('strong');
    }
    if (element.style.fontStyle === 'italic') {
      newMarks.push('em');
    }
    if (element.style.textDecoration === 'underline') {
      newMarks.push('underline');
    }
    if (element.style.textDecoration === 'line-through') {
      newMarks.push('strike-through');
    }
  }
  
  return newMarks;
}

/**
 * Create a simple text block
 * @param {string} text - The text content
 * @returns {Object} - A Portable Text block
 */
function createTextBlock(text) {
  return {
    _type: 'block',
    style: 'normal',
    children: [
      {
        _type: 'span',
        text
      }
    ]
  };
}

/**
 * Process an inline element into a text block
 * @param {Element} element - The element to process
 * @returns {Object} - A Portable Text block
 */
function processInlineElement(element) {
  return {
    _type: 'block',
    style: 'normal',
    children: processInlineContent(element)
  };
} 