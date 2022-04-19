import { useEffect,useState } from 'react';
import './App.css';
import { Box, Center, Flex } from '@chakra-ui/layout';
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
    DrawerCloseButton,} from '@chakra-ui/react';
    import me from "./me.png";
    import {HiOutlineMail} from "react-icons/hi"



function App() {


 
  return (
    
    <div className="App">
      <Box w="100%" bg="#e3e0cf" h={["400px","400px"]} position="relative" >
        <Text position="absolute" color="#9fa8a3" fontFamily="me" fontSize={["md","2xl"]} margin={["20px"]} >
          Dammy</Text>
        <Avatar src={me} size={["xl"]} border="black" marginTop={["20px ","40px"]} ml={["0","60%"]}  />
        <Text mt={["20px"]} color="#9fa8a3" fontFamily="see" fontSize={["md","2xl"]} mr={["0","50%"]} >
          Hi, i'm Opeyemi
        </Text>
      
        <Text  mt={["20px"]} textTransform="capitalize" color="#9fa8a3" fontFamily="pop" mr={["0","20%"]} fontSize={["md","2xl"]}>
          a front-end web developer
        </Text>
        <Text  mt={["40px"]}  color="#9fa8a3" fontFamily="see" fontSize={["md","2xl"]}>
          web developer | curious mind
        </Text>
        <Button as="a" mt={["40px","-20%"]} ml={["0","60%"]} href="mailto:muyiwalateef@gmail.com" size={["sm"]} bg="#9fa8a3" color="white"  rightIcon={<HiOutlineMail/>} > Get in touch</Button>

      </Box>
      <Accordion allowToggle >
        <AccordionItem bg="#c5d5cb" color="#9fa8a3"  >
          <h2>
            <AccordionButton  >
              <Box flex="1" textAlign="left" fontFamily="pop" fontSize={["md","2xl"]} >
                my story
              </Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} fontFamily="see" >
          I am highly passionate about tech and how it all works ... which then leads me to solving problems with code . 
                My journey with Software development started in 2020 . A random guy at a cafe adviced me  to learn "coding" instead of going to the university (which i was at the cafe to register for) . 
                i didn't understand what he was saying , although i knew about programming and all, it just sounded strange, coding was what genius in movies do right?..lol.
                I was trying a small online business on an e-commerce site at the time and the charges were so high, i started researching on how i could have my own mini site to sell my products.
                During the research, the interest was sparked , and i had picked up relevent skills like HTML , CSS , and Javascript during that period .
                Ever since , i have had the opportunity to work on interesting projects with focus on adding value. 
                I kept improving on the fundamental skills and looking forward to gaining work experience along the way. 
          
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem bg="#c5d5cb" color="#9fa8a3"  >
          <h2>
            <AccordionButton  >
              <Box flex="1" textAlign="left" fontFamily="pop" fontSize={["md","2xl"]} >
                tech stack
              </Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} fontFamily="see" >

            <HStack wrap="wrap" spacing={2} h={["100px"]} >
              <Badge bg="#9fa8a3" color="white" m={["10px"]} >React-Js</Badge>
              <Badge bg="#9fa8a3" color="white" m={["10px"]} >Javascript ES6</Badge>
              <Badge bg="#9fa8a3" color="white" m={["10px"]} >S(CSS)</Badge>
              <Badge bg="#9fa8a3" color="white" m={["10px"]} >Chakra UI</Badge>
              <Badge bg="#9fa8a3" color="white" m={["10px"]} >Typescript</Badge>
              <Badge bg="#9fa8a3" color="white" m={["10px"]} >Netlify</Badge>
              <Badge bg="#9fa8a3" color="white" m={["10px"]} >Redux</Badge>
              <Badge bg="#9fa8a3" color="white" m={["10px"]} >Bootstrap</Badge>
              <Badge bg="#9fa8a3" color="white" m={["10px"]} >Git( hub)</Badge>
              <Badge bg="#9fa8a3" color="white" m={["10px"]} >Node</Badge>
              <Badge bg="#9fa8a3" color="white" m={["10px"]} >mongoose</Badge>
              <Badge bg="#9fa8a3" color="white" m={["10px"]} >express</Badge>
              <Badge bg="#9fa8a3" color="white" m={["10px"]} >mongodb</Badge>
            </HStack>
         
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem bg="#c5d5cb" color="#9fa8a3"  >
          <h2>
            <AccordionButton  >
              <Box flex="1" textAlign="left" fontFamily="pop" fontSize={["md","2xl"]} >
                projects
              </Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} fontFamily="see" >

            <HStack wrap="wrap" spacing={2} h={["100px"]} >
             
            </HStack>
         
          </AccordionPanel>
        </AccordionItem>

      </Accordion>


    </div>
  )
}

export default App;
