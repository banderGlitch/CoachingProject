import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSlider from '../HeroSlider';

// This tells Vitest to create a fake version of Swiper components
vi.mock('swiper/react', () => ({
  Swiper: ({ children }) => <div data-testid="swiper-container">{children}</div>,
  SwiperSlide: ({ children }) => <div data-testid="swiper-slide">{children}</div>,
}));

// Tell Vitest to ignore CSS files
vi.mock('swiper/css', () => ({}));
vi.mock('swiper/css/navigation', () => ({}));
vi.mock('swiper/css/pagination', () => ({}));

describe('HeroSlider Component', () => {
    // Test 1: Check if the slider section exists
    test('renders hero slider section', () => {
        // Render the component
        render(<HeroSlider />);
        // Look for a section element
        const sliderSection = screen.getByRole('region');
        // Check if it exists and has the right class
        expect(sliderSection).toBeInTheDocument();
        expect(sliderSection).toHaveClass('hero-slider');
    });

    // Test 2: Check if we have the right number of slides
    test('renders correct number of slides', () => {
        render(<HeroSlider />);
        // Find all slide elements
        const slides = screen.getAllByTestId('swiper-slide');
        // Check if there are exactly 3 slides
        expect(slides).toHaveLength(3);
    });

    // Test 3: Check if each image is set up correctly
    test('each slide has proper image with correct attributes', () => {
        render(<HeroSlider />);
        // Find all images
        const images = screen.getAllByRole('img');
        
        // Check each image
        images.forEach((img, index) => {
            // Should have a src attribute
            expect(img).toHaveAttribute('src');
            // Should have the right alt text (Slide 1, Slide 2, etc.)
            expect(img).toHaveAttribute('alt', `Slide ${index + 1}`);
            // Should be inside a div with class 'slide-content'
            expect(img.closest('div')).toHaveClass('slide-content');
        });
    });

    // Test 4: Check if the Swiper container is set up right
    // Removed the mySwiper class test since it's internal to Swiper
    test('swiper container exists', () => {
        render(<HeroSlider />);
        const swiperContainer = screen.getByTestId('swiper-container');
        expect(swiperContainer).toBeInTheDocument();
    });
});







// 

// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import HeroSlider from '../HeroSlider';



// // test cases for HeroSlider component

// describe('HeroSlider Component', () => {
//     test('renders slider component', () => {
//         render(<HeroSlider />);
//         const sliderElement = screen.getByTestId('hero-slider');
//         expect(sliderElement).toBeInTheDocument();
//     });

//     test('displays slider images', () => {
//         render(<HeroSlider />);
//         const images = screen.getAllByRole('img');
//         expect(images.length).toBeGreaterThan(0);
//     });

//     test('images have proper attributes', () => {
//         render(<HeroSlider />);
//         const images = screen.getAllByRole('img');
//         images.forEach((img) => {
//             expect(img).toHaveAttribute('src');
//             expect(img).toHaveAttribute('alt');
//         });
//     });
// });

