import { Center, Heading,Text,FormControl,FormLabel,Input,Box, Button, VStack, RadioGroup, Radio} from '@chakra-ui/react'
import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/fontawesome-free-solid';
import {Link} from 'react-router-dom';

const Checkout = () => {

    const [selectedOption, setSelectedOption] = useState('cash');

    const handleChange = (event) => {
      setSelectedOption(event);
    };
  
    const checkoutHandler = (e) => {
        e.preventDefault();
        alert('Your order has been placed and will be deilvered in 3-5 working days. Thanks for shopping with us 😊');
    }
  return (
   <> 
        <Link to='/cart'>
            <Text fontSize='sm' ml='5%'><FontAwesomeIcon icon={faArrowLeft} /> Back to shopping bag</Text>
        </Link>
        <Center>
            <Heading mt='30px' mb='10px'>Checkout</Heading>
        </Center>
        <Center> 
        <Box width={{base:'350px',md:'450px',lg:'500px'}} p= '20px' bgColor='white'>
        <form onSubmit={checkoutHandler}>
           <VStack spacing={4}>
            <FormControl isRequired>
                <FormLabel >Email</FormLabel>
                <Input type='email' borderRadius='none' required/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel >Name</FormLabel>
                <Input type='text' borderRadius='none' required/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Delivery Address</FormLabel>
                <Input type='text' borderRadius='none' required/>
            </FormControl>
            <FormControl isRequired>
          <FormLabel>Payment Method</FormLabel>
            <RadioGroup value={selectedOption} onChange={handleChange} spacing={2}>
                <Radio value="cash">Cash</Radio>
                <Radio value="creditCard">Credit Card</Radio>
                <Radio value="debitCard">Debit Card</Radio>
                <Radio value="paypal">PayPal</Radio>
            </RadioGroup>
         </FormControl>
            <Button color='white' bg='black'  w='100%' size='md' borderRadius='0px'  variant='solid' type='submit'>
                Place Order
            </Button>
           </VStack> 
        </form>
        </Box>
        </Center>  
       
   </>
  )
}

export default Checkout