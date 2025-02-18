import React from 'react';
import { render, screen } from '@testing-library/react';
import WhyJoinUs from '../WhyJoinUs';

describe('WhyJoinUs Component', () => {
    // Test 1: Check if main section exists
    test('renders WhyJoinUs section', () => {
        render(<WhyJoinUs />);
        const section = screen.getByRole('region');
        expect(section).toBeInTheDocument();
        expect(section).toHaveClass('why-join-section');
    });

    // Test 2: Check if main title is rendered
    test('renders main title correctly', () => {
        render(<WhyJoinUs />);
        const title = screen.getByRole('heading', { level: 2 });
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Why should you join L-1');
        expect(title).toHaveClass('section-title');
    });

    // Test 3: Check if all feature cards are rendered
    test('renders all feature cards', () => {
        render(<WhyJoinUs />);
        const featureCards = screen.getAllByTestId('feature-card');
        expect(featureCards).toHaveLength(4); // Since you have 4 features
    });

    // Test 4: Check specific feature titles
    test('renders correct feature titles', () => {
        render(<WhyJoinUs />);
        const expectedTitles = [
            'Teaching Methodology',
            'Study Material',
            'Student Friendly Environment',
            'Best Result'
        ];

        expectedTitles.forEach(title => {
            const headingElement = screen.getByRole('heading', { name: title });
            expect(headingElement).toBeInTheDocument();
            expect(headingElement).toHaveClass('feature-title');
        });
    });

    // Test 5: Check if feature icons are rendered
    test('renders feature icons', () => {
        render(<WhyJoinUs />);
        const icons = screen.getAllByRole('img');
        expect(icons).toHaveLength(4);
        
        icons.forEach(icon => {
            expect(icon).toHaveAttribute('src');
            expect(icon).toHaveAttribute('alt');
        });
    });

    // Test 6: Check if feature points are rendered
    test('renders feature points for each card', () => {
        render(<WhyJoinUs />);
        
        // Check Teaching Methodology points
        expect(screen.getByText('Best Faculty Team from IIT & Medical Institute')).toBeInTheDocument();
        expect(screen.getByText('Doubt Clearance Sessions')).toBeInTheDocument();
        
        // Check Study Material points
        expect(screen.getByText('Updated Study Material')).toBeInTheDocument();
        expect(screen.getByText('Phenomenal Study Notes')).toBeInTheDocument();
        
        // Check Environment points
        expect(screen.getByText('AC Classrooms & Labs(Phys, Chem)')).toBeInTheDocument();
        expect(screen.getByText('Well Equipped Library')).toBeInTheDocument();
        
        // Check Result points
        expect(screen.getByText('IIT-JEE 2019 Varanasi Topper')).toBeInTheDocument();
        expect(screen.getByText('NEET 2021 Varanasi Topper')).toBeInTheDocument();
    });

    // Test 7: Check if checkmarks are present in points
    test('renders checkmarks in feature points', () => {
        render(<WhyJoinUs />);
        const checkmarks = screen.getAllByText('✓');
        // Total number of checkmarks should equal total number of points across all features
        expect(checkmarks.length).toBeGreaterThan(0);
    });
});