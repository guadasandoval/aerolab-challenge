import React from 'react'
import { Box, Stack, Text, Container } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box backgroundColor="white" boxShadow="md">
        <Container maxWidth="6xl" >
            <Stack alignItems="center" direction="row" justifyContent="center" paddingY={3} color='gray.500'>
                <Text>Aerolab Challenge - Guadalupe Sandoval</Text>
            </Stack>
        </Container>
    </Box>
  )
}
