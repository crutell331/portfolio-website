"use client";

import { personalInfo } from '../../utils/data';

const Resume = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Resume
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-amber-600 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {personalInfo.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-amber-600 mb-4">Experience</h3>
            <div className="space-y-8">
              {personalInfo.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-amber-200 pl-4 py-1">
                  <h4 className="text-lg font-medium text-gray-800">{exp.position}</h4>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.duration}</p>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-amber-600 mb-4">Education</h3>
            <div className="space-y-4">
              {personalInfo.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-amber-200 pl-4 py-1">
                  <h4 className="text-lg font-medium text-gray-800">{edu.degree}</h4>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;