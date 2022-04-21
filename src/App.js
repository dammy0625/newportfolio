import { useEffect,useState } from 'react';
import './App.css';
import { Box, Center, Flex, Heading } from '@chakra-ui/layout';
import { Badge,Text,
  Image,Grid,
   GridItem,Divider,
   Skeleton, 
    SkeletonText,HStack,VStack, Spacer,
    Input,
    InputGroup,Button, InputRightElement,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Avatar,
    Accordion,AccordionItem,AccordionIcon,AccordionButton,AccordionPanel,
    Tabs,Tab,TabList,TabPanels,TabPanel,
    DrawerCloseButton,} from '@chakra-ui/react';
    import me from "./me.png";
    import omdb from "./omdb.png";
    import nytimes from "./nytimes.png";
    import {HiOutlineMail} from "react-icons/hi"
    import {FaTwitterSquare} from "react-icons/fa"
    import {MdEmail} from "react-icons/md"
    import {FaGithub} from "react-icons/fa"
    import {FaLinkedin} from "react-icons/fa"
    import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
    import Projects from './projects';
    import Home from './home';



function App() {


 
  return (
    
    <div className="App">
      <Router>
        
     

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>

      </Router>
    </div>
  )
}

export default App;
