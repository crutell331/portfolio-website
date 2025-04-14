import { render, screen } from '@testing-library/react';
import Hero from '../components/sections/Hero';
import { personalInfo } from '../utils/data';

// Mock the next/link component
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe('Hero Component', () => {
  it('renders the hero section with correct content', () => {
    render(<Hero />);
    
    // Check if the name is displayed
    expect(screen.getByText("Hi, I'm")).toBeInTheDocument();
    expect(screen.getByText(personalInfo.name)).toBeInTheDocument();
    
    // Check if the title is displayed
    expect(screen.getByText(personalInfo.title)).toBeInTheDocument();
    
    // Check if the summary is displayed
    expect(screen.getByText(personalInfo.summary)).toBeInTheDocument();
    
    // Check if the CTA buttons are displayed
    expect(screen.getByText('View My Work')).toBeInTheDocument();
    expect(screen.getByText('Contact Me')).toBeInTheDocument();
  });
  
  it('has correct links for CTA buttons', () => {
    render(<Hero />);
    
    const viewWorkLink = screen.getByText('View My Work').closest('a');
    const contactMeLink = screen.getByText('Contact Me').closest('a');
    
    expect(viewWorkLink).toHaveAttribute('href', '/#projects');
    expect(contactMeLink).toHaveAttribute('href', '/#contact');
  });
});