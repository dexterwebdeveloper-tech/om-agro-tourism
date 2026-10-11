import React from 'react';
import Carousel from './Carousel';
import DestinationSection from '../pages/DestinationSection';
import PackageSection from '../pages/PackageSection ';
import CallbackSection from '../pages/CallbackSection ';
import ActivitySection from '../pages/ActivitySection';
import SpecialSection from '../pages/SpecialSection';
import BestSection from '../pages/BestSection';
import SubscribeSection from '../pages/SubscribeSection';
import BlogSection from '../pages/BlogSection';
import TestimonialSection from '../pages/TestimonialSection';
import VideoSlider from './VideoSlider';



const HeroSection = () => {
  
  return (

    <div className="th-hero-wrapper hero-1" id="hero">
              {/* <Carousel/> */}
              <VideoSlider/>
              <DestinationSection/>
              <PackageSection/>
              <CallbackSection></CallbackSection>
              <ActivitySection/>
              {/* <SpecialSection/> */}
              <BestSection/>
              <SubscribeSection/>
              <BlogSection/>
              <TestimonialSection/>
    </div>
  );
};

export default HeroSection;
