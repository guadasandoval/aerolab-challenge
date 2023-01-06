import React from 'react'
import { Box, Stack, Text, Image, Center, Divider, Flex, Button } from '@chakra-ui/react'
import coin from "../assets/static/icons/coin.svg"
import { useContext, useEffect, useState } from 'react'
import Contexto from '../context/Contexto'

export default function Item(props) {
    const {name, _id, cost, img, category, isselected} = props
    const {user, getUser, redeem} = useContext(Contexto)
    const handleRedeem = ()=>{
    redeem(cost)
    }
    useEffect(()=>{
        getUser()
    }, [])
    const canBuy = cost <= user.points
  return (
    <div>
        <Box backgroundColor="white"
        borderRadius="sm"
        boxShadow="md"
        padding={6}
        cursor = {canBuy ? "pointer" : "not-allowed"}
        opacity = {canBuy ? 1 : 0.5}
        position="relative" {...props}>
        <Stack spacing={3}>
            <Stack alignItems="center"
            backgroundColor="white" 
            borderRadius={9999} 
            borderColor = {canBuy ? "orange" : "blue.300"}
            borderWidth={1} 
            color={canBuy ? "orange.500" : "gray.500"}
            direction="row" 
            fontSize="sm" 
            fontWeight="500" 
            justifyContent="center"
            paddingX={3} 
            paddingY={1} 
            position="absolute" 
            right={6} 
            spacing={2}
            top={6}>
            <Text>{canBuy ? cost : `Missing ${user.points - cost} points`}</Text>
              <Image height={4} width={4} src={coin}></Image>
        </Stack>
            <Center>
                <Image objectFit="contain" src={img.url} width={64}></Image>
            </Center>
            <Divider></Divider>
          <Stack alignItems="flex-start" spacing={0}>
            <Text color="gray.500" fontSize="sm">{category}</Text>
            <Text fontWeight={500}>{name}</Text>
          </Stack>
        </Stack>
        {isselected && (
        <Flex 
        alignItems="center" 
        borderRadius="sm"
        height="100%"
        justifyContent="center"
        left={0}
        position="absolute"
        top={0}
        width="100%"
        zIndex={2}>
          <Box backgroundColor={canBuy ? "orange.500" : "gray.500"} 
          borderRadius="sm" 
          height="100%" 
          left={0} 
          opacity={0.9} 
          position="absolute" 
          top={0} 
          width="100%"
          />
            <Stack alignItems="center" color="white" fontSize="2xl" fontWeight="bold" spacing={6} zIndex={3}>
              <Stack spacing={0}>
                <Text>{user.points}</Text>
                <Text borderBottomColor="white" borderBottomWidth={2}>- {cost}</Text>
                <Text>{user.points - cost}</Text>
              </Stack>
              {canBuy && (<Button color="orange" onClick={handleRedeem}>Redeem now</Button>)}
            </Stack>
          </Flex>
          )}
        </Box>
    </div>
  )
}
