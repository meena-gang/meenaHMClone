import {
    Button,
    IconButton,
    Image,
    Stack,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
  import React from "react";
  import styles from "./Navbar.module.css";
  import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from "@chakra-ui/react";
  import { HamburgerIcon } from "@chakra-ui/icons";
  import { Link, useNavigate } from "react-router-dom";
  import { useRef } from "react";
  
  
   const MobileNavbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const navigate = useNavigate();
    const handleClick = (route) => {
      onClose();
      navigate(`/${route}`);
    };
  
    return (
      <div className={styles.mobile_nav}>
        <Button
          ref={btnRef}
          onClick={onOpen}
          as={IconButton}
          colorScheme=""
          icon={<HamburgerIcon fontSize={"15px"} m='5px' />}
          variant="outline"
          border={"none"}
          top='2px'
          left='8px'
          position='absolute'
        ></Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="xs"
        >
          <DrawerOverlay /> 
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Image src="" />
              <Stack
                marginTop="40px"
                fontSize={"xl"}
                fontWeight="400"
                alignItems={"center"}
                gap="15px"
              >
                <Text
                  onClick={() => handleClick("ladies")}
                  cursor={"pointer"}
                  _hover={{ color: "var(--text-color)" }}
                >
                  Ladies
                </Text>
  
                <Text
                  cursor={"pointer"}
                  _hover={{ color: "var(--text-color)" }}
                  onClick={() => handleClick("mens")}
                >
                  Mens
                </Text>
  
                <Text
                  cursor={"pointer"}
                  _hover={{ color: "var(--text-color)" }}
                  onClick={() => handleClick("/kids")}
                >
                  Baby
                </Text>
  
                <Text
                  onClick={() => handleClick("sport")}
                  cursor={"pointer"}
                  _hover={{ color: "var(--text-color)" }}
                >
                  Sports
                </Text>
  
                <Text
                  cursor={"pointer"}
                  _hover={{ color: "var(--text-color)" }}
                  onClick={() => handleClick("home")}
                >
                  H&M Home
                </Text>
  
               
                <Text
                  onClick={() => handleClick("sale")}
                  cursor={"pointer"}
                  _hover={{ color: "var(--text-color)" }}
                >
                  Sale
                </Text>


                <Text
                  onClick={() => handleClick("dividend")}
                  cursor={"pointer"}
                  _hover={{ color: "var(--text-color)" }}
                >
                  Sustainability
                </Text>
               
              </Stack>
            </DrawerBody>
            <DrawerFooter>
              <Image
                src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=14&duration=4000&pause=1000&color=444444&background=FFFFFF00&width=220&height=31&lines=Made+with+🧡+by+Meena"
                alt="Typing SVG"
                // style={{ margin: "auto" }}
                margin={"auto"}
              />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  };

  export default MobileNavbar;