import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import {Box, Center,Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
import { CiSearch } from "react-icons/ci";
import NavItem from './NavItem';
import MobileNavbar from './MobileNavbar';

const ladies = [
  {
    key: "New Arrivals",
    key_data: ["View All", "Clothes"],
  },
  {
    key: "Trending Now",
    key_data: [
      "Timeless casual",
      "Glam city",
      "H&M Studio S/S 2023",
      "New season edit",
    ],
  },
  {
    key: "Shop by Product",
    key_data: [
      "View All",
      "Tops & T-shirts",
      "Dresses",
      "Trousers",
      "Blazers",
      "Shirts & Blouses",
      "Jeans",
      "Shoes",
      "Accessories",
      "Lingerie",
      "Nightwear",
      "Sweatshirts & Hoodies",
      "Cardigans & Sweaters",
      "Knitwear",
      "Jackets & Coats",
      "Loungewear",
      "Sportswear",
      "Skirts",
      "Shorts",
      "Basics",
    ],
  },
  {
    key: "Sustainability",
    key_data: ["H&M Take Care", "Learn More"],
  },
  {
    key: "Magazine",
    key_data: ["Magazine"],
  },
  {
    key: "Shop by Occasion",

    key_data: ["Party Wear", "Casual Wear", "Office Wear", "Loungewear"],
  },
];
const men = [
  {
    key: "New Arrivals",
    key_data: ["View All", "Clothes", "Shoes & Accessories"],
  },
  {
    key: "Spring lookbook",
    key_data: ["Casual looks", "Smart looks", "Street looks"],
  },
  {
    key: "Shop by Product",
    key_data: [
      "View All",
      "T-shirts & Tanks",
      "Shirts",
      "Trousers",
      "Hoodies & Sweatshirts",
      "Jeans",
      "Shoes",
      "Shorts",
      "Cardigans & Jumpers",
      "Jackets & Coats",
      "Knitwear",
      "Basics",
      "Suits & Blazers",
      "Underwear & Innerwear",
      "Socks",
      "Accessories",
      "Sportswear",
      "Care products",
      "Sleepwear & Loungewear",
    ],
  },
  {
    key: "Sustainability",
    key_data: ["H&M Take Care", "Learn More"],
  },
  {
    key: "The essentials",
    key_data: ["About", "Core collection"],
  },
  {
    key: "Spring lookbook",

    key_data: ["Party Wear", "Casual Wear", "Office Wear", "Loungewear"],
  },
];
const home = [
  {
    key: "New Arrivals",
    key_data: ["New Arrivals"],
  },
  {
    key: "Trending Now",
    key_data: [
      "Home essentials",
      "Colorburst Collection",
      "Scented candles",
      "Latest Trends",
    ],
  },
  {
    key: "Shop by Product",
    key_data: [
      "View All",
      "Decorations",
      "Cushions",
      "Bed Linen",
      "Room Fragrance",
      "Servingware & Tableware",
      "Cookware & Bakeware",
      "Organize & Storage",
      "Bath & Shower",
      "Blankets",
      "Curtains",
      "Sleepwear",
      "Giftwraps",
      "Sale",
    ],
  },
  {
    key: "Sustainability",
    key_data: ["Meet the maker"],
  },
  {
    key: "Magazine",
    key_data: ["Magazine"],
  },
];
const sport = [
  {
    key: "Women",
    key_data: [
      "View All",
      "New arrivals",
      "Clothing",
      "Active Swimwear",
      "Outerwear",
      "Accessories & Equipment",
      "Maternity",
    ],
  },
  {
    key: "Men",
    key_data: [
      "View All",
      "New arrivals",
      "Clothing",
      "Outerwear",
      "Accessories & Equipment",
    ],
  },
  {
    key: "Sale",
    key_data: ["View all", "Women", "Men", "Kids"],
  },
  {
    key: "Kids",
    key_data: [
      "View All",
      "New arrivals",
      "Girls",
      "Boys",
      "Sports Accessories",
    ],
  },
];
const baby = [
  {
    key: "H&M ❤ Baby",
    key_data: ["Life with Baby"],
  },
  {
    key: "Newborn",
    key_data: [
      "View all",
      "New Arrivals",
      "Clothing",
      "Accessories",
      "Outerwear",
      "Shoes",
    ],
  },
  {
    key: "Baby Girl",
    key_data: [
      "View all",
      "New Arrivals",
      "Clothing",
      "Outerwear",
      "Accessories",
      "Shoes",
    ],
  },
  {
    key: "Baby Boy",
    key_data: [
      "View all",
      "New Arrivals",
      "Clothing",
      "Outerwear",
      "Accessories",
      "Shoes",
    ],
  },
  {
    key: "Shop by Product",
    key_data: [
      "View all",
      "New Arrivals",
      "Clothing",
      "Outerwear",
      "Accessories",
      "Shoes",
      "Sale",
    ],
  },
  {
    key: "Sustainability",
    key_data: ["H&M Take Care", "Learn More"],
  },
];
const sale = [
  {
    key: "Men",
    key_data: [
      "View All",
      "T-shirts & Tanks",
      "Shirts",
      "Trousers",
      "Hoodies & Sweatshirts",
      "Jeans",
      "Shoes",
      "Shorts",
      "Cardigans & Jumpers",
      "Jackets & Coats",
      "Knitwear",
      "Basics",
      "Suits & Blazers",
      "Underwear & Innerwear",
      "Socks",
      "Accessories",
      "Sportswear",
      "Care products",
      "Sleepwear & Loungewear",
    ],
  },
  {
    key: "Women",
    key_data: [
      "View All",
      "Tops & T-shirts",
      "Dresses",
      "Trousers",
      "Blazers",
      "Shirts & Blouses",
      "Jeans",
      "Shoes",
      "Accessories",
      "Lingerie",
      "Nightwear",
      "Sweatshirts & Hoodies",
      "Cardigans & Sweaters",
      "Knitwear",
      "Jackets & Coats",
      "Loungewear",
      "Sportswear",
      "Skirts",
      "Shorts",
      "Basics",
    ],
  },
  {
    key: "Dividend",
    key_data: [
      "View All",
      "Tops",
      "Jeans",
      "Dresses",
      "Shirts & Blouses",
      "Accessories",
      "Divided - Basics",
      "Trousers & Leggings",
      "Divided - Skirts",
      "Shorts",
      "Underwear & Nightwear",
      "Swimwear",
      "Shoes",
      "Cardigans & Jumpers",
      "Hoodies & Sweatshirts",
      "Jackets & Coats",
      "Care products",
      "Sale",
    ],
  },
  {
    key: "Kids",
    key_data: [
      "View all",
      "New Arrivals",
      "Clothing",
      "Outerwear",
      "Accessories",
      "Shoes",
      "Sale",
    ],
  },
  {
    key: "Sports",
    key_data: [
      "View All",
      "New arrivals",
      "Clothing",
      "Outerwear",
      "Accessories & Equipment",
    ],
  },
];
const dividend = [
  {
    key: "New Arrivals",
    key_data: ["View All", "Clothes"],
  },
  {
    key: "Trending Now",
    key_data: [
      "Style up with DIVIDED",
      "Color Play!",
      "Basics under Rs.499",
      "Spring Edit",
      "Music, Movies & Logos",
    ],
  },
  {
    key: "Shop by Product",
    key_data: [
      "View All",
      "Tops",
      "Jeans",
      "Dresses",
      "Shirts & Blouses",
      "Accessories",
      "Divided - Basics",
      "Trousers & Leggings",
      "Divided - Skirts",
      "Shorts",
      "Underwear & Nightwear",
      "Swimwear",
      "Shoes",
      "Cardigans & Jumpers",
      "Hoodies & Sweatshirts",
      "Jackets & Coats",
      "Care products",
      "Sale",
    ],
  },
  {
    key: "Sustainability",
    key_data: ["H&M Take Care", "Learn More"],
  },
  {
    key: "Magazine",
    key_data: ["Magazine"],
  },
  {
    key: "Shop by Occasion",

    key_data: ["Party Wear", "Casual Wear", "Office Wear", "Loungewear"],
  },
];
const Navbar = () => {
 
  return (
    <div className={styles.navbar_box}>
       <MobileNavbar />
     <div className={styles.navbar_box_2}>
        <div></div>
       
        <div className={styles.navbar_items}>
            <NavItem comp="Ladies" list={ladies} onClick="ladies" key={1} />
            <NavItem comp="Men" list={men} onClick="mens" key={2} />
            <NavItem comp="Baby" list={baby} onClick="kids" key={3} />
            <NavItem comp="Sport" list={sport} onClick="sport" key={4} />
            <NavItem comp="H&M Home" list={home} onClick="home" key={5} />
            <NavItem comp="Sale" list={sale} onClick="sale" key={6} />
            <NavItem comp="Sustainability" list={dividend} onClick="dividend" key={7} />
        </div>
        <div className={styles.comp_searchbar}>
          <InputGroup>
            {/* <InputLeftElement > */}
            <InputLeftElement
              pointerEvents="none"
              children={<CiSearch fontSize={"27px"} />}
            />
            <Input
              variant={"flushed"}
              placeholder="Search products"
              focusBorderColor="gray.100"
              fontSize={"16px"}
            />
          </InputGroup>
        </div>
      </div>
      </div>
  )
}

export default Navbar