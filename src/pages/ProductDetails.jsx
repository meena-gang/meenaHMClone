import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {  Heading,Box,Image,Text,Select,Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag,faExclamationCircle} from '@fortawesome/fontawesome-free-solid'
import { GrStar } from "react-icons/gr";

const ProductDetails = () => {
    const[selectedOption,setSelectedOption] = useState('');
    const[error,setError] = useState('');
    let womens = useSelector(state => state.genericDataReducer.womens);
    let mens = useSelector(state => state.genericDataReducer.mens);
    let kids = useSelector(state => state.genericDataReducer.kids);
    let data = [...womens,...mens,...kids];
    let cart = useSelector(state => state.cartReducer);
    const {id} = useParams();
    const dispatch = useDispatch();

    let filteredProduct = JSON.parse(localStorage.getItem('productDetail'));
    const filteredProd = data.filter(product => product.id==id);

    if(filteredProd.length != 0){
        localStorage.setItem('productDetail', JSON.stringify(filteredProd));
        filteredProduct = filteredProd;
    }

    const sizeHandler = (e) => {
        setSelectedOption(e.target.value);
        if(e.target.value){
            setError('');
        }
    }

    const cartHandler = () => {
        
        if(selectedOption==""){
            setError('Please select a size');
            return;
        }
        const exsistingProductIndex = cart?.findIndex(product => product.id==filteredProduct[0].id);
        const exsistingProduct = cart[exsistingProductIndex];
        // console.log(exsistingProductIndex)
        if(exsistingProductIndex >= 0 && selectedOption==exsistingProduct.size){
            const newProduct = {...exsistingProduct,qty:+exsistingProduct.qty+1};
            cart[exsistingProductIndex] = newProduct;
            
            dispatch({type:'add',payload:cart})
        }
        else{
            const cartProduct = {
                image:filteredProduct[0].image,
                title:filteredProduct[0].title,
                price:filteredProduct[0].price,
                qty:1,
                size:selectedOption,
                id:filteredProduct[0].id
            }
            cart = [...cart,cartProduct]
            dispatch({type:'add',payload:cart})
        }
        // localStorage.removeItem('productDetail'); 
    }
    // console.log(cart,'cart');
  return (
    <Box  display='flex' p='10px' mt='3%' gap='4%' ml='3%' h={{base:'600px',md:'600px',lg:'600px'}}>
        <Box w='45%'>
            <Image src={filteredProduct[0]?.image} alt='image' w='100%' h='80%'/>
            <Text fontSize='sm' mt='5'>
                Relaxed-fit material in soft cotton jersey with a finely ribbed trim along the round neckline. Dropped shoulders and a straight-cut hem.
            </Text>
        </Box>
        <Box w='45%'>
            <Heading size='md' mt='5%' mb='3%'>{filteredProduct[0]?.title}</Heading>
            <Text fontSize='sm' color='gray'>MRP inclusive of all taxes</Text>
            <Heading size='md' mt='2%' mb='25%'>Rs. {filteredProduct[0]?.price}</Heading>
            {error && <Text size='sm' color='red'>{error}</Text>}
            <div className = 'review_box'>
              <Text>REVIEWS (5)</Text>
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
            </div><br />
            <Select placeholder='Select Size' w='80%' bg='white' borderRadius='0px'  onChange={sizeHandler} value={selectedOption}>
                <option value='S'>S</option>
                <option value='M'>M</option>
                <option value='L'>L</option>
                <option value='XL'>XL</option>
            </Select>
            <Button  color='white' bg='black'  w='80%' size='md' borderRadius='0px' mt='30px' variant='solid' 
                onClick={cartHandler}>
                <FontAwesomeIcon icon={faShoppingBag} /> Add to cart
            </Button>
            <Text fontSize='sm' mt={{base:'10px',md:'20px',lg:'30px'}}><FontAwesomeIcon icon={faExclamationCircle}/> Delivery Time : 2-7 days</Text>
            <Heading size='md' mt={{base:'5px',md:'10px',lg:'15px'}}>Delivery and Payment</Heading>
        </Box>
    </Box>
  )
}

export default ProductDetails