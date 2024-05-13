import { useState } from 'react'
import './App.css'
import Allroutes from './Allroutes'
import Navbar from './components/Navbar'
import Header from './components/Header'
import footer from './assets/footerimg.png'
import {Box,Image} from '@chakra-ui/react'
function App() {
 

  return (
    <>
     <Header/>
     <Navbar/>
     <Allroutes/>
     <Box pos="absolute" left={0}>
     <Image
        src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=14&duration=4000&pause=1000&color=444444&background=FFFFFF00&width=220&height=31&lines=Made+with+🧡+by+Meena"
        alt="Typing SVG"
        margin={"auto"}
        paddingTop={"15px"}
      />
        <Image src={footer} alt='image'/>
     </Box>
    </>
  )
}

export default App
