import FAQSection from "@/components/faq/FAQSection";

export const metadata = {
  title: "FAQ - Aneeverse",
  description: "Frequently asked questions about Aneeverse's services, pricing, and processes.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <FAQSection />
    </main>
  );
} 