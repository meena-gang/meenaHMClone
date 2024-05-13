import React from 'react'
import { Box,VStack,Heading,Text } from '@chakra-ui/react'

const Sidebar = () => {
  return (
   
        <VStack w='100%' spacing={8} display={{ base: 'none', md : 'block' }}>
            <Box w='100%'>
                <Heading size='sm' mb={3}>New Arrivals</Heading>
                <Text fontSize='sm'>View All</Text>
                <Text fontSize='sm'>Clothes</Text>
            </Box>
            <Box w='100%'>
                <Heading size='sm'  mb={3}>Offers</Heading>
                <Text fontSize='sm'>Member Exclusive Prices</Text>
                <Text fontSize='sm'>Up to 40% off</Text>
            </Box>
            <Box w='100%'>
                <Heading size='sm'  mb={3}>Trending Now</Heading>
                <Text fontSize='sm'>Trending Now</Text>
            </Box>
            <Box w='100%'>
                <Heading size='sm'  mb={3}>Shop by Product</Heading>
                <Text fontSize='sm'>View All</Text>
                <Text fontSize='sm'>Jeans</Text>
                <Text fontSize='sm'>Shoes</Text>
                <Text fontSize='sm'>Basics</Text>
                <Text fontSize='sm'>Accessories</Text>
                <Text fontSize='sm'>Shorts</Text>
                <Text fontSize='sm'>Nightwear</Text>
                <Text fontSize='sm'>Sportswear</Text>
                <Text fontSize='sm'>Knitwear</Text>
                <Text fontSize='sm'>Jackets</Text>
                <Text fontSize='sm'>Socks</Text>
                <Text fontSize='sm'>Sale</Text>
            </Box>
            <Box w='100%'>
                <Heading size='sm'  mb={3}>Sustainability</Heading>
                <Text fontSize='sm'>H&M Take Care</Text>
                <Text fontSize='sm'>Learn More</Text>
            </Box>
        </VStack>
   
  )
}

export default Sidebar