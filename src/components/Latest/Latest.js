import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import './Latest.css';

const Latest = () => {
  return (
    <section id='Latest' className='Latest'>
      <Box className='--main'>
      <Heading  size='md' marginTop='5%' color='white'>Latest Blog</Heading>
        <Heading as='h1' size='xl'  color='gold'>Our Recent Blogs</Heading>
        <Heading size='md' className='heading-description'>
            In our latest blog post, we delve into the fascinating world of interior design, exploring the art of fusion and how blending different styles can lead to the creation of truly timeless spaces.        </Heading>
        <Box className='Latest-card2'>
          <Box className='card2'>
          <img className = ' e' src='./images/bg1.png' alt='Image1' />
          <Box  className='bg' p={6}>
              <h6 className='tex2'>
                 Residentail Farm House Designed By Design King
              </h6>
            </Box>
          </Box>
          <Box className='card2'>
          <img src='./images/bg2.png' alt='Image1' />
          <Box  className='bg' p={6}>
              <h6 className='tex2'>
              Modern Hotel Bedroom Interior Design ideas              </h6>
            </Box>
          </Box>
          <Box className='card2'>
          <img src='./images/bg3.png' alt='Image1' />
          <Box  className='bg' p={6}>
              <h6 className='tex2'>
              Modern Architecture House Design Ideas              </h6>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Latest;
