import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';

// Mock the child components since we're only testing Home component
vi.mock('../components/HeroSlider', () => ({
  default: () => <div data-testid="mock-hero-slider">Hero Slider</div>
}));

vi.mock('../components/WhyJoinUs', () => ({
  default: () => <div data-testid="mock-why-join-us">Why Join Us</div>
}));

vi.mock('../components/CounterSection', () => ({
  default: () => <div data-testid="mock-counter-section">Counter Section</div>
}));

describe('Home Component', () => {
  
    test('renders sections in correct order', () => {
        render(<Home />);
        const homeContainer = screen.getByTestId('home-container');
        
        // Get all main sections
        const sections = homeContainer.children;
        
        // Check order of sections
        expect(sections[0]).toHaveTextContent('Hero Slider');
        expect(sections[1]).toHaveClass('heading-banner');
        expect(sections[2]).toHaveClass('division-banner');
        expect(sections[3]).toHaveTextContent('Why Join Us');
        expect(sections[4]).toHaveTextContent('Counter Section');
    });
});