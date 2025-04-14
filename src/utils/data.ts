import { ContactInfo, PersonalInfo, Project } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Tashawn Williams',
  title: 'Senior Software Engineer',
  summary: 'Senior Software Engineer with 4 years of hands-on full-stack development experience and 4 years in engineering education. Proven track record of shipping high-quality products, improving team processes, and driving cross-functional collaboration in agile environments. Adept in Javascript, React, TypeScript, Ruby on Rails, and modern front-end ecosystems.',
  skills: [
    'JavaScript', 'TypeScript', 'Ruby on Rails', 'React', 'Redux', 'Next.js',
    'Tailwind CSS', 'Material UI', 'PostgreSQL', 'GraphQL', 'REST',
    'Git', 'Figma', 'Agile', 'Vercel', 'Cursor AI', 'OpenHands AI', 'Claude Sonnet 3.7'
  ],
  experience: [
    {
      company: 'TrueCar',
      position: 'Full-stack Software Engineer 3 (Remote)',
      duration: 'Oct 2022 - Present',
      description: [
        'Designated code-owner for end-to-end payment systems supporting both consumer and internal tools.',
        'Built scalable frontends using React, Redux, TypeScript, Next.js, and Tailwind CSS.',
        'Enhanced invoice processing features via Rails and GraphQL API refactors, reducing overdue payments.',
        'Led redesign of a prospect-facing landing page from Figma, resulting in new corporate partnerships.',
        'Partnered with cross-functional teams to identify and resolve UX, billing, and invoicing pain points.',
        'Led stakeholder discussions to align on roadmaps, priorities, and delivery goals.'
      ]
    },
    {
      company: 'LexSpot Inc. / Bridge Legal',
      position: 'Junior Full-stack Developer (Remote)',
      duration: 'Jun 2022 - Oct 2022',
      description: [
        'Refactored and modernized legacy codebases to improve usability, speed, and consistency.',
        'Delivered updates aligned with evolving client requirements and platform goals.'
      ]
    },
    {
      company: 'Flatiron School',
      position: 'Senior Manager / Lead Instructor, Software Engineering (Remote)',
      duration: 'Mar 2018 - Sep 2022',
      description: [
        'Instructed 150+ lectures on full-stack development (JavaScript, React, Rails, and more).',
        'Built scalable curriculum and student tracking apps used across 200+ software engineering cohorts.',
        'Led initiatives to improve departmental efficiency through process design and stakeholder collaboration.'
      ]
    }
  ],
  education: [
    {
      institution: 'Flatiron School',
      degree: 'Full Stack Software Engineering Program',
      duration: '2017 - 2018'
    },
    {
      institution: 'Stony Brook University',
      degree: 'B.S. in Psychology',
      duration: 'Dec 2011'
    }
  ]
};

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Chef Portfolio Website',
    description: 'Developed a polished portfolio and booking site for a professional chef. Highlights strong design and responsiveness, tailored to attract clients and display culinary work effectively.',
    githubLink: 'https://github.com/tashawnwilliams/chef-portfolio',
    demoVideoLink: 'https://example.com/chef-portfolio-demo',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/images/chef-portfolio.jpg'
  },
  {
    id: 'project-2',
    title: 'NYC Mayoral Primary Voter Guide',
    description: 'Created a civic engagement platform to help NYC voters learn about candidates, compare their policies, and make informed decisions. Leveraged AI tools during application development and for data interpretation to enhance accuracy and insight.',
    githubLink: 'https://github.com/tashawnwilliams/nyc-voter-guide',
    demoVideoLink: 'https://example.com/voter-guide-demo',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Cursor AI', 'OpenHands AI', 'Claude 3.7 Sonnet'],
    imageUrl: '/images/voter-guide.jpg'
  }
];

export const contactInfo: ContactInfo = {
  email: 'tashawncwilliams@gmail.com',
  linkedin: 'https://linkedin.com/in/tashawnwilliams',
  github: 'https://github.com/tashawnwilliams',
  location: 'Los Angeles, CA'
};