export default function NewFooter() {
    return (
      <footer className="bg-secondary-500 text-primary-500">
        {/* Top Section */}
        <div className="py-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            DESIGN, OPTIMIZE, ADVERTISE
          </h2>
          <p className="mt-2 text-xl text-orange-400 font-Rock_Salt">
            WE GOT YOU COVERED
          </p>
          <button className="mt-6 px-6 py-2 bg-primary-500 text-secondary-500 text-lg font-semibold rounded-full  transition">
            GET STARTED
          </button>
        </div>
  
        {/* Divider */}
        <hr className="border-gray-700" />
  
        {/* Links Section */}
        <div className="py-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase">Services</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase">
                  Website Services ↗
                </h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>Website Design</li>
                  <li>Landing Pages</li>
                  <li>SEO Optimization</li>
                  <li>GMB Optimization</li>
                  <li>Local SEO</li>
                  <li>Email Design</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase">
                  Creative Design Services ↗
                </h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>Social - m Creation</li>
                  <li>Presentation Design</li>
                  <li>Brochure Design</li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Navigation Section */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Main</li>
              <li>Our Work</li>
              <li>Our People</li>
              <li>About Us</li>
              <li>Pricing</li>
              <li>Careers</li>
              <li>Superside vs. Alternatives</li>
            </ul>
          </div>
  
          {/* Learn Section */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase">Learn</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Blog</li>
              <li>Events & Summits</li>
              <li>Guides & Reports</li>
              <li>Customer Stories</li>
              <li>Video Library</li>
              <li>Playbooks</li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="border-t border-gray-700 py-6 text-center">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2025 Aneeverse. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:underline">
                Privacy policy
              </a>
              <a href="#" className="text-sm hover:underline">
                Terms of use
              </a>
              <a href="#" className="text-sm hover:underline">
                Status page
              </a>
              <a href="#" className="text-sm hover:underline">
                DMCA
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  