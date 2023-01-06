import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Center, Container, Flex } from '@chakra-ui/react'


export default function Layout(props) {
    const {children} = props
  return (
    <>
    <Flex direction="column" flex={1} backgroundColor="gray.100">
        <Header>
            <Center paddingY={4}>
                <Container maxWidth="6xl">
                    {children}
                </Container>
            </Center>
        </Header> 
        <Container maxWidth="6xl">
                    {children}
                </Container>
    </Flex>
    <Footer></Footer>
    </>
  )
}
