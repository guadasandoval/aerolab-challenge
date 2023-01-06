import React from 'react'
import { Text } from '@chakra-ui/react'

export default function Count(props) {
    const {current, total} = props
  return (
    <>
    <Text color="gray.500" fontWeight="bold">
        {current} of {total} products
    </Text>
    </>
  )
}
