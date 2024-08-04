import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import './Process.css';

const Process = () => {
  return (
    <section id='process' className='process'>
      <Box className='-main'>
        <Heading as='h1' size='xl' mb={0} mt={10} color='gold'>Our Process</Heading>
        <Heading size='md' className='heading-description'>
          See how we work for you, showcasing our commitment to innovation, functionality, and aesthetic brilliance in every project. Each step is designed to exceed expectations and bring your vision to life.
        </Heading>
        <Box className='process-cards'>
          <Box className='card'>
            <Heading as='h2' size='2xl' color='gold'>01</Heading>
            <Heading as='h3' size='lg' color='white'>Strategy and Planning</Heading>
            <Text color='white'>
              In the initial phase, we meticulously strategize and plan, laying the foundation for a design journey tailored to your vision and needs.
            </Text>
          </Box>
          <Box className='card'>
            <Heading as='h2' size='2xl' color='gold'>02</Heading>
            <Heading as='h3' size='lg' color='white'>Concept Design</Heading>
            <Text color='white'>
              Unleashing creativity, we craft concept designs that breathe life into your ideas, providing a visual roadmap for your unique space.
            </Text>
          </Box>
          <Box className='card'>
            <Heading as='h2' size='2xl' color='gold'>03</Heading>
            <Heading as='h3' size='lg' color='white'>Design Development</Heading>
            <Text color='white'>
              With precision and detail, we evolve concepts into reality during the design development stage, ensuring a seamless transition from vision to execution.
            </Text>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Process;
