"use client";
import { useState } from "react";
import Layout from "../common/Layout";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";
import FAQSchema from "../seo/FAQSchema";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="text-2xl font-medium text-gray-900">{question}</span>
        <span className="ml-6">
          <svg
            className={`w-6 h-6 transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-base text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is Aneeverse?",
      answer: "Aneeverse is a creative-as-a-service agency specializing in digital marketing, web design, and content creation. We help businesses grow their online presence through expert design, development, and marketing services with an on-demand creative team that's more cost-effective than maintaining an in-house team.",
    },
    {
      question: "What services do you cover?",
      answer: "We offer a comprehensive range of digital services including: Website Design & Development, Landing Page Creation, SEO Optimization, Local SEO & GMB Optimization, Email Design & Campaigns, Marketing Strategy, Google & Meta Ads Management, Content Writing (Blog & Ghost Writing), and Creative Design Services (Social Media, Presentations, Brochures).",
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing varies based on the service and scope of work. We offer flexible monthly and annual plans, as well as project-based pricing. Visit our pricing page for detailed information or schedule a call with us to get a customized quote for your specific needs.",
    },
    {
      question: "What are your business hours?",
      answer: "We operate during standard business hours (9 AM - 6 PM IST) Monday through Friday. However, our support team is available for urgent requests outside these hours, and we can accommodate different time zones for our international clients.",
    },
    {
      question: "Can anyone in my company use your services?",
      answer: "Yes! Once you're our client, multiple team members from your organization can collaborate with us. We provide a streamlined process for submitting requests and managing projects, making it easy for your entire team to work with us.",
    },
    {
      question: "What is included in the Annual Plan?",
      answer: "Our Annual Plan offers premium access to all our services at a discounted rate compared to monthly plans. It includes priority support, dedicated project management, and additional benefits like bulk hour discounts and rollover hours. Contact us for detailed annual plan options.",
    },
    {
      question: "What is included in the Monthly Plan?",
      answer: "Monthly Plans provide flexible access to our services without long-term commitment. You get a set number of service hours each month, access to our full range of services, and regular support. Plans can be customized based on your needs.",
    },
    {
      question: "Is there a minimum contract term?",
      answer: "While we offer month-to-month flexibility with our Monthly Plans, we recommend at least a 3-month commitment to achieve optimal results. Annual Plans offer better value and additional benefits for long-term partnerships.",
    },
    {
      question: "Are revisions unlimited?",
      answer: "We offer reasonable revisions to ensure your complete satisfaction. Our process includes multiple review points to get things right. While we don't have a strict limit on revisions, we work efficiently to deliver high-quality work that meets your requirements from the start.",
    },
    {
      question: "What are the typical turnaround times?",
      answer: "Turnaround times vary by project type: Small design tasks: 1-2 business days, Website pages: 3-5 business days, Full website projects: 2-4 weeks, Content writing: 2-3 business days per piece. Complex projects may require additional time, which we'll discuss during project planning.",
    },
    {
      question: "Will I work with the same team consistently?",
      answer: "Yes! We assign dedicated team members to your account to ensure consistency and efficiency. This team becomes familiar with your brand, preferences, and requirements, leading to better results and smoother collaboration over time.",
    },
    {
      question: "Who owns the copyright of the work created?",
      answer: "You retain full ownership and copyright of all work we create for you once the project is completed and paid for. This includes source files, which we can provide upon request.",
    },
    {
      question: "Can you handle rush projects?",
      answer: "Yes, we can accommodate rush projects based on availability. Rush fees may apply for extremely urgent requests. Please contact us directly for rush project requirements.",
    },
    {
      question: "How do you handle specialized industry knowledge?",
      answer: "Our team conducts thorough research and onboarding for each client to understand their industry, product, and specific requirements. We also maintain detailed documentation of your preferences and brand guidelines to ensure consistent quality.",
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription by contacting our support team. For Monthly Plans, we require notice before your next billing cycle. For Annual Plans, please refer to your service agreement for cancellation terms.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, bank transfers, and other standard payment methods. Invoices are generated monthly or as per project milestones, and payment terms are net 30 days unless otherwise specified.",
    },
  ];

  return (
    <>
      <FAQSchema 
        faqData={faqs} 
        pageTitle="Frequently Asked Questions - Aneeverse" 
      />
      <section className="py-12 bg-white">
        <Layout>
          <div className="max-w-4xl mx-auto">
            <Heading level="h1" className="text-center mb-12 mt-12 text-4xl">
              <span className="text-primary-900">Frequently Asked</span>{" "}
              <AccentText size="lg" className="text-4xl">Questions</AccentText>
            </Heading>

            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={index === openIndex}
                  onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600">
                Still have questions?{" "}
                <a
                  href="/contact"
                  className="text-primary-500 hover:text-primary-600 font-medium"
                >
                  Contact us
                </a>{" "}
                for more information.
              </p>
            </div>
          </div>
        </Layout>
      </section>
    </>
  );
}
