export const metadata = {
  title: "Blog | Aneeverse",
  description: "Discover our latest articles about various topics.",
};

export default function CategoryLayout({ params, children }) {
  // Get the category name from the slug
  const category = params.slug?.replace(/-/g, ' ');
  
  // If the category is valid, override the default metadata
  if (category) {
    metadata.title = `${category} Blogs | Aneeverse`;
    metadata.description = `Discover our latest articles about ${category}.`;
    metadata.url = `https://aneeverse.com/blog/${params.slug}`;
    
    // Override the OpenGraph images as well
    if (metadata.openGraph) {
      metadata.openGraph.title = `${category} Blogs | Aneeverse`;
      metadata.openGraph.url = `https://aneeverse.com/blog/${params.slug}`;
    }
    
    // Override Twitter metadata
    if (metadata.twitter) {
      metadata.twitter.title = `${category} Blogs | Aneeverse`;
    }
  }
  
  return children;
}
