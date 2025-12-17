import React from "react";
import Link from "next/link";
import Layout from "../common/Layout";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const serviceCategories = [
    {
      title: "Creative Design",
      links: [
        { name: "Ad Creative", href: "/services/ad-creative" },
        { name: "Presentation Design", href: "/services/presentation-design" },
        { name: "Branding System & Merchandise", href: "/services/branding-services" },
        { name: "Ebook, Report & Print Design", href: "/services/ebook-digital-report" },
      ],
    },
    {
      title: "Specialized Solutions",
      links: [
        { name: "Platform Development", href: "/services/platform-development" },
        { name: "UI, UX & Web Development", href: "/services/ui-ux-web-development" },
        { name: "Copywriting", href: "/services/copywriting" },
        { name: "SEO & Blog Writing", href: "/services/seo-optimization" },
      ],
    },
    {
      title: "AI & Automation",
      links: [
        { name: "AI SEO (GEO) (AEO) (AIO)", href: "/services/ai-seo-geo-aeo-aio" },
        { name: "n8n Workflows", href: "/services/n8n-workflows" },
        { name: "Sales & Marketing Automation", href: "/services/sales-marketing-automation" },
        { name: "Marketing Strategy", href: "/services/marketing-strategy" },
        { name: "Email Design & Campaign", href: "/services/email-campaign" },
      ],
    },
  ];

  const navigation = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about-us" },
        { name: "Our Team", href: "/our-team" },
        { name: "Pricing", href: "/pricing" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Customer Stories", href: "/customer-stories" },
        { name: "Our Works", href: "/works" },
        { name: "FAQ", href: "/faq" },
      ],
    },
  ];

  return (
    <footer className="bg-secondary-500 text-primary-500 pt-12">
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Aneeverse</h2>
            <p className="text-primary-500/70 text-sm max-w-xs">
              Design, optimize, advertise. Your creative team, on-demand.
            </p>
          </div>

          {serviceCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-lg font-semibold">{category.title}</h3>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-primary-500/80 hover:text-primary-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {navigation.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-primary-500/80 hover:text-primary-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-500/20 pt-6 pb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-primary-500/70">
            © 2025 Aneeverse. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xl text-primary-500/80">
            <Link href="https://twitter.com" className="hover:text-primary-500">
              <FaTwitter />
            </Link>
            <Link href="https://facebook.com" className="hover:text-primary-500">
              <FaFacebook />
            </Link>
            <Link href="https://instagram.com" className="hover:text-primary-500">
              <FaInstagram />
            </Link>
          </div>
          <div className="text-sm text-primary-500/70 flex gap-3">
            <Link href="/privacy-policy" className="hover:text-primary-500">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-of-service" className="hover:text-primary-500">
              Terms of Service
            </Link>
          </div>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;