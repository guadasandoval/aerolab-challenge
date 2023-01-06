import axios from 'axios'
import React from 'react'
import { useReducer } from 'react'
import Contexto from './Contexto'
import Reducer from './Reducer'


export default function UseContext(props) {
    const {children} = props
    const API = 'https://coding-challenge-api.aerolab.co/products'
    const API_USER = 'https://coding-challenge-api.aerolab.co/user/me'
    const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzljYzZlMjU2NDAxYTAwMjEwZjdjNDkiLCJpYXQiOjE2NzEyMTg5MTR9.ssV6fQLC-c06_69mkU0jIZ35NY6O66ELHuy_loVLHQ4'
    const initState = {
        products: [],
        user: {},
    }
    const [state, dispatch] = useReducer(Reducer, initState)

    const getProducts = async ()=>{
        const res = await axios.get(API, {headers:{
            'Authorization': `Bearer ${TOKEN}`
        }})
        dispatch({type:'GET_PRODUCTS', payload: res.data})
    }
    const getUser = async ()=>{
        const res = await axios.get(API_USER, {headers:{
            'Authorization': `Bearer ${TOKEN}`
        }})
        dispatch({type:'GET_USER', payload: res.data})
    }

    const redeem = (cost)=>{
        dispatch({ type: "REDEEM_NOW", payload: cost });
      }

  
  return (
    <>
    <Contexto.Provider value={{products: state.products, user: state.user, getProducts, getUser, redeem}}>
        {children}
    </Contexto.Provider>
    </>
  )
}
