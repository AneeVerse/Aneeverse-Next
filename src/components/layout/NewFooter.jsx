
import Link from "next/link";
import { FaInstagram, FaLinkedinIn,FaYoutube } from "react-icons/fa";
export default function NewFooter() {
    const footerData = {
      services: {
        heading: "Services",
        items: [
          {
            title: "Creative design services ↗",
            links: [
              "Ad creative",
              "Social media creative",
              "Presentation design",
              "Illustration design",
              "Branding services",
              "Email creation",
              "Web design",
              "eBooks & report design",
              "Concept creation",
              "Print design",
              "Packaging & merchandise design",
            ],
          },
          {
            title: "Specialized production services ↗",
            links: ["Video production", "Motion design", "3D & AR design"],
          },
          {
            title: "AI Services ↗",
            links: ["AI enhanced creative", "AI consulting"],
          },
          {
            title: "Marketing services ↗",
            links: ["Marketing strategy"],
          },
        ],
      },
      navigation: {
        heading: "Navigation",
        sections: {
          items: [
            {
              title: "main",
              links: ["Our Work", "Our people", "About Us", "Pricing", "Careers"],
            },
            {
              title: "learn",
              links: [
                "Blog",
                "Events & Summits",
                "Guides & Reports",
                "Customer Stories",
                "Video Library",
                "Playbooks",
              ],
            }
          ],
          
        },
      },
      legal: ["Privacy Policy", "Terms of Use", ],
      
    };
  
    return (
      <footer className="bg-secondary-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Top Sections */}
               {/* Top Section */}
     <div className=" text-center">
     <h2 className="text-4xl font-bold text-white">
       DESIGN, OPTIMIZE, ADVERTISE
     </h2>
     <p className="mt-4 text-3xl text-orange-400 font-Rock_Salt">
       WE GOT YOU COVERED
     </p>
     <button className="mt-8 px-6 text-md py-2 bg-primary-500 text-secondary-500 text-lg font-semibold rounded-full  transition">
       GET STARTED
     </button>
   </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-8 border-b border-gray-600 pb-10">
            {/* Services Section */}
            <div className="">  
              <h3 className="text-lg border-b pb-1 border-gray-200 font-semibold mb-4">{footerData.services.heading}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {footerData.services.items.map((item, index) => (
                  <div key={index}>
                    <h4 className="font-medium mb-2">{item.title}</h4>
                    <ul>
                      {item.links.map((link, i) => (
                        <li key={i} className="text-sm text-[#c9c9c9] mb-2 cursor-pointer hover:underline">
                          {link}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Navigation Section */}
            <div className="">
              <h3 className="text-lg  border-b border-gray-200 pb-1 font-semibold mb-4">{footerData.navigation.heading}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {footerData.navigation.sections.items.map((item, index) => (
                  <div key={index}>
                    <h4 className="font-medium mb-2">{item.title}</h4>
                    <ul>
                      {item.links.map((link, i) => (
                        <li key={i} className="text-sm text-[#c9c9c9] mb-2 cursor-pointer hover:underline">
                          {link}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              
              </div>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-10 flex flex-col lg:flex-row justify-between items-center">
            {/* Legal Links */}
            <div className="text-center flex flex-col sm:flex-row justify-between w-full l">
              <p className="text-sm">&copy; 2025 Aneeverse. All rights reserved.</p>
              <ul className="flex flex-col sm:flex-row mt-3 sm:mt-0 gap-4 text-sm ">
                {footerData.legal.map((legalItem, index) => (
                  <li key={index}>
                    <a href="#" className="hover:underline">
                      {legalItem}
                    </a>
                  </li>
                ))}
              </ul>
            {/* Social Links */}
            <div className=" gap-4 flex justify-center mt-4 sm:mt-0">
             <Link href="https://www.instagram.com/aneeverse/" target="_blank"
             className="border border-gray-200 rounded-full p-2">
             <FaInstagram className="text-2xl cursor-pointer hover:text-[#c9c9c9]"/>
              </Link>
              <Link href="https://www.linkedin.com/company/aneeverse" target="_blank"
              className="border border-gray-200 rounded-full p-2">
              <FaLinkedinIn className="text-2xl cursor-pointer hover:text-[#c9c9c9]"/>
              </Link>
              <Link href="#" target="_blank" 
              className="border border-gray-200 rounded-full p-2">
              <FaYoutube className="text-2xl cursor-pointer hover:text-[#c9c9c9]"/>
              </Link>

            </div>
            </div>
  
          </div>
        </div>
      </footer>
    );
  };
  
  