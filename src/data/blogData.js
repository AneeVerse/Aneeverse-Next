// data/blogs.js
export const blogs = [
    {
      id: "giant-leap-superside",
      title: "A Giant Leap Forward: Superside’s New Brand Has Landed",
     
      thumbnail: "/images/blog/creative-design/blog1/thumbnail.avif",
      category: "Digital Advertising",
      date: "2025-02-01",
      timeToRead: "5 min read",
      author: {
        name: "Jennifer Rapp",
        role: "Chief Marketing Officer",
        image: "/images/blog/author/author.avif",
      }, 
      shortDescription: "A new Superside has arrived—and it's spectacular. We've completely redefined our entire look and feel to capture exactly how we bring the world's leading enterprise brands a whole new universe of creative freedom.",
      description:
      <div>
        <div >
       <div className=" highlight">
        <h5>Houston, We Have a New Brand!</h5>

        <p>A new Superside has arrived—and it's spectacular. We've completely redefined our entire look and feel to capture exactly how we bring the world's leading enterprise brands a whole new universe of creative freedom. Curious? The suspense is over and all the details are below. (You didn't think we'd spill everything in the TL;DR, did you?).</p>
        </div>
        
        <p>The eagle has landed! Our brand now reflects who we are: The world’s leading AI-powered creative services company, transforming how enterprise teams approach design.</p>
        <p>Over the past decade, Superside has grown from a scale-up to a global creative powerhouse, working with tech giants like Amazon, Vimeo, Meta, Salesforce and Reddit.</p>
        <p>We’re proud to work with the best brands on the planet. The one thing they all have in common? Incredible in-house creative teams brimming with world-class talent—and all strapped for time and resources.</p>
        <p>Our mission: To help enterprise creative teams dream bigger, move faster, scale smarter and build iconic brands</p>
        </div>
      </div>,
      content: [
        {
          title: "A Fresh New Look",
          type: "image",
          srcUrl:  "/images/blog/creative-design/blog1/thumbnail.avif",
          description:<div > <p>AI is making hyper-personalized marketing campaigns more effective than ever. </p>
          <p>Today, we're unveiling a completely reimagined look and feel. Don’t worry—we’re still Superside, with the same fun-loving, kind and clever spirit.</p>
          <li>
            <strong>Key Takeaway:</strong> Brands that leverage AI for personalization will see higher engagement rates.
          </li>
          <li>
            <strong>What to Expect:</strong> AI-powered tools will help marketers create more targeted campaigns.
          </li>
          </div>,
        },
        {
          title: "What’s Changing?",
          type: "image", // video
          srcUrl:  "/images/blog/creative-design/blog1/thumbnail.avif",
          description:<div> <p>AI is making hyper-personalized marketing campaigns more effective than ever. </p>
            <p>Our new brand identity aligns with our mission to empower marketers with better, faster creative.</p>
            <p>Our new brand identity aligns with our mission to empower marketers with better, faster creative.</p>
            <p>I’m Jen Rapp, Superside CMO. Fun fact: I was a Superside customer before joining the team. Previously, I led brand marketing at Klaviyo and, in 2021, our creative team was, to put it lightly, underwater. We hired Superside to help bridge a growing bandwidth gap.</p>
            <p>Our new brand identity aligns with our mission to empower marketers with better, faster creative.</p>
          </div>,
        },
        {
          title: "What’s Next?",
          type: "image",
          srcUrl:  "/images/blog/creative-design/blog1/thumbnail.avif",
          description:
          <div>
            <p>Superside is evolving, and this is just the beginning. Learn about our roadmap for 2025.</p>
          </div>,
        },
      ],
    },
  // AI Marketing Category
  {
    id: "ai-marketing-trends",
    title: "Top 10 AI Marketing Trends to Watch in 2025",
    thumbnail: "/images/blog/creative-design/blog1/thumbnail.avif",
    category: "AI Marketing",
    date: "2025-03-15",
    timeToRead: "8 min read",
    author: {
      name: "Alex Morgan",
      role: "AI Strategy Lead",
      image: "/images/blog/author/author.avif",
      bio: "Alex specializes in AI-driven marketing strategies with 10+ years of experience."
    },
    shortDescription: "Discover how AI is revolutionizing digital marketing strategies and what businesses need to adopt.",
    description: (
      <div>
        <h5>The AI Marketing Revolution</h5>
        <p>Artificial Intelligence is transforming how brands interact with customers...</p>
        <ul>
          <li>Real-time personalization at scale</li>
          <li>Predictive analytics for campaign optimization</li>
          <li>Automated content generation</li>
        </ul>
      </div>
    ),
    content: [
      {
        title: "Hyper-Personalization",
        type: "image",
        srcUrl:  "/images/blog/creative-design/blog1/thumbnail.avif",
        description: (
          <div>
            <p>AI enables 1:1 customer experiences through...</p>
            <div className="case-study">
              <h6>Spotify Case Study:</h6>
              <p>How they use AI to create personalized playlists</p>
            </div>
          </div>
        )
      },
      {
        title: "AI Content Creation",
        type: "video",
        srcUrl: "https://www.youtube.com/embed/TuMxVxYXXfY?si=quL1WPOI9XBFuHbf&amp;controls=0" ,
        description:<div>
          <p>AI-powered tools are transforming how marketers create content...</p>
          <div className="stats">
            <p>→ 2x faster content creation</p>
            <p>→ 3x higher engagement rates</p>
          </div>
        </div>
      }
    ]
  },
  {
    id: "chatgpt-marketing",
    title: "Using ChatGPT for Marketing: Best Practices",
    thumbnail: "/images/blog/creative-design/blog1/thumbnail.avif",
    category: "AI Marketing",
    date: "2025-04-10",
    timeToRead: "7 min read",
    author: {
      name: "Emily Zhang",
      role: "Content Strategist",
      image: "/images/blog/author/author.avif",
    },
    content: [
      {
        title: "Content Ideation",
        type: "text",
        description: "How ChatGPT can generate 100+ blog ideas in minutes."
      }
    ]
  },

  // Creative Design Category
  {
    id: "design-system-guide",
    title: "Building Scalable Design Systems for Enterprises",
    thumbnail:  "/images/blog/creative-design/blog1/thumbnail.avif",
    category: "Creative Design",
    date: "2025-04-02",
    timeToRead: "6 min read",
    author: {
      name: "Sarah Chen",
      role: "Lead Product Designer",
      image: "/images/blog/author/author.avif",
    },
    content: [
      {
        title: "Atomic Design Principles",
        type: "image",
        srcUrl: "/images/blog/atomic-design.avif",
        description: (
          <div>
            <p>Breaking down UI into fundamental components...</p>
            <div className="stats">
              <p>→ 40% faster development cycles</p>
              <p>→ 75% consistency improvement</p>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: "ui-trends-2025",
    title: "UI Design Trends for 2025",
    thumbnail:  "/images/blog/creative-design/blog1/thumbnail.avif",
    category: "Creative Design",
    date: "2025-05-01",
    timeToRead: "5 min read",
    author: {
      name: "Michael Lee",
      role: "UI/UX Designer",
      image: "/images/blog/author/author.avif",
    },
    content: [
      {
        title: "Neomorphism",
        type: "image",
        srcUrl: "/images/blog/neomorphism.avif",
        description: "The return of soft UI design trends."
      }
    ]
  },

  // Content Strategy Category
  {
    id: "video-marketing",
    title: "2025 Video Marketing Playbook",
    thumbnail:  "/images/blog/creative-design/blog1/thumbnail.avif",
    category: "Content Strategy",
    date: "2025-06-15",
    timeToRead: "9 min read",
    author: {
      name: "Jessica Brown",
      role: "Video Marketing Specialist",
      image: "/images/blog/author/author.avif",
    },
    content: [
      {
        title: "Short-Form Video Domination",
        type: "video",
        srcUrl: "https://www.youtube.com/embed/TuMxVxYXXfY?si=quL1WPOI9XBFuHbf&amp;controls=0",
        description: "TikTok-style content strategies for B2B brands"
      }
    ]
  },
  {
    id: "content-calendar",
    title: "Building an Effective Content Calendar",
    thumbnail:  "/images/blog/creative-design/blog1/thumbnail.avif",
    category: "Content Strategy",
    date: "2025-07-01",
    timeToRead: "6 min read",
    author: {
      name: "David Wilson",
      role: "Content Manager",
      image: "/images/blog/author/author.avif",
    },
    content: [
      {
        title: "Planning Process",
        type: "text",
        description: "Step-by-step guide to creating a content calendar."
      }
    ]
  },

  // Additional Blog Posts
  {
    id: "seo-2025",
    title: "SEO Trends to Watch in 2025",
    thumbnail:  "/images/blog/creative-design/blog1/thumbnail.avif",
    category: "AI Marketing",
    date: "2025-08-10",
    timeToRead: "7 min read",
    author: {
      name: "Rachel Green",
      role: "SEO Expert",
      image: "/images/blog/author/author.avif",
    },
    content: [
      {
        title: "AI-Powered SEO",
        type: "text",
        description: "How AI is changing the SEO landscape."
      }
    ]
  },
  {
    id: "brand-identity",
    title: "Creating a Strong Brand Identity",
    thumbnail:  "/images/blog/creative-design/blog1/thumbnail.avif",
    category: "Creative Design",
    date: "2025-09-05",
    timeToRead: "6 min read",
    author: {
      name: "Chris Evans",
      role: "Brand Strategist",
      image: "/images/blog/author/author.avif",
    },
    content: [
      {
        title: "Logo Design",
        type: "image",
        srcUrl: "/images/blog/logo-design.avif",
        description: "Key principles for effective logo design."
      }
    ]
  },
  {
    id: "social-media-strategy",
    title: "2025 Social Media Strategy Guide",
    thumbnail: "/images/blog/social-media.avif",
    category: "Content Strategy",
    date: "2025-10-01",
    timeToRead: "8 min read",
    author: {
      name: "Laura Smith",
      role: "Social Media Manager",
      image: "/images/blog/author/author.avif",
    },
    content: [
      {
        title: "Platform Trends",
        type: "text",
        description: "Emerging trends across major social platforms."
      }
    ]
  }
];