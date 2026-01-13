import Layout from "../common/Layout";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const ResultsHeroSection = () => {
  const results = [
    {
      metric: "240%",
      description: "Increase in CTR for PointCard",
      linkText: "Increase case study",
      company: "PointCard",
      link: "/works/pointcard"
    },
    {
      metric: "50%",
      description: "Reduction in cost per asset for Amazon",
      linkText: "Reduction case study",
      company: "Amazon",
      link: "/works/amazon"
    },
    {
      metric: "70%",
      description: "Reduction in turnaround time for Salesforce",
      linkText: "Reduction case study",
      company: "Salesforce",
      link: "/works/salesforce"
    }
  ];

  return (
    <section className="py-20 bg-primary-500">
      <Layout>
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-secondary-500">
            Creative that <span className="font-Rock_Salt">works</span>
          </h2>
          <p className="text-secondary-500 mt-6 text-lg max-w-3xl mx-auto">
            We help the world's leading brands create standout ads and campaigns at speed— from concept to execution to results.
          </p>
        </div>

        <div className="container mx-auto px-4 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {results.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <p className="text-secondary-500 text-lg font-medium">{item.description}</p>
                  <Link 
                    href={item.link} 
                    className="text-secondary-500 flex items-center justify-center gap-1 hover:underline mt-1"
                  >
                    {item.linkText} <FiArrowUpRight />
                  </Link>
                </div>
                <h3 className="text-7xl md:text-8xl font-light text-secondary-500 mt-auto">{item.metric}</h3>
              </div>
            ))}
          </div>
        </div>
       
      </Layout>
    </section>
  );
};

export default ResultsHeroSection; 
