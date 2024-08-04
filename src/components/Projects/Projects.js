import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id='projects' className='projects'>
    <Box className='-main'>
      <Heading as='h1' size='xl' mb={0} mt={10} color='gold'>Our Activities</Heading>
      <Heading size = 'md' className='heading-description'>
        Explore Design King’s latest portfolio, a testament to our commitment to innovation, functionality, and aesthetic brilliance. Each project tells a unique story, showcasing our diverse expertise in crafting spaces that exceed expectations.
      </Heading>
      <Box className='image-body'>
        <Box className='image-size'>
          <img src='./images/pt1.png' alt='Project image 1' />
        </Box>
        <Box className='image-size'>
          <img src='./images/pt2.png' alt='Project image 2' />
        </Box>
        <Box className='image-size'>
          <img src='./images/pt3.png' alt='Project image 3' />
        </Box>
        <Box className='image-size'>
          <img src='./images/pt4.png' alt='Project image 4' />
        </Box>
        <Box className='image-size'>
          <img src='./images/pt5.png' alt='Project image 5' />
        </Box>
        <Box className='image-size'>
          <img src='./images/pt6.png' alt='Project image 6' />
        </Box>
        <Box className='image-size'>
          <img src='./images/pt7.png' alt='Project image 7' />
        </Box>
        <Box className='image-size'>
          <img src='./images/pt8.png' alt='Project image 8' />
        </Box>
        <Box className='image-size'>
          <img src='./images/pt9.png' alt='Project image 9' />
        </Box>
      </Box>
    </Box>
    </section>
  );
};

export default Projects;
