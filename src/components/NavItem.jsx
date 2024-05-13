import React from 'react'
import styles from "./NavItem.module.css";

import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import { Link, useNavigate } from "react-router-dom";


const NavItem = ({ comp, list, onClick }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const handleClick = () => {
        
        navigate(`/${onClick}`);
    };
  return (
    
      <Menu isOpen={isOpen}>
      <MenuButton
        // variant="ghost"
        mx={1}
        py={[1, 2, 2]}
        px={4}
        onClick={handleClick}
        zIndex="10000000000"
        fontWeight="400"
        fontSize={"16px"}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        {comp}
      </MenuButton>
      <MenuList
        p="0px"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        zIndex="10000000000"
      >
        <div className={styles.nav_drop_down}>
          {list.map((el, i) => {
            return (
              <Stack key = {i}>
                <Text fontWeight="500" fontSize={"16px"}>
                  {el.key}
                </Text>
                {el?.key_data?.map((item) => {
                  return (
                    <Link to={`/category/${onClick}`} key = {Math.random()+i}>
                      <Text cursor={"pointer"}>{item}</Text>
                    </Link>
                  );
                })}
              </Stack>
            );
          })}
        </div>
      </MenuList>
    </Menu>
  );
};


  


export default NavItem;