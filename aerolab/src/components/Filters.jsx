import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
const Filter = ["Most recent", "Lowest price", "Highest price"]

export default function Filters(props) {
    const {active, onChange} = props
  return (
    <div>
        <Stack alignItems="center" direction="row" spacing={6}>
            <Text color="gray.500">Sort by: </Text>
            <Stack direction="row" spacing={4}>
                {Filter.map((filter)=> 
                    <Box key={filter} backgroundColor={filter === active ? "orange.400" : "gray.100"} 
                    borderRadius={9999}
                    color={filter === active ? "white" : "gray.600"}
                    cursor="pointer"
                    fontWeight="500"
                    paddingX={6}
                    paddingY={2}
                    onClick={()=> onChange(filter)}>
                    {filter}</Box>)}
            </Stack>
        </Stack>
    </div>
  )
}
