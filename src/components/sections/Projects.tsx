"use client";

import { projects } from '../../utils/data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import useErrorHandler from '../../hooks/useErrorHandler';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const { error, handleError } = useErrorHandler();

  const toggleProjectDetails = (projectId: string) => {
    try {
      setExpandedProject(expandedProject === projectId ? null : projectId);
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <section id="projects" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h2>
        
        {error.hasError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
            <p className="font-bold">Error</p>
            <p>{error.message}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200 relative">
                {project.imageUrl ? (
                  <Image 
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-amber-100">
                    <span className="text-amber-800 font-medium">No image available</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <p className="text-gray-700 mb-4">
                  {expandedProject === project.id 
                    ? project.description 
                    : `${project.description.substring(0, 100)}${project.description.length > 100 ? '...' : ''}`}
                </p>
                
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => toggleProjectDetails(project.id)}
                    className="text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    {expandedProject === project.id ? 'Show less' : 'Read more'}
                  </button>
                  
                  <div className="flex space-x-3">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-amber-600 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                    
                    {project.demoVideoLink && (
                      <a 
                        href={project.demoVideoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-amber-600 transition-colors"
                        aria-label="Demo Video"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;