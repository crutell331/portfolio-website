import { render, screen, fireEvent } from '@testing-library/react';
import Projects from '../components/sections/Projects';
import { projects } from '../utils/data';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock the next/link component
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe('Projects Component', () => {
  it('renders all projects', () => {
    render(<Projects />);
    
    // Check if the section title is displayed
    expect(screen.getByText('My Projects')).toBeInTheDocument();
    
    // Check if all project titles are displayed
    projects.forEach(project => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });
  
  it('displays truncated descriptions initially', () => {
    render(<Projects />);
    
    // For each project, the description should be truncated if it's longer than 100 characters
    projects.forEach(project => {
      const expectedText = project.description.length > 100 
        ? `${project.description.substring(0, 100)}...` 
        : project.description;
      
      // This is a simplified check since the actual component might render differently
      const projectCard = screen.getByText(project.title).closest('div')?.parentElement;
      expect(projectCard).toHaveTextContent(expectedText);
    });
  });
  
  it('expands description when "Read more" is clicked', () => {
    render(<Projects />);
    
    // Find the first project with a long description
    const longDescProject = projects.find(p => p.description.length > 100);
    
    if (longDescProject) {
      // Find the "Read more" button for this project
      const projectCard = screen.getByText(longDescProject.title).closest('div')?.parentElement;
      const readMoreButton = projectCard?.querySelector('button');
      
      // Click the "Read more" button
      if (readMoreButton) {
        fireEvent.click(readMoreButton);
        
        // After clicking, the full description should be visible
        expect(projectCard).toHaveTextContent(longDescProject.description);
        
        // And the button text should change to "Show less"
        expect(readMoreButton).toHaveTextContent('Show less');
      }
    }
  });
  
  it('displays project technologies', () => {
    render(<Projects />);
    
    // Check if at least some technologies are displayed
    projects.forEach(project => {
      // At least the first technology should be visible
      if (project.technologies.length > 0) {
        expect(screen.getAllByText(project.technologies[0])[0]).toBeInTheDocument();
      }
    });
  });
});