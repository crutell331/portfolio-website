"use client";

import { personalInfo } from '../../utils/data';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-amber-600">{personalInfo.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
            {personalInfo.title}
          </h2>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            {personalInfo.summary}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/#projects" 
              className="px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors shadow-md"
            >
              View My Work
            </Link>
            <Link 
              href="/#contact" 
              className="px-6 py-3 bg-white text-amber-600 border border-amber-600 rounded-md hover:bg-amber-50 transition-colors shadow-sm"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;