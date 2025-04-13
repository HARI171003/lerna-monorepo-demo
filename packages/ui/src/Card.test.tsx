import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

jest.mock('@monorepo/utils', () => ({
  formatDate: (date: Date) => '2023-01-15',
}));

describe('Card', () => {
  it('renders title and content', () => {
    render(<Card title="Test Title" content="Test content" />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders date when provided', () => {
    render(
      <Card 
        title="Test Title" 
        content="Test content" 
        date={new Date(2023, 0, 15)} 
      />
    );
    
    expect(screen.getByText(/Date:/)).toBeInTheDocument();
    expect(screen.getByText(/2023-01-15/)).toBeInTheDocument();
  });

  it('renders children when provided', () => {
    render(
      <Card title="Test Title" content="Test content">
        <button>Click me</button>
      </Card>
    );
    
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
