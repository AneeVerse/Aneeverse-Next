export const metadata = {
  title: "All Blog Articles",
  description: "Browse all our blog articles covering design, marketing, AI and more to help your team achieve creative excellence.",
  openGraph: {
    title: "All Blog Articles",
    description: "Browse all our blog articles covering design, marketing, AI and more to help your team achieve creative excellence.",
    url: `https://aneeverse.com/blog/all`,
    images: [
      {
        url: "/images/meta/phone.avif", // Replace with appropriate image
        width: 1200,
        height: 630,
        alt: "All Blog Articles",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Blog Articles",
    description: "Browse all our blog articles covering design, marketing, AI and more to help your team achieve creative excellence.",
    image: "/images/meta/phone.avif", // Replace with appropriate image
  },
};

export default function AllBlogsLayout({ children }) {
  return <>{children}</>;
} 