import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import './Contact.css';
import { ChatIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { MdLocationOn } from 'react-icons/md';

const Contact = () => {
  return (
    <section id='contact' className='Contact'>
      <Box className='---main'>
        <Heading as='h1' size='xl' mb={20} mt={2} color='gold'>Our Contact Information</Heading>
        <Box className='contact-cards'>
          <Box className='card3'>
            <MdLocationOn className='icon' />  {/* Use the location icon */}
            <Heading as='h3' size='xl' color='white'>Location :-</Heading>
            <Text color='white'>
              A-2360, Greenfield Colony, Sector 41, Faridabad, Haryana – 121003
            </Text>
          </Box>
          <Box className='card3'>
            <EmailIcon className='icon' />     
            <Heading as='h3' size='lg' color='white'>Email :- </Heading>
            <Text color='white'>
              rinkusisodiya975@gmail.com
            </Text>
            <Text color='white'>
              deepaksisodiya5@gmail.com
            </Text>
          </Box>
          <Box className='card3'>
            <PhoneIcon className='icon' />  
            <Heading as='h3' size='lg' color='white'>Phone :- </Heading>
            <Text color='white'>
              +91-9818361495
            </Text>
            <Text color='white'>
              +91-7042978921
            </Text>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Contact;
