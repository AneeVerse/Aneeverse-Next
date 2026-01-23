# Mega Menu Hover Logic Guide

This document explains the **working mega menu hover logic** used in the Aneeverse project. The key to preventing glitching/flickering is how the container handles `onMouseEnter` and `onMouseLeave` events, and proper CSS positioning.

---

## Core Problem & Solution

### The Problem (Glitching/Flickering)
The common issue with mega menus is that when you hover over the trigger element, the mega menu appears, but there's a **gap** between the trigger and the menu. When the mouse moves into that gap, it triggers `onMouseLeave`, closing the menu. This causes the flickering/glitching effect.

### The Solution
1. **Wrap both the trigger AND the dropdown in the SAME container**
2. **Attach `onMouseEnter` and `onMouseLeave` to the parent container**, not the trigger
3. **Eliminate visual gaps** using padding/positioning instead of margins
4. **Use absolute/fixed positioning** with proper top values to create seamless hover zones

---

## Working Code Pattern

### Basic Structure

```jsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Optional: for animations
import Link from "next/link";

const MegaMenuComponent = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // ⚠️ CRITICAL: The parent container handles ALL hover events
    <div
      className=""
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Button/Link */}
      <Link
        href="/your-link"
        style={{ color: color.text }}
        className="p-2 cursor-pointer flex items-center group"
      >
        <span className="flex items-center gap-2">
          Menu Item
          <ChevronIcon 
            className={`${isOpen ? "-rotate-180" : ""} 
              group-hover:-rotate-180 duration-300 transition-all text-[10px]`} 
          />
        </span>
      </Link>

      {/* Mega Menu Dropdown - Conditionally rendered */}
      {isOpen && (
        <motion.div
          className="absolute left-0 top-[60px] pt-[20px] w-full z-[90]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="bg-white shadow-lg border py-3">
            {/* Your mega menu content here */}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MegaMenuComponent;
```

---

## Key Implementation Details

### 1. Parent Container Pattern

```jsx
// ✅ CORRECT: Hover events on parent container
<div
  onMouseEnter={() => setIsOpen(true)}
  onMouseLeave={() => setIsOpen(false)}
>
  <button>Trigger</button>
  {isOpen && <div>Mega Menu</div>}
</div>

// ❌ WRONG: Separate hover events on trigger and menu
<div>
  <button onMouseEnter={() => setIsOpen(true)}>Trigger</button>
  {isOpen && (
    <div onMouseLeave={() => setIsOpen(false)}>
      Mega Menu
    </div>
  )}
</div>
```

### 2. Positioning & Gap Prevention

```jsx
// ✅ CORRECT: Use pt (padding-top) to create seamless hover zone
<motion.div
  className="absolute left-0 top-[60px] pt-[20px] w-full z-[90]"
>
  <div className="bg-white shadow-lg">
    {/* Content */}
  </div>
</motion.div>

// ❌ WRONG: Using mt (margin-top) creates a gap
<motion.div
  className="absolute left-0 top-[60px] mt-[20px] w-full z-[90]"
>
  {/* This creates a gap where hover is lost! */}
</motion.div>
```

### 3. Position Values Explanation

| Property | Value | Purpose |
|----------|-------|---------|
| `position` | `absolute` or `fixed` | Removes from normal flow |
| `left` | `0` | Full width alignment |
| `top` | `60px` - `80px` | Position below navbar (adjust based on navbar height) |
| `padding-top` | `20px` | Creates invisible hover zone between trigger and content |
| `z-index` | `90` | Ensures menu appears above other content |
| `width` | `100%` or `w-full` | Full viewport width |

---

## Full Working Example (Services Mega Menu)

```jsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const ServicesMegaMenu = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      title: "Category 1",
      items: [
        { name: "Service 1", url: "/services/1", description: "Description" },
        { name: "Service 2", url: "/services/2", description: "Description" },
      ],
    },
    // Add more categories
  ];

  return (
    <div
      className=""
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Link */}
      <Link
        href="/services"
        style={{ color: color.text }}
        className="p-2 cursor-pointer flex items-center group"
      >
        {/* Animated dot indicator */}
        <span
          style={{ backgroundColor: color.text }}
          className={`${isOpen ? "mr-[6px] scale-100" : ""} 
            h-[5px] w-[5px] inline-block transition-all 
            group-hover:mr-[6px] duration-300 scale-0 
            group-hover:scale-100 rounded-full`}
        />
        <span className="flex items-center gap-2">
          Services
          <FaChevronDown
            className={`${isOpen ? "-rotate-180" : ""} 
              group-hover:-rotate-180 duration-300 
              transition-all self-center text-[10px]`}
          />
        </span>
      </Link>

      {/* Mega Menu Dropdown */}
      {isOpen && (
        <motion.div
          // ⚠️ CRITICAL POSITIONING:
          // - absolute: positions relative to nearest positioned ancestor
          // - left-0: aligns to left edge
          // - top-[60px]: just below navbar (adjust to your navbar height)
          // - pt-[20px]: PADDING creates seamless hover zone (NOT margin!)
          // - w-full: full width
          // - z-[90]: above other content
          className="absolute left-0 top-[60px] pt-[20px] w-full z-[90]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="bg-[#EBFAFE] shadow-lg border py-3 border-gray-200">
            {/* Your grid/content layout */}
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-3 gap-6">
                {menuItems.map((category, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-lg mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.url}
                          // Close menu when clicking a link
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 hover:bg-gray-100 rounded"
                        >
                          <h4 className="text-sm font-medium">{item.name}</h4>
                          <p className="text-xs text-gray-500">{item.description}</p>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ServicesMegaMenu;
```

---

## Alternative: Full-Screen Overlay Pattern (Portfolio Menu)

For a more immersive experience with backdrop blur:

```jsx
{isOpen && (
  <motion.div
    // Fixed positioning for full-screen overlay
    className="fixed h-screen inset-0 w-full top-[60px] pt-5 z-[90]"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    exit={{ opacity: 0, y: -10 }}
  >
    {/* Backdrop with blur */}
    <div className="backdrop-blur-[2px] h-full w-full">
      <motion.div
        // Secondary onMouseLeave for extra protection
        onMouseLeave={() => setIsOpen(false)}
        className="bg-[#EBFAFE] shadow-lg border border-gray-200"
      >
        {/* Content */}
      </motion.div>
    </div>
  </motion.div>
)}
```

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Separate Hover Handlers
```jsx
// DON'T DO THIS
<button onMouseEnter={() => setIsOpen(true)}>Trigger</button>
{isOpen && <div onMouseLeave={() => setIsOpen(false)}>Menu</div>}
```

### ❌ Mistake 2: Using Margin Instead of Padding
```jsx
// DON'T DO THIS - creates a hover gap
<div className="absolute top-[60px] mt-[20px]">...</div>

// DO THIS INSTEAD
<div className="absolute top-[60px] pt-[20px]">...</div>
```

### ❌ Mistake 3: Not Using Proper Z-Index
```jsx
// DON'T DO THIS - menu may appear behind other elements
<div className="absolute">...</div>

// DO THIS INSTEAD
<div className="absolute z-[90]">...</div>
```

### ❌ Mistake 4: Gaps Between Navbar and Menu
```jsx
// DON'T DO THIS - if navbar is 80px, don't set top to 100px (creates gap)
<div className="absolute top-[100px]">...</div>

// DO THIS INSTEAD - match or slightly overlap the navbar
<div className="absolute top-[75px] pt-[10px]">...</div>
```

---

## CSS Classes Reference

```css
/* Essential positioning classes */
.absolute          /* Position relative to nearest positioned ancestor */
.fixed             /* Position relative to viewport */
.left-0            /* Align to left edge */
.top-[60px]        /* Distance from top (adjust to navbar height) */
.w-full            /* Full width */
.z-[90]            /* High z-index to appear above content */

/* Gap prevention */
.pt-[20px]         /* Padding-top creates seamless hover zone */

/* Animation classes (Framer Motion or CSS) */
.transition-all    /* Smooth transitions */
.duration-300      /* 300ms animation duration */

/* Visual styling */
.shadow-lg         /* Drop shadow for depth */
.bg-[#EBFAFE]      /* Background color */
.border            /* Border styling */
.border-gray-200   /* Border color */
```

---

## State Management Checklist

- [ ] Single `isOpen` state in the component
- [ ] `onMouseEnter` on parent sets `isOpen(true)`
- [ ] `onMouseLeave` on parent sets `isOpen(false)`
- [ ] Links inside menu should call `setIsOpen(false)` on click
- [ ] No delays or timeouts needed (React handles state updates)

---

## Integration with Navbar

Your Navbar should render mega menu components like this:

```jsx
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-[80px] z-[99]">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Logo />
        
        {/* Menu Items with Mega Menus */}
        <div className="flex items-center gap-6">
          <ServicesMegaMenu color={color} />
          <PortfolioMegaMenu color={color} />
          <ResourcesMegaMenu color={color} />
        </div>
        
        {/* CTA Buttons */}
        <CTAButtons />
      </div>
    </nav>
  );
};
```

---

## Dependencies

- **React**: `useState` for open/close state
- **Framer Motion** (optional): For smooth animations
- **Next.js Link** (optional): For SPA-style navigation
- **Tailwind CSS** (optional): For utility classes (can be replaced with regular CSS)

If not using Framer Motion, replace `motion.div` with regular `div` and use CSS transitions.

---

## Summary

The key to a non-glitchy mega menu is:

1. **Single parent container** handles all hover events
2. **Use padding-top** (not margin) between trigger and dropdown
3. **Proper absolute/fixed positioning** with correct top value
4. **High z-index** to ensure visibility
5. **Close menu** when clicking links inside

Follow this pattern and your mega menu will work smoothly without flickering!
