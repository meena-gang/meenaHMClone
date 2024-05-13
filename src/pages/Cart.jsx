import React from 'react'
import {useState} from 'react';
import { useSelector,useDispatch} from "react-redux";
import {Heading,Box,HStack,VStack,Image,Center,Text,Select,Button,Divider} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/fontawesome-free-solid';
import {Link} from 'react-router-dom';
import cartimg from '../assets/cartimg.png';

const Cart = () => {
  const cart = useSelector(state => state.cartReducer);
  
  const login = useSelector(state => state.authReducer)
  localStorage.setItem("cart", JSON.stringify(cart) || []);

  const dispatch = useDispatch();
  
  const qtyHandler = (e,i) => {
    cart[i].qty = e.target.value;
    dispatch({type:'addFromCart',payload:cart})
  }

  const trashHandler = (i) => {
    const filteredCart = cart.filter((item,index) => index !== i);
    dispatch({type:'removeFromCart',payload:filteredCart})
  }
  const cartTotal = cart.reduce((acc,product) => acc+((+product.qty)*(+product.price)),0)

  // console.log(cartTotal,'cartTotal');

  return (
    <>
    <Center>
    <Heading size='lg' mt='3%'>Shopping bag</Heading>
    </Center>
    {login ?
    <Box display='flex' flexDirection={{base:'column',md:'row'}} gap='1%'>
      <Box w={{base:'90%',md:'55%'}} bgColor='white' m='5%'>
        
          { cart.length > 0 ? cart.map((product,i) => <HStack spacing='4' key={i}>
            <Box >
              <Image src={product.image} alt='image' height='185px'width='160px' p='4%'/>
            </Box>
            <Box pos='relative' width='580px'>
              <Heading size='md'>{product.title}</Heading>
              <Heading size='md' mt='2'>Rs. {product.price}</Heading>
              <Text fontSize='sm' mt='3'>Size:    {product.size}</Text>
              <Text fontSize='sm'>Total:    {+(product.qty)*+(product.price)}</Text>
              <Select width='70px' mt='2' value={product.qty} onChange={(e) => qtyHandler(e,i)}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </Select>
            <Button pos="absolute" top="1" right="1"><FontAwesomeIcon icon={faTrash} onClick={() => trashHandler(i)}/></Button>
            </Box>

          </HStack>)
          : <Heading size='lg' p='15px'>Your Shopping Bag is empty! <br /> <br />Shop with us 😊</Heading>
          } 
        
      </Box>
      <Box w={{base:'90%',md:'30%'}}  bgColor='white' mt={{base:'1%',md:'5%'}}  mb='5%' ml={{base:'5%',md:'0%'}} p='3%'>
        <HStack spacing='30px'>
          <Text color='grey'>Order value</Text>
          <Text color='grey'>Rs. {cartTotal}</Text>
        </HStack>
        <HStack spacing='55px' mt='2'>
          <Text color='grey'>Delivery</Text>
          <Text color='grey'>FREE</Text>
         </HStack>
         <Divider color='black' mt='2'/>
         <HStack spacing='55px' mt='2'>
          <Heading size='md' >Total</Heading>
          <Heading size='md'>Rs. {cartTotal}</Heading>
         </HStack>
         <Button color='white' bg = {cartTotal === 0 ? 'grey':'black'}  w='100%' size='md' borderRadius='0px' mt='40px' variant='solid' disabled={cartTotal === 0} >
         {cartTotal === 0 ? (
                'Your cart is empty'
              ) : (
              <Link to='/checkout' style={{ textDecoration: 'none', color: 'inherit' }}>
                Continue to checkout
              </Link>
            )}
          </Button>
          <Image src={cartimg} alt='image' mt='10px'/>
      </Box>
    </Box> 
     :  <Box textAlign="center">
          <Image
            src="https://mykit.in/public/img/images/emptycart.svg"
            margin="auto"
            marginTop="30px"
          />
          <Text
            color="orange.500"
            fontSize="xl"
            marginBottom="20px"
            fontWeight="600"
          >
            <Text as="span" color="#222222">
              Please,
            </Text>{' '}
            login to see your Cart
          </Text>
        </Box>
     }
    </>
  )
}

export default Cart