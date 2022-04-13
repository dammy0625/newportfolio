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
    DrawerCloseButton,} from '@chakra-ui/react';
import axios from "axios";


function App() {
const [count, setCount ] = useState("");
const [ploth, setPloth ] = useState("");
const [rel, setRel ] = useState("");
const [actors, setActors ] = useState("");
const [show, setShow ] = useState("none");
const [l1p, setL1p ] = useState("");
const [l1pl, setL1pl ] = useState("");
const [l1t, setL1t ] = useState("");
const [l2p, setL2p ] = useState("");
const [l2pl, setL2pl ] = useState("");
const [l2t, setL2t ] = useState("");
const [l3p, setL3p ] = useState("");
const [l3pl, setL3pl ] = useState("");
const [l3t, setL3t ] = useState("");
const [l4p, setL4p ] = useState("");
const [l4pl, setL4pl ] = useState("");
const [l4t, setL4t ] = useState("");
const [l5p, setL5p ] = useState("");
const [l5pl, setL5pl ] = useState("");
const [l5t, setL5t ] = useState("");
const [a5p, setA5p ] = useState("");
const [a5pl, setA5pl ] = useState("");
const [a5t, setA5t ] = useState("");
const [a4p, setA4p ] = useState("");
const [a4pl, setA4pl ] = useState("");
const [a4t, setA4t ] = useState("");
const [a3p, setA3p ] = useState("");
const [a3pl, setA3pl ] = useState("");
const [a3t, setA3t ] = useState("");
const [a2p, setA2p ] = useState("");
const [a2pl, setA2pl ] = useState("");
const [a2t, setA2t ] = useState("");
const [a1p, setA1p ] = useState("");
const [a1pl, setA1pl ] = useState("");
const [a1t, setA1t ] = useState("");
const [s1p, setS1p ] = useState("");
const [s1pl, setS1pl ] = useState("");
const [s1t, setS1t ] = useState("");
const [s2p, setS2p ] = useState("");
const [s2pl, setS2pl ] = useState("");
const [s2t, setS2t ] = useState("");
const [s3p, setS3p ] = useState("");
const [s3pl, setS3pl ] = useState("");
const [s3t, setS3t ] = useState("");
const [s4p, setS4p ] = useState("");
const [s4pl, setS4pl ] = useState("");
const [s4t, setS4t ] = useState("");
const [s5p, setS5p ] = useState("");
const [s5pl, setS5pl ] = useState("");
const [s5t, setS5t ] = useState("");
const [resp, setResp ] = useState("");
const [respl, setRespl ] = useState("");
const [rest, setRest ] = useState("");
const [imp, setImp ] = useState("");


const { isOpen, onOpen, onClose } = useDisclosure()


var searching;

useEffect(()=>{
  setTimeout(() => {
    axios.get('https://omdbapi.com/?apikey=6d3966ee&i=tt14439896&plot=full').then((res)=>{
    let data = res.data.Poster
    let plot = res.data.Plot
    let released = res.data.Released
    let actor = res.data.Actors
    
    data ? setCount(data): setCount("")
    plot ? setPloth(plot): setPloth("")
    released ? setRel(released): setRel("")
    actor ? setActors(actor): setActors("")
    
  });
    axios.get('https://omdbapi.com/?apikey=6d3966ee&i=tt7657566&plot=full').then((res)=>{
    const data = res.data.Poster
    let plot = res.data.Title
    let story = res.data.Plot
    
    
    data ? setL1p(data): setL1p("")
    plot ? setL1t(plot): setL1t("")
    story ? setL1pl(story): setL1pl("")
    
    
  });
    axios.get('https://omdbapi.com/?apikey=6d3966ee&i=tt5108870&plot=full').then((res)=>{
    const data = res.data.Poster
    let plot = res.data.Title
    let story = res.data.Plot
    
    
    data ? setL2p(data): setL2p("")
    plot ? setL2t(plot): setL2t("")
    story ? setL2pl(story): setL2pl("")
    
    
  });
    axios.get('https://omdbapi.com/?apikey=6d3966ee&i=tt13610562&plot=full').then((res)=>{
    const data = res.data.Poster
    let plot = res.data.Title
    let story = res.data.Plot
    
    
    data ? setL3p(data): setL3p("")
    plot ? setL3t(plot): setL3t("")
    story ? setL3pl(story): setL3pl("")
    
    
  });
    axios.get('https://omdbapi.com/?apikey=6d3966ee&i=tt1877830&plot=full').then((res)=>{
    const data = res.data.Poster
    let plot = res.data.Title
    let story = res.data.Plot
    
    
    data ? setL4p(data): setL4p("")
    plot ? setL4t(plot): setL4t("")
    story ? setL4pl(story): setL4pl("")
    
    
  });
    axios.get('https://omdbapi.com/?apikey=6d3966ee&i=tt11138512&plot=full').then((res)=>{
    const data = res.data.Poster
    let plot = res.data.Title
    let story = res.data.Plot
    
    
    data ? setL5p(data): setL5p("")
    plot ? setL5t(plot): setL5t("")
    story ? setL5pl(story): setL5pl("")
    
    
  });
    axios.get('https://omdbapi.com/?apikey=6d3966ee&i=tt13320622&plot=full').then((res)=>{
    const data = res.data.Poster
    let plot = res.data.Title
    let story = res.data.Plot
    
    
    data ? setA5p(data): setA5p("")
    plot ? setA5t(plot): setA5t("")
    story ? setA5pl(story): setA5pl("")
    
    
  });
    axios.get('https://omdbapi.com/?apikey=6d3966ee&i=tt5834426&plot=full').then((res)=>{
    const data = res.data.Poster
    let plot = res.data.Title
    let story = res.data.Plot
    
    
    data ? setA4p(data): setA5p("")
    plot ? setA4t(plot): setA5t("")
    story ? setA4pl(story): setA5pl("")
    
    
  });
    axios.get('https://omdbapi.com/?apikey=6d3966ee&i=tt9419884&plot=full').then((res)=>{
    const data = res.data.Poster
    let plot = res.data.Title
    let story = res.data.Plot
    
    
    data ? setA3p(data): setA5p("")
    plot ? setA3t(plot): setA5t("")
    story ? setA3pl(story): setA5pl("")
    
    
  });
    axios.get('https://omdbapi.com/?apikey=6d3966ee&i=tt4998632&plot=full').then((res)=>{
    const data = res.data.Poster
    let plot = res.data.Title
    let story = res.data.Plot
    
    
    data ? setA2p(data): setA5p("")
    plot ? setA2t(plot): setA5t("")
    story ? setA2pl(story): setA5pl("")
    
    
  });
    axios.get('https://omdbapi.com/?apikey=6d3966ee&i=tt11198330&plot=full').then((res)=>{
    const data = res.data.Poster
    let plot = res.data.Title
    let story = res.data.Plot
    
    
    data ? setA1p(data): setA5p("")
    plot ? setA1t(plot): setA5t("")
    story ? setA1pl(story): setA5pl("")
    
    
  });
    axios.get('https://omdbapi.com/?apikey=6d3966ee&i=tt9253284&plot=full').then((res)=>{
    const data = res.data.Poster
    let plot = res.data.Title
    let story = res.data.Plot
    
    
    data ? setS1p(data): setA5p("")
    plot ? setS1t(plot): setA5t("")
    story ? setS1pl(story): setA5pl("")
    
    
  });
    axios.get('https://omdbapi.com/?apikey=6d3966ee&i=tt12327578&plot=full').then((res)=>{
    const data = res.data.Poster
    let plot = res.data.Title
    let story = res.data.Plot
    
    
    data ? setS2p(data): setA5p("")
    plot ? setS2t(plot): setA5t("")
    story ? setS2pl(story): setA5pl("")
    
    
  });
    axios.get('https://omdbapi.com/?apikey=6d3966ee&i=tt2887954&plot=full').then((res)=>{
    const data = res.data.Poster
    let plot = res.data.Title
    let story = res.data.Plot
    
    
    data ? setS3p(data): setA5p("")
    plot ? setS3t(plot): setA5t("")
    story ? setS3pl(story): setA5pl("")
    
    
  });
    axios.get('https://omdbapi.com/?apikey=6d3966ee&i=tt11311302&plot=full').then((res)=>{
    const data = res.data.Poster
    let plot = res.data.Title
    let story = res.data.Plot
    
    
    data ? setS4p(data): setA5p("")
    plot ? setS4t(plot): setA5t("")
    story ? setS4pl(story): setA5pl("")
    
    
  });
   
    axios.get('https://omdbapi.com/?apikey=6d3966ee&i=tt3581920&plot=full').then((res)=>{
    const data = res.data.Poster
    let plot = res.data.Title
    let story = res.data.Plot
    
    
    data ? setS5p(data): setA5p("")
    plot ? setS5t(plot): setA5t("")
    story ? setS5pl(story): setA5pl("")
    
    
  });
   


   searching = ()=>{
    axios.get(`https://omdbapi.com/?apikey=6d3966ee&t={imp}&plot=full `).then((res)=>{
      const data = res.data.Poster
      let plot = res.data.Title
      let story = res.data.Plot
      
      
      data ? setResp(data): setA5p("")
      plot ? setRest(plot): setA5t("")
      story ? setRespl(story): setA5pl("")
      
      
    });
    onOpen()
  
  }




  },1000);
})




const textChange= (e)=>{
setImp(e.target.value)
}

 
  return (
    count ? 
    <div className="App">

<Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        
        
      >
        <DrawerOverlay />
        <DrawerContent >
        <DrawerCloseButton color="white" zIndex="popover" bg="blackAlpha.700" />
          <DrawerBody bg="blackAlpha.800" width="100%" color="white" >
            {imp ? 
            <Box>
            <Box bg="white" w="150%" h="40%" ml="-10%" mt="-3%" >
<Image src={resp} boxSize="full" objectFit="cover" brightness='20%' />

            </Box>
            <Text fontFamily="pop" ml="5%" >
  {rest}
</Text>
<Text fontWeight="light" fontFamily="see" fontSize="sm" >
  {respl}
</Text>
</Box> : <Box>
<Skeleton startColor="blackAlpha.700" endColor="blackAlpha.500" w="150%" height="200px" ml="-10%" mt="-3%" />
<SkeletonText noOfLines={1} startColor="blackAlpha.700" endColor="blackAlpha.500" mt="10%" width="30%" />
  <SkeletonText mt='20%' noOfLines={[5,5,7]} spacing={['5','5','7']} startColor="blackAlpha.700" endColor="blackAlpha.500" w="100%" />
  </Box>}

          </DrawerBody>

        </DrawerContent>
      </Drawer>
      <Box  color='#db0000' letterSpacing='wide' fontSize={['2xl','4xl','5xl']} textAlign={['center',"center",'left']}  bg="black" fontFamily="me" >
  <Text ml={["0px","0px",'20']} >DAMIS</Text>
</Box>
<Box position="relative" boxSize='full' bg="blackAlpha.300"  h={["300px","400px","500px"]} >
<Image
    boxSize='full'
    objectFit={["fill","fill","cover"]}
    src={count}
    alt='Dan Abramov'
  />
  <Box boxSize="full"
   bgGradient='linear(to-t, black, transparent)'
  opacity="0.6"
  position="absolute"
  top="0px"
  >
  <Grid
  h="80%"
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={[10,10,20]}
>
  <GridItem rowSpan={[3,3,2]} colSpan={[4,4,3]}  ml={["30%","30%","5%"]}  color="white" mt={["30px","30px","40px"]} fontFamily="pop" fontSize={["large","2xl","6xl"]} >
    WATCH SOMETHING INCREDIBLE
  </GridItem>
  <GridItem colSpan={[2,2,1]} rowSpan={2} color="whiteAlpha.800" fontSize={["x-small","medium","xl"]} mt={["0px","0px","40px"]} fontFamily="see"  >
    {actors}
  </GridItem>
  <GridItem colSpan={2}  >
  <Badge colorScheme='red' variant="outline" fontSize={["x-small","small"]} position="absolute" right="10px" >{rel}</Badge>
  </GridItem>
  <GridItem colSpan={4}  mr={["70px"]} >
    <Text color="gray.300"  overflow="hidden"
  _before={{ content: '" "', display: 'inline-block', mr: '5px',bg:"red",width:"3px",height:["13px"] }} fontSize={["smaller","sm","2xl"]} fontFamily="see" textAlign="start" ml="20px" >
    {ploth}
    </Text>
    </GridItem>
</Grid>
  </Box>
</Box>

<Center 
mt={["8%","8%",'2%']}
>

<InputGroup size="sm" w="80%">
      <Input
      
        pr='4.5rem'
        type="text"
        placeholder='Search Movies'
        onChange={textChange}
      />
      <InputRightElement width='4.5rem'   position="relative">
        <Button  size='xs' position="absolute" mr="0" onClick={searching} >
          search
        </Button>
      </InputRightElement>
    </InputGroup>
  
    </Center>
    <Box  w="95%"  mt={["5%","5%","3%"]} ml="2%" >
      <VStack  >
      <Box width="100%"   position="relative" >
          <Text position="absolute" fontFamily="pop" fontSize={["sm","sm","lg"]} color="gray.500" >Latest</Text>
          <Flex mt="5%" wrap="wrap" >
            <Box onMouseOver={()=>{
              setShow("flex")
            }} onMouseLeave={()=>{
              setShow("none")
            }} position="relative" borderRadius="md" overflow="hidden" w={["27%","29%","15%"]} h={["110px","150px","200px"]} bg="white" boxShadow="sm"  m="10px"  >
              <Box boxSize="full"  flexDirection="column" bgGradient='linear(to-t, black, transparent)' position="absolute" display={show} >
                <Text fontFamily="see" fontWeight="bolder" fontSize={["small"]} color="white" >{l1t} </Text>
                <Text noOfLines={[5,10,20]} mt={["5px","8px","25px"]} fontFamily="see" fontWeight="bolder" fontSize={["x-small"]} color="whiteAlpha.700">{l1pl} </Text>

              </Box>
              <Image src={l1p} />
            </Box>
            <Box onMouseOver={()=>{
              setShow("flex")
            }} onMouseLeave={()=>{
              setShow("none")
            }} position="relative" borderRadius="md" overflow="hidden" w={["27%","29%","15%"]} h={["110px","150px","200px"]} bg="white" boxShadow="sm"  m="10px"  >
              <Box boxSize="full"  flexDirection="column" bgGradient='linear(to-t, black, transparent)' position="absolute" display={show} >
                <Text fontFamily="see" fontWeight="bolder" fontSize={["small"]} color="white" >{l2t} </Text>
                <Text noOfLines={[5,10,20]} mt={["5px","8px","25px"]} fontFamily="see" fontWeight="bolder" fontSize={["x-small"]} color="whiteAlpha.700">{l2pl} </Text>

              </Box>
              <Image src={l2p} />
            </Box>
            <Box onMouseOver={()=>{
              setShow("flex")
            }} onMouseLeave={()=>{
              setShow("none")
            }} position="relative" borderRadius="md" overflow="hidden" w={["27%","29%","15%"]} h={["110px","150px","200px"]} bg="white" boxShadow="sm"  m="10px"  >
              <Box boxSize="full"  flexDirection="column" bgGradient='linear(to-t, black, transparent)' position="absolute" display={show} >
                <Text fontFamily="see" fontWeight="bolder" fontSize={["small"]} color="white" >{l3t} </Text>
                <Text noOfLines={[5,10,20]} mt={["5px","8px","25px"]} fontFamily="see" fontWeight="bolder" fontSize={["x-small"]} color="whiteAlpha.700">{l3pl} </Text>

              </Box>
              <Image src={l3p} />
            </Box>
            <Box onMouseOver={()=>{
              setShow("flex")
            }} onMouseLeave={()=>{
              setShow("none")
            }} position="relative" borderRadius="md" overflow="hidden" w={["27%","29%","15%"]} h={["110px","150px","200px"]} bg="white" boxShadow="sm"  m="10px"  >
              <Box boxSize="full"  flexDirection="column" bgGradient='linear(to-t, black, transparent)' position="absolute" display={show} >
                <Text fontFamily="see" fontWeight="bolder" fontSize={["small"]} color="white" >{l4t} </Text>
                <Text noOfLines={[5,10,20]} mt={["5px","8px","25px"]} fontFamily="see" fontWeight="bolder" fontSize={["x-small"]} color="whiteAlpha.700">{l4pl} </Text>

              </Box>
              <Image src={l4p} />
            </Box>
            <Box onMouseOver={()=>{
              setShow("flex")
            }} onMouseLeave={()=>{
              setShow("none")
            }} position="relative" borderRadius="md" overflow="hidden" w={["27%","29%","15%"]} h={["110px","150px","200px"]} bg="white" boxShadow="sm"  m="10px"  >
              <Box boxSize="full"  flexDirection="column" bgGradient='linear(to-t, black, transparent)' position="absolute" display={show} >
                <Text fontFamily="see" fontWeight="bolder" fontSize={["small"]} color="white" >{l5t} </Text>
                <Text noOfLines={[5,10,20]} mt={["5px","8px","25px"]} fontFamily="see" fontWeight="bolder" fontSize={["x-small"]} color="whiteAlpha.700">{l5pl} </Text>

              </Box>
              <Image src={l5p} />
            </Box>
            
            
            
         
            
           
            
          </Flex>
        </Box>
        <Divider orientation='horizontal'  />



        <Box width="100%"   position="relative" >
          <Text position="absolute" fontFamily="pop" fontSize={["sm","sm","lg"]} color="gray.500" >Action</Text>
          <Flex mt="5%" wrap="wrap" >
            <Box onMouseOver={()=>{
              setShow("flex")
            }} onMouseLeave={()=>{
              setShow("none")
            }} position="relative" borderRadius="md" overflow="hidden" w={["27%","29%","15%"]} h={["110px","150px","200px"]} bg="white" boxShadow="sm"  m="10px"  >
              <Box boxSize="full"  flexDirection="column" bgGradient='linear(to-t, black, transparent)' position="absolute" display={show} >
                <Text fontFamily="see" fontWeight="bolder" fontSize={["small"]} color="white" >{a5t} </Text>
                <Text noOfLines={[5,10,20]} mt={["5px","8px","25px"]} fontFamily="see" fontWeight="bolder" fontSize={["x-small"]} color="whiteAlpha.700">{a5pl} </Text>

              </Box>
              <Image src={a5p} />
            </Box>
            <Box onMouseOver={()=>{
              setShow("flex")
            }} onMouseLeave={()=>{
              setShow("none")
            }} position="relative" borderRadius="md" overflow="hidden" w={["27%","29%","15%"]} h={["110px","150px","200px"]} bg="white" boxShadow="sm"  m="10px"  >
              <Box boxSize="full"  flexDirection="column" bgGradient='linear(to-t, black, transparent)' position="absolute" display={show} >
                <Text fontFamily="see" fontWeight="bolder" fontSize={["small"]} color="white" >{a4t} </Text>
                <Text noOfLines={[5,10,20]} mt={["5px","8px","25px"]} fontFamily="see" fontWeight="bolder" fontSize={["x-small"]} color="whiteAlpha.700">{a4pl} </Text>

              </Box>
              <Image src={a4p} />
            </Box>
            <Box onMouseOver={()=>{
              setShow("flex")
            }} onMouseLeave={()=>{
              setShow("none")
            }} position="relative" borderRadius="md" overflow="hidden" w={["27%","29%","15%"]} h={["110px","150px","200px"]} bg="white" boxShadow="sm"  m="10px"  >
              <Box boxSize="full"  flexDirection="column" bgGradient='linear(to-t, black, transparent)' position="absolute" display={show} >
                <Text fontFamily="see" fontWeight="bolder" fontSize={["small"]} color="white" >{a3t} </Text>
                <Text noOfLines={[5,10,20]} mt={["5px","8px","25px"]} fontFamily="see" fontWeight="bolder" fontSize={["x-small"]} color="whiteAlpha.700">{a3pl} </Text>

              </Box>
              <Image src={a3p} />
            </Box>
            <Box onMouseOver={()=>{
              setShow("flex")
            }} onMouseLeave={()=>{
              setShow("none")
            }} position="relative" borderRadius="md" overflow="hidden" w={["27%","29%","15%"]} h={["110px","150px","200px"]} bg="white" boxShadow="sm"  m="10px"  >
              <Box boxSize="full"  flexDirection="column" bgGradient='linear(to-t, black, transparent)' position="absolute" display={show} >
                <Text fontFamily="see" fontWeight="bolder" fontSize={["small"]} color="white" >{a2t} </Text>
                <Text noOfLines={[5,10,20]} mt={["5px","8px","25px"]} fontFamily="see" fontWeight="bolder" fontSize={["x-small"]} color="whiteAlpha.700">{a2pl} </Text>

              </Box>
              <Image src={a2p} />
            </Box>
            <Box onMouseOver={()=>{
              setShow("flex")
            }} onMouseLeave={()=>{
              setShow("none")
            }} position="relative" borderRadius="md" overflow="hidden" w={["27%","29%","15%"]} h={["110px","150px","200px"]} bg="white" boxShadow="sm"  m="10px"  >
              <Box boxSize="full"  flexDirection="column" bgGradient='linear(to-t, black, transparent)' position="absolute" display={show} >
                <Text fontFamily="see" fontWeight="bolder" fontSize={["small"]} color="white" >{a1t} </Text>
                <Text noOfLines={[5,10,20]} mt={["5px","8px","25px"]} fontFamily="see" fontWeight="bolder" fontSize={["x-small"]} color="whiteAlpha.700">{a1pl} </Text>

              </Box>
              <Image src={a1p} />
            </Box>
            
            
            
         
            
           
            
          </Flex>
        </Box>
        <Divider orientation='horizontal'  />












        <Box width="100%"   position="relative" >
          <Text position="absolute" fontFamily="pop" fontSize={["sm","sm","lg"]} color="gray.500" >Series</Text>
          <Flex mt="5%" wrap="wrap" >
            <Box onMouseOver={()=>{
              setShow("flex")
            }} onMouseLeave={()=>{
              setShow("none")
            }} position="relative" borderRadius="md" overflow="hidden" w={["27%","29%","15%"]} h={["110px","150px","200px"]} bg="white" boxShadow="sm"  m="10px"  >
              <Box boxSize="full"  flexDirection="column" bgGradient='linear(to-t, black, transparent)' position="absolute" display={show} >
                <Text fontFamily="see" fontWeight="bolder" fontSize={["small"]} color="white" >{s1t} </Text>
                <Text noOfLines={[5,10,20]} mt={["5px","8px","25px"]} fontFamily="see" fontWeight="bolder" fontSize={["x-small"]} color="whiteAlpha.700">{s1pl} </Text>

              </Box>
              <Image src={s1p} />
            </Box>
            <Box onMouseOver={()=>{
              setShow("flex")
            }} onMouseLeave={()=>{
              setShow("none")
            }} position="relative" borderRadius="md" overflow="hidden" w={["27%","29%","15%"]} h={["110px","150px","200px"]} bg="white" boxShadow="sm"  m="10px"  >
              <Box boxSize="full"  flexDirection="column" bgGradient='linear(to-t, black, transparent)' position="absolute" display={show} >
                <Text fontFamily="see" fontWeight="bolder" fontSize={["small"]} color="white" >{s2t} </Text>
                <Text noOfLines={[5,10,20]} mt={["5px","8px","25px"]} fontFamily="see" fontWeight="bolder" fontSize={["x-small"]} color="whiteAlpha.700">{s2pl} </Text>

              </Box>
              <Image src={s2p} />
            </Box>
            <Box onMouseOver={()=>{
              setShow("flex")
            }} onMouseLeave={()=>{
              setShow("none")
            }} position="relative" borderRadius="md" overflow="hidden" w={["27%","29%","15%"]} h={["110px","150px","200px"]} bg="white" boxShadow="sm"  m="10px"  >
              <Box boxSize="full"  flexDirection="column" bgGradient='linear(to-t, black, transparent)' position="absolute" display={show} >
                <Text fontFamily="see" fontWeight="bolder" fontSize={["small"]} color="white" >{s3t} </Text>
                <Text noOfLines={[5,10,20]} mt={["5px","8px","25px"]} fontFamily="see" fontWeight="bolder" fontSize={["x-small"]} color="whiteAlpha.700">{s3pl} </Text>

              </Box>
              <Image src={s3p} />
            </Box>
            <Box onMouseOver={()=>{
              setShow("flex")
            }} onMouseLeave={()=>{
              setShow("none")
            }} position="relative" borderRadius="md" overflow="hidden" w={["27%","29%","15%"]} h={["110px","150px","200px"]} bg="white" boxShadow="sm"  m="10px"  >
              <Box boxSize="full"  flexDirection="column" bgGradient='linear(to-t, black, transparent)' position="absolute" display={show} >
                <Text fontFamily="see" fontWeight="bolder" fontSize={["small"]} color="white" >{s4t} </Text>
                <Text noOfLines={[5,10,20]} mt={["5px","8px","25px"]} fontFamily="see" fontWeight="bolder" fontSize={["x-small"]} color="whiteAlpha.700">{s4pl} </Text>

              </Box>
              <Image src={s4p} />
            </Box>
            <Box onMouseOver={()=>{
              setShow("flex")
            }} onMouseLeave={()=>{
              setShow("none")
            }} position="relative" borderRadius="md" overflow="hidden" w={["27%","29%","15%"]} h={["110px","150px","200px"]} bg="white" boxShadow="sm"  m="10px"  >
              <Box boxSize="full"  flexDirection="column" bgGradient='linear(to-t, black, transparent)' position="absolute" display={show} >
                <Text fontFamily="see" fontWeight="bolder" fontSize={["small"]} color="white" >{s5t} </Text>
                <Text noOfLines={[5,10,20]} mt={["5px","8px","25px"]} fontFamily="see" fontWeight="bolder" fontSize={["x-small"]} color="whiteAlpha.700">{s5pl} </Text>

              </Box>
              <Image src={s5p} />
            </Box>
            
            
            
         
            
           
            
          </Flex>
        </Box>
        
      </VStack>
    </Box>
      
    </div> : <div  className="App">
    <Box  color='#db0000' letterSpacing='wide' fontSize={['2xl','4xl','5xl']} textAlign={['center',"center",'left']}  bg="black" fontFamily="me" >
  <Text ml={["0px","0px",'20']} >DAMIS</Text>
</Box>
<Box padding='6' boxShadow='lg' bg='blackAlpha.900' h={["300px","400px","500px"]}>
  <Skeleton startColor='gray.900' endColor='gray.600' height='70px' w="50%" />
  <SkeletonText mt='4' noOfLines={[5,5,7]} spacing={['5','5','7']} startColor='gray.900' endColor='gray.600' w="90%" />
</Box>
<Box  ml="5%" >
<SkeletonText mt='10' mb="30px" noOfLines={2} spacing='2' startColor='gray.600' endColor='gray.300' w="20%" />
<HStack spacing='24px'>
<Skeleton startColor='gray.600' endColor='gray.300' height='70px' w="50%" />
<Skeleton startColor='gray.600' endColor='gray.300' height='70px' w="50%" />
<Skeleton startColor='gray.600' endColor='gray.300' height='70px' w="50%" />

</HStack>
<SkeletonText mt='10' mb="30px" noOfLines={2} spacing='2' startColor='gray.600' endColor='gray.300' w="20%" />
<HStack spacing='24px'>
<Skeleton startColor='gray.600' endColor='gray.300' height='70px' w="50%" />
<Skeleton startColor='gray.600' endColor='gray.300' height='70px' w="50%" />
<Skeleton startColor='gray.600' endColor='gray.300' height='70px' w="50%" />

</HStack>
</Box>

    </div>
  )
}

export default App;
