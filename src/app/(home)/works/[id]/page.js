import { projects } from '@/data/projects';

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.slug === params.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <img 
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Project Meta */}
      <div className="container mx-auto grid md:grid-cols-4 gap-8 px-4">
        {Object.entries(project.meta).map(([key, value]) => (
          <div key={key} className="text-center">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">{key}</p>
            <p className="text-2xl font-semibold">
              {Array.isArray(value) ? value.join(", ") : value}
            </p>
          </div>
        ))}
      </div>

      {/* Project Summary Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 px-4">
          <div className="space-y-8 max-w-2xl">
            <h2 className="text-4xl font-bold">Project Overview</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">The Challenge</h3>
                <p className="text-lg leading-relaxed">{project.about.challenge}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Solution</h3>
                <p className="text-lg leading-relaxed">{project.about.solution}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Dream Team</h3>
                <div className="flex flex-wrap gap-3">
                  {project.about.team.map((member, index) => (
                    <span 
                      key={index}
                      className="bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Case Study Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 h-96 rounded-xl overflow-hidden shadow-xl">
              <img
                src="/images/home/work/webflow/case-study-1.avif"
                alt="Case Study"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-48 rounded-xl overflow-hidden shadow-xl">
              <img
                src="/images/home/work/webflow/case-study-2.avif"
                alt="Detail 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-48 rounded-xl overflow-hidden shadow-xl">
              <img
                src="/images/home/work/webflow/case-study-3.avif"
                alt="Detail 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="container mx-auto space-y-24 px-4">
        {project.sections.map((section, index) => (
          <section key={index} className="space-y-12">
            {section.type === 'text' && (
              <p className="text-2xl leading-relaxed text-gray-700 max-w-3xl mx-auto text-center">
                {section.content}
              </p>
            )}
            
            {section.type === 'image-grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {section.images.map((img, i) => (
                  <div 
                    key={i} 
                    className="relative overflow-hidden"
                  >
                    <img 
                      src={img} 
                      alt="" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                ))}
              </div>
            )}

            {section.type === 'highlight' && (
              <div className="bg-white p-12 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold mb-8 text-center">
                  {section.title}
                </h3>
                <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {section.items.map((item, i) => (
                    <li 
                      key={i} 
                      className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <span className="text-primary-500 text-xl mt-1">✓</span>
                      <span className="text-lg font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Full Width Gallery */}
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-center">Project Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.gallery.map((img, index) => (
            <div 
              key={index} 
              className="relative h-80 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}