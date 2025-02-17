import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/HeroSlider.css';
import slide1 from '../../src/assets/slider1.png';
import slide2 from '../../src/assets/slider2.png';
import slide3 from '../../src/assets/slider3.png';

const HeroSlider = () => {
  const sliderImages = [
    slide1,
    slide2,
    slide3,
    // Add more images as needed
  ];

  return (
    <section className="hero-slider">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;