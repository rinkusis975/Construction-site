import React from 'react';
import { Box, Card, CardBody, Image, Heading, Text, Button, Flex } from '@chakra-ui/react';
import './CardsContainer.css';

const CardsContainer = () => {
  return (
    <section id='services' className='main'>
      <Heading as='h1' size='xl' mt={14} mb={10} color='gold'>Services</Heading>
      <Flex className='container'>
        <Card className='card-body'>
          <CardBody className='cc' p={0}>
            <Image className='image-body'
              src='/images/img1.jpg'
              alt='Interior Design'
            />
            <Box p={6}>
              <Heading color='black' size='md' mt={4}>Interior</Heading>
              <Text className='tex' mt={2}>
                Our interior designing firm boasts a team of seasoned professionals dedicated to transforming your spaces into personalised masterpieces.
              </Text>
              <Flex align='center' mt={4}>
                <Box className='icon-container'>
                  <span className='icon'>🛋️</span>
                </Box>
                <Button variant='link' colorScheme='yellow' ml={3}>Read More &gt;</Button>
              </Flex>
            </Box>
          </CardBody>
        </Card>
        <Card className='card-body'>
          <CardBody className='cc' p={0}>
            <Image className='image-body'
              src='/images/img2.jpg'
              alt='Architecture'
            />
            <Box p={6}>
              <Heading color='black' size='md' mt={4}>Architect</Heading>
              <Text className='tex' mt={2}>
                Design King crafts visionary structures, redefining spaces with innovative designs. Architecture is the cornerstone of Design King’s ethos.
              </Text>
              <Flex align='center' mt={4}>
                <Box className='icon-container'>
                  <span className='icon'>🏛️</span>
                </Box>
                <Button variant='link' colorScheme='yellow' ml={2}>Read More &gt;</Button>
              </Flex>
            </Box>
          </CardBody>
        </Card>
        <Card className='card-body'>
          <CardBody className='cc' p={0}>
            <Image className='image-body'
              src='/images/img3.jpg'
              alt='Construction'
            />
            <Box p={6}>
              <Heading color='black' size='md' mt={4}>Construction</Heading>
              <Text className='tex' mt={2}>
                Design King transforms blueprints into reality. Our construction expertise marries precision and innovation, building spaces that stand as architectural masterpieces.
              </Text>
              <Flex align='center' mt={4}>
                <Box className='icon-container'>
                  <span className='icon'>🏗️</span>
                </Box>
                <Button variant='link' colorScheme='yellow' ml={2}>Read More &gt;</Button>
              </Flex>
            </Box>
          </CardBody>
        </Card>
      </Flex>
    </section>
  );
};

export default CardsContainer;
