import React from "react"
import { Box,VStack,Text,Divider,Image,HStack,Badge } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/layout"
import omdb from "./omdb.png";
import nytimes from "./nytimes.png";
import shop from "./shop.png"
import remote from "./remote.png"
import zikoko from "./zikoko.png"
import pdf from "./pdf.PNG"


function Projects(){

    return (
<Box width="95%" paddingBottom="40px"  >
<Text color="#9fa8a3" fontFamily="pop" fontSize={["md","2xl"]} mt="20px" >
          projects</Text>

          <Flex mt="40px"   w="100%" wrap="wrap"  justifyContent="space-between" alignItems="center" flexDirection={["column","column","row"]}  >
              <Box w={["90%","90%","75%"]} m="20px"   as="a" href='http://damismovies.netlify.app' p="10px" boxShadow="base" borderRadius="md" 
               position="relative" justifyContent="space-between"  display="flex" >
              <Image  src={omdb} w="50%" h="container" objectFit="cover"  />
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

                  </Box> </Box>
              <Divider/>
              <Box w={["90%","90%","75%"]}  m="20px"  as="a" href='http://damismovies.netlify.app' p="10px" boxShadow="base" borderRadius="md" 
               position="relative" justifyContent="space-between"  display="flex" >
              <Image  src={nytimes} w="50%" h="container" objectFit="cover"  />
                  <Box width="45%" h="100%"   >
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

                  </Box> </Box>
              <Divider/>
              <Box w={["90%","90%","75%"]}  m="20px"  as="a" href="https://dammy0625.github.io/shop/" p="10px" boxShadow="base" borderRadius="md" 
               position="relative" justifyContent="space-between"  display="flex" >
              <Image  src={shop} w="50%" h="container" objectFit="cover"  />
                  <Box width="45%" h="100%"   >
                  <Text textTransform="capitalize" mt="20px" fontFamily="pop" fontSize={["sm","sm","lg"]} >
                     an e-commerce store </Text>
                    <Text fontFamily="see" mt={["20px","20px","40px"]} fontSize={["sm","sm","md"]} >
                    this is an online jewelry store , built with react, with data from third-party api
                     ,and tested with the jest library
                    </Text>
                    <HStack mt="20px" wrap="wrap" height="50px" >
                    <Badge colorScheme="green"  variant="subtle" fontSize="x-small" >Git</Badge>
                    <Badge colorScheme="green"  fontSize="x-small" >scss</Badge>
                    <Badge colorScheme="green"  fontSize="x-small" >jest</Badge>
                    <Badge colorScheme="green"  fontSize="x-small" >react-js</Badge>
                  </HStack>

                  </Box> </Box>
              <Divider/>
              <Box w={["90%","90%","75%"]}  m="20px"  as="a" href="https://dammy0625.github.io/job/" p="10px" boxShadow="base" borderRadius="md" 
               position="relative" justifyContent="space-between"  display="flex" >
              <Image  src={remote} w="50%" h="container" objectFit="cover"  />
                  <Box width="45%" h="100%"   >
                  <Text textTransform="capitalize" mt="20px" fontFamily="pop" fontSize={["sm","sm","lg"]} >
                  job-site clone </Text>
                    <Text fontFamily="see" mt={["20px","20px","40px"]} fontSize={["sm","sm","md"]} >
                    A clone of the remote-tech job webpage
                    </Text>
                    <HStack mt="20px" wrap="wrap" height="50px" >
                    <Badge colorScheme="green"  variant="subtle" fontSize="x-small" >Git</Badge>
                    <Badge colorScheme="green"  fontSize="x-small" >scss</Badge>
                    <Badge colorScheme="green"  fontSize="x-small" >icons8</Badge>
                    <Badge colorScheme="green"  fontSize="x-small" >react-js</Badge>
                  </HStack>

                  </Box> </Box>
              <Divider/>
              <Box w={["90%","90%","75%"]}  m="20px"  as="a" href="https://dammy0625.github.io/tired/" p="10px" boxShadow="base" borderRadius="md" 
               position="relative" justifyContent="space-between"  display="flex" >
              <Image  src={zikoko} w="50%" h="container" objectFit="cover"  />
                  <Box width="45%" h="100%"   >
                  <Text textTransform="capitalize" mt="20px" fontFamily="pop" fontSize={["sm","sm","lg"]} >
                  zikoko website clone </Text>
                    <Text fontFamily="see" mt={["20px","20px","40px"]} fontSize={["sm","sm","md"]} >
                    A clone of the zikoko website
                    </Text>
                    <HStack mt="20px" wrap="wrap" height="50px" >
                    <Badge colorScheme="green"  variant="subtle" fontSize="x-small" >Git</Badge>
                    <Badge colorScheme="green"  fontSize="x-small" >scss</Badge>
                    <Badge colorScheme="green"  fontSize="x-small" >jest</Badge>
                    <Badge colorScheme="green"  fontSize="x-small" >react-js</Badge>
                  </HStack>

                  </Box> </Box>
              <Divider/>
              <Box w={["90%","90%","75%"]}   m="20px" as="a" href="https://dammy0625.github.io/pdf/" p="10px" boxShadow="base" borderRadius="md" 
               position="relative" justifyContent="space-between"  display="flex" >
              <Image  src={pdf} w="50%" h="container" objectFit="cover"  />
                  <Box width="45%" h="100%"   >
                  <Text textTransform="capitalize" mt="20px" fontFamily="pop" fontSize={["sm","sm","lg"]} >
                  PDF builder </Text>
                    <Text fontFamily="see" mt={["20px","20px","40px"]} fontSize={["sm","sm","md"]} >
                    A Single page application used in creating pdf documents in simple style.
                    </Text>
                    <HStack mb="20px" wrap="wrap" height="50px" >
                    <Badge colorScheme="green"  variant="subtle" fontSize="x-small" >Git</Badge>
                    <Badge colorScheme="green"  fontSize="x-small" >scss</Badge>
                    <Badge colorScheme="green"  fontSize="x-small" >react-to-print</Badge>
                    <Badge colorScheme="green"  fontSize="x-small" >react-js</Badge>
                  </HStack>

                  </Box> </Box>
              
          </Flex>

</Box>
    )



}

export default Projects;