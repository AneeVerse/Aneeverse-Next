'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/common/Layout';
import { Heading } from '@/components/common/typography/Heading';
import { projects } from '@/data/projects';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import AIDesignSection from '@/components/pricing/AIDesignSection';
import { client } from '@/sanity/lib/client';
import { getPortfolioWorkBySlugQuery, getPortfolioWorksQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import ProjectSummary from '@/components/portfolio/ProjectSummary';
import PortfolioMetrics from '@/components/portfolio/PortfolioMetrics';
import ProjectGallery from '@/components/portfolio/ProjectGallery';
import { projectId, dataset } from '@/sanity/env';

// PortableText components
const portableTextComponents = {
  block: {
    h2: ({children}) => (
      <h2 className="text-2xl font-semibold text-secondary-500 mb-4 mt-8">
        {children}
      </h2>
    ),
    normal: ({children}) => (
      <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({children}) => (
      <ul className="list-disc pl-6 my-4">{children}</ul>
    ),
    number: ({children}) => (
      <ol className="list-decimal pl-6 my-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({children}) => <li className="my-1">{children}</li>,
    number: ({children}) => <li className="my-1">{children}</li>,
  },
  marks: {
    link: ({value, children}) => {
      const href = value?.href || '#';
      return (
        <a
          href={href}
          className="text-secondary-500 underline hover:text-secondary-700"
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({value}) => {
      // Better GIF detection - check the asset reference for gif extension
      const assetRef = value.asset?._ref || '';
      const isGif = assetRef.includes('gif') || assetRef.includes('.gif');
      
      let imgUrl;
      if (isGif) {
        // For GIFs, try to get the raw URL first
        if (value.asset?.url) {
          imgUrl = value.asset.url;
        } else {
          // Construct the direct Sanity CDN URL for GIF
          const [, id, dimensions, format] = assetRef.split('-');
          imgUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`;
        }
      } else {
        // For regular images, use the optimized URL
        imgUrl = urlForImage(value).url();
      }
      
      return (
        <figure className="my-8">
          <img
            src={imgUrl}
            alt={value.alt || 'Project image'}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          {value.caption && (
            <figcaption className="text-gray-500 text-sm mt-2 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    customImage: ({value}) => {
      // Handle external image first (takes precedence)
      if (value.externalImage) {
        return (
          <figure className="my-8">
            <img
              src={value.externalImage}
              alt={value.alt || 'Project image'}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {value.caption && (
              <figcaption className="text-gray-500 text-sm mt-2 text-center">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      }
      
      // Fallback to Sanity image with better GIF support
      if (value.sanityImage?.asset) {
        const assetRef = value.sanityImage.asset._ref || '';
        const isGif = assetRef.includes('gif') || assetRef.includes('.gif');
        
        let imgUrl;
        if (isGif) {
          // For GIFs, try to get the raw URL first
          if (value.sanityImage.asset.url) {
            imgUrl = value.sanityImage.asset.url;
          } else {
            // Construct the direct Sanity CDN URL for GIF
            const [, id, dimensions, format] = assetRef.split('-');
            imgUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`;
          }
        } else {
          // For regular images, use the optimized URL
          imgUrl = urlForImage(value.sanityImage).url();
        }
        
        return (
          <figure className="my-8">
            <img
              src={imgUrl}
              alt={value.alt || 'Project image'}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {value.caption && (
              <figcaption className="text-gray-500 text-sm mt-2 text-center">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      }
      
      // If no image is provided, return empty
      return null;
    },
  },
};

export default function ProjectPage({ params }) {
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [previousProject, setPreviousProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);

  // Load project data from Sanity
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        
        // Fetch the current project
        const projectData = await client.fetch(getPortfolioWorkBySlugQuery, {
          slug: params.id,
        });
        
        if (projectData) {
          setProject(projectData);
          document.title = `${projectData.title} | Our Works | Aneeverse`;
          
          // Fetch all projects to determine related, previous, and next projects
          const allProjects = await client.fetch(getPortfolioWorksQuery);
          
          if (allProjects && allProjects.length > 0) {
            // Find the current project index
            const currentIndex = allProjects.findIndex(p => p.slug.current === params.id);
            
            // Set previous and next project
            if (currentIndex > 0) {
              setPreviousProject(allProjects[currentIndex - 1]);
            }
            
            if (currentIndex < allProjects.length - 1) {
              setNextProject(allProjects[currentIndex + 1]);
            }
            
            // Get related projects (excluding the current one)
            const related = allProjects
              .filter(p => p.slug.current !== params.id)
              .slice(0, 3);
            
            setRelatedProjects(related);
          }
        }
      } catch (error) {
        console.error('Error fetching project data:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    if (params.id) {
      fetchData();
    }
  }, [params.id]);

  // Fallback to static data if Sanity data is not available
  const staticProject = projects.find(p => p.slug === params.id);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
      </div>
    );
  }

  // If no data from Sanity or static data, show not found
  if (!project && !staticProject) {
    return <div>Project not found</div>;
  }

  // Use Sanity project data if available, otherwise fall back to static data
  const displayProject = project || staticProject;
  const displayRelated = relatedProjects.length > 0 
    ? relatedProjects 
    : projects.filter(p => p.slug !== params.id).slice(0, 3);

  return (
    <div>
      <Layout className="space-y-8 py-16 text-secondary-500">
        {/* Breadcrumb */}
        <div className='flex font-semibold justify-between'>
          <div className='text-secondary-500 tracking-widest uppercase'>
            Our Work / {displayProject.title}
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative -mx-2 sm:-mx-8 lg:-mx-8">
          {project?.mainImage ? (
            <div className="w-full h-[25vh] sm:h-[35vh] lg:h-[45vh] relative rounded-lg overflow-hidden">
              <Image
                src={urlForImage(project.mainImage).url()}
                alt={project.title}
                fill
                className="object-cover object-center"
              />
            </div>
          ) : (
            <img
              src={staticProject?.thumbnail}
              alt={staticProject?.title}
              className="w-full h-[25vh] sm:h-[35vh] lg:h-[45vh] rounded-lg object-cover object-center"
            />
          )}
        </div>

        {/* Project Summary Section */}
        {project ? (
          <ProjectSummary project={project} />
        ) : (
          <section className="py-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h2 className="text-md uppercase tracking-wider font-bold">Project Summary</h2>
                <div className="space-y-6">
                  <div>
                    <Heading level="h3" color="dark" spacing="lg" className="font-medium">
                      {staticProject.about.title}
                    </Heading>
                  </div>
                  <div>
                    <p className="text-lg leading-relaxed">{staticProject.about.description}</p>
                  </div>
                  <div className='flex gap-16 items-center'>
                    <div>
                      <h4 className="text-sm tracking-wider font-semibold uppercase mb-2">Year</h4>
                      <div className='text-3xl font-medium'>{staticProject.about.year}</div>
                    </div>
                    <div>
                      <h4 className="text-sm tracking-wider font-semibold uppercase mb-2">Industry</h4>
                      <div className='text-3xl font-medium'>{staticProject.about.industry}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study Image Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 h-96 rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={staticProject.about.image}
                    alt="Case Study"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Results Metrics Section */}
        {project?.results && project.results.length > 0 && (
          <PortfolioMetrics results={project.results} />
        )}
        
        {/* Project Gallery */}
        {project?.galleryImages && project.galleryImages.length > 0 && (
          <ProjectGallery images={project.galleryImages} />
        )}

        {/* Main Content Sections - Static Project */}
        {!project && staticProject?.sections && (
          <div className="space-y-24">
            {staticProject.sections.map((section, index) => (
              <section key={index} className="space-y-12">
                {section.type === 'text' && (
                  <p className="text-2xl leading-relaxed text-gray-700 max-w-5xl mx-auto text-center">
                    {section.content}
                  </p>
                )}

                {section.type === 'image-grid' && (
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {section.images.map((img, i) => (
                      <div key={i} className="relative p-5 overflow-hidden">
                        <img src={img} alt="" className="w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>
                )}

                {section.type === 'gallery-with-text' && (
                  <div>
                    <p className="text-2xl leading-relaxed text-gray-700 max-w-5xl mx-auto text-center">
                      {section.description}
                    </p>
                    <div className="grid grid-cols-1 mt-12 gap-6">
                      {section.images.map((img, index) => (
                        <div key={index} className="relative rounded-xl overflow-hidden shadow-lg">
                          <img
                            src={img}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>
        )}

        {/* Sanity Rich Content */}
        {project?.body && (
          <div className="py-12">
            <div className="prose max-w-none">
              <PortableText value={project.body} components={portableTextComponents} />
            </div>
          </div>
        )}
        
       

        <div>
          <AIDesignSection />
        </div>
        
        {/* Next and Previous Buttons */}
        {/* <div className="border-t-[1px] border-gray-300 pt-12">
          <div className="flex justify-between">
            <FaChevronLeft className='mr-1 text-3xl'/> Previous Project
              </Link>
            ) : (
              <span className="flex items-center text-gray-400 font-semibold text-lg cursor-not-allowed">
                <FaChevronLeft className='mr-1 text-3xl'/> Previous Project
              </span>
            )}

            {nextProject ? (
              <Link
                href={`/works/${nextProject.slug.current}`}
                className="flex items-center text-secondary-500 font-semibold text-lg transition-colors"
              >
                Next Project <FaChevronRight className='ml-1 text-3xl'/>
              </Link>
            ) : (
              <span className="flex items-center text-gray-400 font-semibold text-lg cursor-not-allowed">
                Next Project <FaChevronRight className='ml-1 text-3xl'/>
              </span>
            )}
          </div>
        </div> */}
      </Layout>
    </div>
  );
}