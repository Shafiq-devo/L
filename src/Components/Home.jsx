import React, { useEffect } from 'react'
import { useApi } from '../Hooks/useApi';

export const Home = () => {
const {response,loading,error,apicaller}=useApi()

useEffect(()=>{
  apicaller({method:'GET',url:'https://jsonplaceholder.typicode.com/todos'})
},[])


console.log('name',response)
const data=response ||[]

if(loading) return <h1>loading</h1>
if(error)  return <p>eoooo</p>




  return (
    <div>
      {data.map((res)=>{
        return(
            <h1>{res.title}</h1>
        )
      })}
    </div>
  )
}

export default Home