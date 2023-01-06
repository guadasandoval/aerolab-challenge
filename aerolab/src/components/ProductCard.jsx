import { Grid } from '@chakra-ui/react'
import React, { useState } from 'react'
import Item from './Item'

export default function ProductCard(props) {
  const {products} = props
  const [selected, setSelected] = useState(null)
 
  return (
    <>
    <Grid gap={6} templateColumns="repeat(auto-fill, minmax(256px, 1fr))" width="100%" >
      {products.map((product)=>(
      <Item key={product._id} onClick={()=>setSelected(product._id)} {...product} isselected={selected === product._id}></Item>)
      )}
    </Grid>
    </>
  )
}
