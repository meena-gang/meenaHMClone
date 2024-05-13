import React, { useState } from 'react'
import {Box, HStack,Text,Image, Center, Heading} from '@chakra-ui/react';
import reactLogo from '../assets/logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHeart,faShoppingBag} from '@fortawesome/fontawesome-free-solid'
import {Link, Navigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styles from './Navbar.module.css';

import {
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    VStack,
  } from '@chakra-ui/react'


const Header = () => {
    const cart = useSelector(state => state.cartReducer);
    const login = useSelector(state => state.authReducer);
    
    let cartLength = (cart.reduce((acc,item) => acc + (+item.qty), +0)).toString().replace(/^0+/, '');

    // console.log(cartLength,'cartLength');

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const[formData, setFormData] = useState({email:'',
                                            password:''})
    const dispatch = useDispatch();

    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const signOutHandler = () => {
        localStorage.removeItem('token');
        dispatch({type:'signOut'})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const  postData = async() => {
        const res = await axios.post('https://reqres.in/api/login',formData);
        const token = res.data.token;
        localStorage.setItem('token',JSON.stringify(token));
        if(token){
            dispatch({type:'signIn'})
        }
        }
        postData();
       
    }
  return (
    <Box w='100vw' height='80px' display='flex' justifyContent={{base:'space-between',md:'space-between', lg: 'space-around'}} p='10px' >
        <Box display={{ base: 'none', lg : 'block' }}>
            <HStack spacing='30px'>
                <Text fontSize='sm'>Customer Service</Text>
                <Text fontSize='sm'>Newsletter</Text>
                <Text fontSize='sm'>Find a store</Text>
            </HStack>
        </Box>
        <Box>
           <Link to='/'><Image src = {reactLogo}  alt='H&M' width ={{base:'40%', md:'60%',lg: '100%'}} height = {{base:'20px', md:'30px',lg: '40px'}}  m={{base:'0px',md:'0px',lg:'auto'}} ml={{base:'55px',md:'55px',lg:'0px'}}/></Link>
        </Box>
        <Box>
            <HStack spacing='5'> 
                <FontAwesomeIcon icon={faUser}/>    
                <Text onClick={login ?signOutHandler :onOpen} fontSize='sm' cursor='pointer' display={{base:'none',md:'none',lg:'block'}}>{login ? 'Sign out' : 'Sign in'}</Text>
                <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading size='md'>Sign in</Heading>
            <Text fontSize='xs' color='grey' mt={3}>Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.</Text>
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody>
          <form onSubmit={submitHandler}>
             <VStack spacing={4}>
            <FormControl isRequired>
                <FormLabel >Email</FormLabel>
                   
                <Input type='email' borderRadius='none'  size='lg' required onChange={changeHandler}  name='email' placeholder='eve.holt@reqres.in'/>
             </FormControl>
            <FormControl isRequired>
                <FormLabel >Password</FormLabel>
                <InputGroup size='lg'  >
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    borderRadius='none'
                    required
                    onChange={changeHandler}
                    name='password'
                    placeholder='cityslicka'
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='md' onClick={handleClick}  borderRadius='none' mr={2}>
                    {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
                </InputGroup>
             </FormControl>
            
             <Button color='white' bg='black'  w='100%' size='md' borderRadius='0px'  variant='solid' type='submit' mt='20px' mb='30px'
             onClick={onClose}>
                 Sign in
            </Button>
            </VStack> 
             </form>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter> */}
        </ModalContent>
        </Modal>
                <FontAwesomeIcon icon={faHeart} />
                <Text fontSize='sm'  display={{base:'none',md:'none',lg:'block'}}> Favourites</Text>
                <FontAwesomeIcon icon={faShoppingBag} /> 
                <Link to='./cart'><Text fontSize='sm'  display={{base:'none',md:'none',lg:'block'}}>Shopping bag ({cartLength})</Text></Link>
            </HStack>
        </Box>
    </Box>
  )
}

export default Header