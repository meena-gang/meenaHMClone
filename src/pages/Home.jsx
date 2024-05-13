import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import React,{useEffect} from 'react'
import {Box,Center,Image, VStack, Text, Heading} from '@chakra-ui/react'
import styles from "./Home.module.css";
import img1 from '../assets/home1.png';
import img2 from '../assets/home2.png';
import img3 from '../assets/home3.png';
import tshirt from "../assets/categories/10221.png";
import trouser from "../assets/categories/10222.png";
import shoes from "../assets/categories/10226.png";
import shirt from "../assets/categories/10227.png";
import jeans from "../assets/categories/10229.png";
import jac from "../assets/categories/10230.png";
import hoodie from "../assets/categories/10231.png";
import newsr from "../assets/categories/10245.png";
import pres from "../assets/categories/10252.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector,useDispatch} from 'react-redux';

const womensData = [
  {
    "category": "Dresses",
    "title": "Draped cowl-neck dress",
    "price": "1999",
    "id": "82335",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc5%2F1a%2Fc51adb0e045c038df91ff3c8c47c2939e2f47a97.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Tops",
    "title": "Cotton T-shirt",
    "price": "599",
    "id": "12345",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F71%2Fd8%2F71d81919aef66b027b61d193ec07506c457949aa.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Tops",
    "title": "Cropped strappy top",
    "price": "399",
    "id": "23456",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F32%2F62%2F3262d9662f73fe6bd46c4a2d4d79f43a0afb7c92.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Dresses",
    "title": "Picot-trimmed jersey dress",
    "price": "1499",
    "id": "34567",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff7%2F41%2Ff741d50174d6ba33f25c18260162d9de332339f7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Dresses",
    "title": "Ribbed maxi dress",
    "price": "1299",
    "id": "45678",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F65%2F1e%2F651ed9b8517daddcb755c7c62aac96a239d5f6db.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Bottoms",
    "title": "Linen-blend pull-on trousers",
    "price": "1499",
    "id": "56789",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbf%2F95%2Fbf95a74a669d6eed88f7cf4c4024860c1e146104.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Bottoms",
    "title": "Wide High Jeans",
    "price": "2299",
    "id": "67890",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4c%2F47%2F4c478e496f85d754b6174f3d1b146dc16b02ad4a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Activewear",
    "title": "Jersey shorts",
    "price": "1399",
    "id": "78901",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F72%2Fcf%2F72cf4fd98c09cec67e24ee84d69268653c78c412.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Activewear",
    "title": "Knitted shorts",
    "price": "1499",
    "id": "89012",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff8%2F8c%2Ff88ccc0b0d66ebe8d4a4a4fcad33fd6877918926.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Outerwear",
    "title": "Crinkled loungewear shirt",
    "price": "1999",
    "id": "90123",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fda%2F64%2Fda642ea282d44bdaad6dd63a68e91f1bf1096d67.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Outerwear",
    "title": "Slit-cuff blazer",
    "price": "2299",
    "id": "01234",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb6%2Ff5%2Fb6f56f589dc2e706c3915ae3436619eb61479357.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Accessories",
    "title": "Oval sunglasses",
    "price": "799",
    "id": "12235",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7f%2F27%2F7f279aeaf21031ee434e8a838ceba02c0b2292bf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Accessories",
    "title": "Pendant earrings",
    "price": "999",
    "id": "26756",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0c%2F3b%2F0c3b644f04559107de988fdd89cb05ddcd6ecbfe.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Tops",
    "title": "Fine-knit cardigan",
    "price": "999",
    "id": "38767",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F57%2F2e%2F572ed65aadb2aab3c956eef398cea78c2fe10d3a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_cardigansjumpers_cardigans%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
  },
  {
    "category": "Tops",
    "title": "Cropped vest top",
    "price": "999",
    "id": "49078",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ffd%2Fe3%2Ffde3b480aeebca359a53cff0c4b6b05a4e745dab.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Tops",
    "title": "Cropped strappy top",
    "price": "499",
    "id": "56089",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff5%2F11%2Ff511ce46bf9766491d1e6d500bf8680da3323f4d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Dresses",
    "title": "Gathered dress with flared skirt",
    "price": "799",
    "id": "67990",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4a%2Fca%2F4aca4b5373793cb39eb0a6303e44cd674cca2d56.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Shirts",
    "title": "Tie-detail blouse",
    "price": "1299",
    "id": "78901",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc3%2Ffa%2Fc3fad80993a96e2742f923b5f076a7325f0389ec.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Shirts",
    "title": "Shirt",
    "price": "1499",
    "id": "89012",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1b%2F4e%2F1b4e2eee5e8e7a49362385df98e43413a13e1c9d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Dresses",
    "title": "Sheer asymmetric dress",
    "price": "1099",
    "id": "90123",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc6%2F33%2Fc6332037c9a975ee68d7fe98e443d86727b1dd32.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  }
];

const mensData = [
  {
    "category": "Shirts",
    "title": "Regular Fit Short-sleeved jersey shirt",
    "price": "1499",
    "id": "id1",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7b%2F5e%2F7b5e519d5d519c984f9ded17f6ebb834e4b3c3c5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Tops",
    "title": "Loose Fit Printed T-shirt",
    "price": "799",
    "id": "08345",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F92%2F8e%2F928e575d07a94ce58f76c135844aa732735c72f7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
  },
  {
    "category": "Tops",
    "title": "Regular Fit Printed T-shirt",
    "price": "699",
    "id": "67456",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fca%2F25%2Fca259db9dd7a72d8b4857676d8dc4692ccc99194.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
  },
  {
    "category": "Shirts",
    "title": "Regular Fit Crochet-look resort shirt",
    "price": "2999",
    "id": "34797",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F78%2Fe8%2F78e8475ea05ef58524e1c987d1011efa9ca500c6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Shirts",
    "title": "Loose Fit Short-sleeved shirt",
    "price": "1499",
    "id": "95678",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff1%2Ffe%2Ff1fec6548b9b5dfe03b1f2639cba463d25ab13dd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Bottoms",
    "title": "Relaxed Fit Sweatpants",
    "price": "1499",
    "id": "56689",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd4%2Fe6%2Fd4e632fc6e8fdec181c4f512cd1b98bf9623ba61.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Bottoms",
    "title": "Baggy Jeans",
    "price": "2699",
    "id": "67980",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa2%2Fbe%2Fa2be78b56562a3f91f2dbf9ce1093979601b03f3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Activewear",
    "title": "Relaxed Fit Pyjama bottoms",
    "price": "1499",
    "id": "78991",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7f%2Fed%2F7fed959c08c737cbd012c160f1ea8169e9d5ff32.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Activewear",
    "title": "Pyjama top and shorts",
    "price": "1799",
    "id": "89112",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdc%2F06%2Fdc06aec365cec8d3b5df4df168127f646069fc9c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Outerwear",
    "title": "Regular Fit Linen suit trousers",
    "price": "3999",
    "id": "90923",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc6%2Fd3%2Fc6d33a4f289f538a715b6e86e7b74ed62866185f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Outerwear",
    "title": "Slim Fit Cropped suit trousers",
    "price": "2699",
    "id": "01894",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb7%2F90%2Fb79021ac9cf563ad6f79de91e3a2e24ffe8bb270.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Accessories",
    "title": "Sunglasses",
    "price": "799",
    "id": "16745",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F36%2F6d%2F366d94a2399453f4a19e4995052a4b798e71f2f5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
  },
  {
    "category": "Accessories",
    "title": "2-pack necklaces",
    "price": "799",
    "id": "23896",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3c%2Fd5%2F3cd599eb076c4874196896ce005471774431806e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
  },
  {
    "category": "Tops",
    "title": "Muscle Fit Polo shirt",
    "price": "1999",
    "id": "38967",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fda%2Fbe%2Fdabe8164359a38fbbfc9abb765f61e046a6196ea.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Tops",
    "title": "Regular Fit Waffled polo shirt",
    "price": "1999",
    "id": "87678",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3c%2Ff8%2F3cf8a3d92031f16514421c50837d73a7094d3ef1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Tops",
    "title": "Loose Fit Printed T-shirt",
    "price": "1499",
    "id": "54569",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F24%2Fb9%2F24b9d5e59690f3b07d4c94adb486f3b2cce5745b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Shirts",
    "title": "Regular Fit Oxford shirt",
    "price": "1799",
    "id": "65690",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fed%2Fa8%2Feda809c2f90c34e2a2f791f737c032c759e8b8d7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Shirts",
    "title": "Regular Fit Oxford shirt",
    "price": "1499",
    "id": "79801",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbc%2F5f%2Fbc5f9cc382b55ceeefa6bc2081dfa54c777ce70b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Shirts",
    "title": "Regular Fit Denim shirt",
    "price": "1499",
    "id": "83412",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdf%2Fbc%2Fdfbcd495913e02df69fe5f92b1974943a7a7df0f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Shirts",
    "title": "Regular Fit Linen-blend shirt",
    "price": "1999",
    "id": "93453",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc1%2F85%2Fc185e088726346b29907f834e46dd5a694585566.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  }
]

const kidsData = [
  {
    "category": "Shirts",
    "title": "Printed vest top",
    "price": "299",
    "id": "id4",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc8%2F0a%2Fc80a0995353cf16f666da6d3c1efc6e60295cd81.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
  },
  {
    "category": "Tops",
    "title": "Printed vest top",
    "price": "699",
    "id": "945",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F99%2F9c%2F999c6d862993f3c5a50a3a5dbab9ad091063f97e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boys_clothing_tshirtsshirts_tanktops%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
  },
  {
    "category": "Tops",
    "title": "2-piece printed set",
    "price": "799",
    "id": "456",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fac%2Fe0%2Face039107230732a9021c6f88eab0aa6e629b1fc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
  },
  {
    "category": "Shirts",
    "title": "Short-sleeved cotton shirt",
    "price": "799",
    "id": "567",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc4%2Fc3%2Fc4c3f13e4c38322d2633387e61a347eebbe16820.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Shirts",
    "title": "Short-sleeved resort shirt",
    "price": "699",
    "id": "5678",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F40%2F3d%2F403d64bf04f340b209e0c29bfc36276761a2b29a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Bottoms",
    "title": "Loose Fit roll-up trousers",
    "price": "999",
    "id": "789",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd0%2Fcb%2Fd0cb8471733843795aead1e35fe797a117862a95.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Bottoms",
    "title": "Carpenter joggers",
    "price": "1499",
    "id": "678",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8e%2F00%2F8e0013e092a742d58f67edb012667904c3300bc8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Activewear",
    "title": "Jersey pyjamas",
    "price": "999",
    "id": "790",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F84%2Fc3%2F84c3d49098cc36d80b3a66d035f04da92cdd209c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boys_clothing_nightwear_pyjamas%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
  },
  {
    "category": "Activewear",
    "title": "Printed pyjamas",
    "price": "1399",
    "id": "8012",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fca%2F9d%2Fca9d0399df7e82b4af261dfba86673aca5ce83e6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_clothing_nightwear_pyjamas%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
  },
  {
    "category": "Outerwear",
    "title": "Single-breasted jacket",
    "price": "2299",
    "id": "9123",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3c%2Fd2%2F3cd2919628b49c35429624762cd818b8b08a3ad6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Outerwear",
    "title": "3-piece dressy set",
    "price": "2699",
    "id": "034",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F95%2Fb1%2F95b1c2cac2171e8301e73a30c4d442cadd30a03e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Accessories",
    "title": "Sunglasses",
    "price": "799",
    "id": "145",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe6%2F92%2Fe69222652da9c4308eacb50d6b455277fa16f677.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
  },
  {
    "category": "Accessories",
    "title": "2-pack necklaces",
    "price": "799",
    "id": "256",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb0%2F2c%2Fb02c7ebccda674653b1c5a9efcbaa730affa6d28.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
  },
  {
    "category": "Tops",
    "title": "Flutter-sleeved top",
    "price": "699",
    "id": "367",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F28%2F7f%2F287f8ad3d7484deaa6b69ef802467d874799766c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girls_clothing_topstshirts_tshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
  },
  {
    "category": "Tops",
    "title": "Jersey top with broderie anglaise",
    "price": "399",
    "id": "478",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F35%2Fdc%2F35dc7e50b9d7267c33ff1b98baf606ae95108901.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girls_clothing_topstshirts_tshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
  },
  {
    "category": "Tops",
    "title": "Printed T-shirt",
    "price": "499",
    "id": "589",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F31%2F84%2F318410ac27d7db529cb43c7b2b66ba693bb7638a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
  },
  {
    "category": "Shirts",
    "title": "Floral-patterned poplin shirt",
    "price": "799",
    "id": "690",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F88%2F54%2F8854d2c5e1ecb80b546a1421d1d6fb56b54ea255.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Shirts",
    "title": "Linen-blend grandad shirt",
    "price": "499",
    "id": "701",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6e%2F7b%2F6e7bb39f0df10acd3625f817a2e71fa9b4ced74a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Shirts",
    "title": "Cotton rugby shirt",
    "price": "1299",
    "id": "812",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F41%2F04%2F4104d8adc785db7b214f9b058f83b5db35c09378.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  },
  {
    "category": "Shirts",
    "title": "Button-top hoodie",
    "price": "1299",
    "id": "923",
    "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F53%2Fcc%2F53cc5dbf1fb7ba558c38b59ff8e535420fb42b5e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  }
]


const Home = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
      dispatch({type:'fetchData',payload:{womensData,mensData,kidsData}})
  },[]);
  
  const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <Text
          color={"blackAlpha.500"}
          fontSize="20px"
          _hover={{ color: "var(--hover-color )" }}
        >
          <AiOutlineArrowLeft />{" "}
        </Text>
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <Text
          color={"blackAlpha.500"}
          fontSize="20px"
          _hover={{ color: "var(--hover-color )" }}
        >
          <AiOutlineArrowRight />
        </Text>
      </div>
    );
  };

  var settings = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var newArrivalSettings = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    infinite: true,
    speed: 500,
    dots:true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const categories = [
    {
      name: "T-shirts & Tanks",
      img: tshirt,
      item: "Men",
    },
    {
      name: "Hoodies & Sweatshirts",
      img: hoodie,
      item: "Men",
    },
    {
      name: "Trousers",
      img: trouser,
      item: "Men",
    },
    {
      name: "Shirts",
      img: shirt,
      item: "Men",
    },
    {
      name: "Clothes",
      img: newsr,
      item: "Men",
    },
    {
      name: "Shoes",
      img: shoes,
      item: "Men",
    },
    {
      name: "Jeans",
      img: jeans,
      item: "Men",
    },
    {
      name: "Jacket",
      img: jac,
      item: "Men",
    },
    {
      name: "Premium Selection",
      img: pres,
      item: "Men",
    },
  ];

  let womens = useSelector(state => state.genericDataReducer.womens);
  let mens = useSelector(state => state.genericDataReducer.mens);
  let kids = useSelector(state => state.genericDataReducer.kids);
  let allProducts = [...womens.slice(3,9),...mens.slice(3,9),...kids.slice(3,7)];

  return (
    <Box mt='2%' ml={{base: '5%', md: '15%', lg: '15%'}} mr={{base: '5%', md: '15%', lg: '15%'}}>
      
        <VStack spacing={8} pb='20px'>
            <Image src={img1} alt='image'/>
            <Image src={img2} alt='image'/>
            <div className={styles.category_box}>
              <Heading textAlign="left" fontSize={{base:'md',md:'xl'}}>
                Categories for you
              </Heading>
                <Slider {...settings}>
                  {categories?.map((item, i) => (
                    <Link to="/mens" key={i} >
                      <Box m="5px" alignItems="center" textAlign={"center"} >
                        <Image
                          m="auto"
                          _hover={{ transform: "scale(1.1)", transition: "400ms" }}
                          p="10px"
                          src={item.img}
                          alt={item.name}
                        />
                        <Text fontWeight="500"> {item.item}</Text>
                        <Text>{item.name} </Text>
                      </Box>
                    </Link>
                  ))}
                </Slider>
            </div>      

            <div className={styles.category_box}>
              <Heading textAlign="left" fontSize={"xl"}>
                New Arrivals
              </Heading>
                <Slider {...newArrivalSettings}>
                  {allProducts?.map((item, i) => (
                    <Link to={`/details/${item.id}`}  key={i} >
                      <Box m="5px" alignItems="center" textAlign={"center"} >
                        <Image
                          m="auto"
                          _hover={{ transform: "scale(1.1)", transition: "400ms" }}
                          p="10px"
                          src={item.image}
                          alt={item.title}
                        />
                        <Text fontWeight="500"> {item.title}</Text>
                        <Text>Rs. {item.price} </Text>
                      </Box>
                    </Link>
                  ))}
                </Slider>
            </div>  
            <Image src={img3} alt='image' mt='20px'/>
        </VStack>
      
    </Box>
  )
}

export default Home