import React from 'react';
import './About.css';
import { Box, Heading, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <section id='about'>
      <Box className='aboutpage'>
        <Box className='about-left'>
          <Heading as='h1' size='lg' mb={6} color='gold'>About us</Heading>
          <Heading as='h2' size='md' mb={6} color='white'>Designing Dreams, Defining Spaces</Heading>
          <Text mb={6}>
            Welcome to Design King, where creativity meets functionality to turn dreams into reality.
            We offer comprehensive architectural, interior design, and construction services tailored
            to your unique story. With a focus on quality and client satisfaction, our experienced team
            ensures excellence in every project, spanning various sectors including commercial, residential,
            and hospitality. Let us help you design your dream home with precision and expertise.
          </Text>
          <Heading as='h2' size='md' mb={6} color='white'>Anshul Gupta, CEO</Heading>
        </Box>
        <Box className='about-right'>
          <Box className='image-container'>
            <img src='./images/img1.jpg' alt='Image1' />
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default About;
