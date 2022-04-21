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



function Home() {


 
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
      <Box display="flex" flexDirection={["column","column","row"]} >

      <Box w={["100%","100%","50%"]} >
      <Accordion allowToggle >
        <AccordionItem bg="#c5d5cb" color="#9fa8a3"  >
          <h2>
            <AccordionButton  >
              <Box flex="1" textAlign="left" fontFamily="pop" fontSize={["sm"]} >
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
              <Box flex="1" textAlign="left" fontFamily="pop" fontSize={["sm"]} >
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
              <Box flex="1" textAlign="left" fontFamily="pop" fontSize={["sm"]} >
                projects
              </Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} fontFamily="see" >
          <Tabs isFitted variant="enclosed" color="#9fa8a3" >
            <TabList  >
              <Tab> <Text textTransform="capitalize" fontSize={["sm"]} fontFamily="pop" >movies-app</Text> </Tab>
              <Tab> <Text textTransform="capitalize" fontSize={["sm"]} fontFamily="pop" >news-app</Text> </Tab>
             
              
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box width="100%" as="a" href='http://damismovies.netlify.app' h="300px"  position="relative" justifyContent="space-between"  display="flex" >
                  
                  <Image  src={omdb} w="50%" h="100%" objectFit="cover"  />
                  <Box width="45%" h="100%"   >
                    <Text textTransform="capitalize" fontFamily="pop" fontSize={["sm","sm","lg"]} >movie search app</Text>
                    <Text fontFamily="see" mt={["20px","20px","40px"]} fontSize={["sm","sm","md"]} >
                    A simple web app built with the OMDB api , and chakra UI as the ui design system , with
                     a list of movies , and also gives you the ability to search any movie of your choice.
                    </Text>
                    <HStack mt="20px" wrap="wrap" height="50px" >
                    <Badge colorScheme="green"  variant="subtle" fontSize="x-small" >React-js</Badge>
                    <Badge colorScheme="green"  fontSize="x-small" >chakra-ui</Badge>
                    <Badge colorScheme="green"  fontSize="x-small" >omdb API</Badge>
                    <Badge colorScheme="green"  fontSize="x-small" >netlify</Badge>
                  </HStack>

                  </Box>
                  
                </Box>

              </TabPanel>
              <TabPanel>
                <Box width="100%" h="300px" as="a" href='https://nytimesum.netlify.app' position="relative" justifyContent="space-between"  display="flex" flexDirection="column" >
                <Image src={nytimes} w="100%" h="50%" objectFit="cover"  />
                  <Box width="100%" h="50%"   >
                  <Text textTransform="capitalize" mt="20px" fontFamily="pop" fontSize={["sm","sm","lg"]} >nytimes news summary app</Text>
                    <Text fontFamily="see" mt={["20px","20px","40px"]} fontSize={["sm","sm","md"]} >
                    A web app built with the nytimes REST api,with multiple news sections
                     where you can read short summaries on trending topics
                    </Text>
                    <HStack mt="20px" wrap="wrap" height="50px" >
                    <Badge colorScheme="green"  variant="subtle" fontSize="x-small" >nytimes api</Badge>
                    <Badge colorScheme="green"  fontSize="x-small" >scss</Badge>
                    <Badge colorScheme="green"  fontSize="x-small" >netlify</Badge>
                    <Badge colorScheme="green"  fontSize="x-small" >react-js</Badge>
                  </HStack>

                  </Box>
                  
                </Box>

              </TabPanel>
              
              
            </TabPanels>
          </Tabs>

          <Button mt="30px" bg="#9fa8a3" color="white" size="sm" textTransform="capitalize" >
            <Link to="/projects" >
            all projects
            </Link>
            
            </Button>
         
          </AccordionPanel>
        </AccordionItem>

      </Accordion>
      </Box>
      <Box bg="#e3e0cf" w={["100%","100%","50%"]} color="#9fa8a3" >
        <Text fontFamily="pop" fontSize={["sm","sm","md"]} >like to work with me..?</Text>
        <Text fontFamily="see" mt={["20px","20px","40px"]} fontSize={["sm","sm","md"]} >i am always open to new opportunities  ;)</Text>
        <Button as="a" mt={["40px"]} href="mailto:muyiwalateef@gmail.com" size={["sm"]} bg="#9fa8a3" color="white"  rightIcon={<HiOutlineMail/>} > Get in touch</Button>
        <HStack mt="40px" m="20px" >
        <Box as='a' href="https://www.twitter.com/LateefMuyiwa" >

          <FaTwitterSquare  />
        </Box>
        <Box as='a' href="mailto:muyiwalateef@gmail.com" >

          <MdEmail/>
        </Box>
        <Box as='a' href="https://www.github.com/dammy0625" >

          <FaGithub/>
        </Box>
        <Box as='a' href="https://www.linkedin.com/in/opeyemi-muyiwa-a97207219">

          <FaLinkedin/>
        </Box>
          
        </HStack>
      </Box>
      </Box>

      
    </div>
  )
}

export default Home;
