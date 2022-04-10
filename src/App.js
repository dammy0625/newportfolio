import { useEffect,useState } from 'react';
import './App.css';
import { Box, Center } from '@chakra-ui/layout';
import { Badge,Text,Image,Grid, GridItem,Divider,Skeleton, SkeletonCircle, SkeletonText} from '@chakra-ui/react';
import axios from "axios"

function App() {
const [count, setCount ] = useState("");
const [ploth, setPloth ] = useState("");
const [rel, setRel ] = useState("");
const [actors, setActors ] = useState("");



useEffect(()=>{
axios.get('https://omdbapi.com/?apikey=6d3966ee&i=tt4998632&plot=full').then((res)=>{
  const data = res.data.Poster
  let plot = res.data.Plot
  let released = res.data.Released
  let actor = res.data.Actors
  
  data ? setCount(data): setCount("")
  plot ? setPloth(plot): setPloth("")
  released ? setRel(released): setRel("")
  actor ? setActors(actor): setActors("")
  console.log(res.data)
})



}
  
)

 
  return (
    count ? 
    <div className="App">
      <Box  color='#db0000' letterSpacing='wide' fontSize={['2xl','4xl','5xl']} textAlign={['center',"center",'left']}  bg="black" fontFamily="me" >
  <Text ml={["0px","0px",'20']} >DAMIS</Text>
</Box>
<Box position="relative" boxSize='full' bg="blackAlpha.300"  h={["300px","400px","500px"]} >
<Image
    boxSize='full'
    objectFit={["fill","fill",""]}
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
  <GridItem colSpan={[2,2,1]} rowSpan={2} color="whiteAlpha.600" fontSize={["x-small","medium","xl"]} mt={["0px","0px","40px"]} fontFamily="see"  >
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

      
    </div> : <div  className="App">
    <Box  color='#db0000' letterSpacing='wide' fontSize={['2xl','4xl','5xl']} textAlign={['center',"center",'left']}  bg="black" fontFamily="me" >
  <Text ml={["0px","0px",'20']} >DAMIS</Text>
</Box>
<Box padding='6' boxShadow='lg' bg='blackAlpha.900' h={["300px","400px","500px"]}>
  <Skeleton startColor='gray.900' endColor='gray.600' height='70px' w="50%" />
  <SkeletonText mt='4' noOfLines={7} spacing='7' startColor='gray.900' endColor='gray.600' w="90%" />
</Box>
    </div>
  )
}

export default App;
