import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '../components/sections/Contact';
import { contactInfo } from '../utils/data';

describe('Contact Component', () => {
  it('renders contact section with correct content', () => {
    render(<Contact />);
    
    // Check if the section title is displayed
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    
    // Check if contact information is displayed
    expect(screen.getAllByText('Email')[0]).toBeInTheDocument();
    expect(screen.getByText(contactInfo.email)).toBeInTheDocument();
    
    if (contactInfo.linkedin) {
      expect(screen.getByText('LinkedIn')).toBeInTheDocument();
      expect(screen.getByText('Connect on LinkedIn')).toBeInTheDocument();
    }
    
    if (contactInfo.github) {
      expect(screen.getByText('GitHub')).toBeInTheDocument();
      expect(screen.getByText('View GitHub Profile')).toBeInTheDocument();
    }
    
    // Check if the form is displayed
    expect(screen.getByText('Send Me a Message')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByText('Send Message')).toBeInTheDocument();
  });
  
  it('has form elements', () => {
    render(<Contact />);
    
    // Get form elements
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');
    const submitButton = screen.getByText('Send Message');
    
    // Check if form elements exist
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});