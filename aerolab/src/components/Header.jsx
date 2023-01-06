import React from 'react'
import { Box, Container, Stack, Image, Text} from '@chakra-ui/react'
import logo from "../assets/static/aerolab-logo.svg"
import coin from "../assets/static/icons/coin.svg"
import { useContext, useEffect, useState } from 'react'
import Contexto from '../context/Contexto'

export default function Header(props) {
    const {user, getUser} = useContext(Contexto)
 
    useEffect(()=>{
        getUser()
    }, [])

    const [points, setPoints] = useState(user.points);
    const handlePoints = ()=>{
        setPoints(user.points = points + 1000)
    };

  
  return (
    <>
       <Box backgroundColor="white" boxShadow="md" >
        <Container maxWidth="6xl" > 
            <Stack alignItems="center" as="header" direction="row" justifyContent="space-between" paddingY={3}>
                <Image height={8} width={8} src={logo}/>
            {/* aca va data del usuario */}
            <Stack alignItems="center" color="gray.500" direction="row" spacing={3}>
                <Text>{user.name}</Text>
                <Stack alignItems="center" 
                backgroundColor="gray.100" 
                borderRadius={9999}
                cursor="pointer" 
                paddingY={2} 
                paddingX={3} 
                direction="row"
                onClick={handlePoints}>
                    <Text fontWeight="500">{user.points}</Text>
                    <Image height={6} width={6} src={coin}></Image>
                </Stack>
            </Stack>
            </Stack>
        </Container>
       </Box>
    </>
  )
}
