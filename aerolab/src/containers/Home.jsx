import React, { useMemo } from 'react'
import { useEffect, useContext, useState } from 'react'
import Contexto from '../context/Contexto'
import { Flex, Heading, Stack, Divider} from '@chakra-ui/react'
import banner from "../assets/static/header-x2.png"
import ProductCard from '../components/ProductCard'
import Count from '../components/Count'
import Filters from '../components/Filters'

export default function Home() {
    const {products, getProducts} = useContext(Contexto)
    const [filter, setFilter] = useState("Most recent")
    const filteredProducts = useMemo(()=>{
        switch(filter){
            case "Highest price": {
                return [...products].sort((a,b) => b.cost - a.cost)
            }

            case "Lowest price": {
                return [...products].sort((a, b) => a.cost - b.cost)
            }
            case "Most recent":
                default:{
                    return products
                }
        }
    }, [filter, products])
    useEffect(()=>{
        getProducts()
    }, [])
  return (
    <>
   
        <Stack flex={1} spacing={6}>
        <Flex alignItems="flex-end" backgroundImage={`url(${banner})`} backgroundSize="cover"
        borderRadius="md" justifyContent="flex-start" minHeight={80} padding={6}>
            <Heading color='white' fontSize="4xl">Electronics</Heading>
        </Flex>
        {/* filtros */}
        <Stack alignItems="flex-start" spacing={6}>
            <Stack alignItems="center" as="nav" direction="row" flex={1} spacing={6} width="100%" divider={<Divider borderColor="gray.100" height={12} orientation="vertical"/>}>
            <Count current={filteredProducts.length} total={products.length}></Count>
            <Filters active={filter} onChange={setFilter}></Filters>
            </Stack>

        </Stack>
        <ProductCard products={filteredProducts}></ProductCard>
    </Stack>

    </>
  )
}
