import axios from "axios";
import { useState } from "react";

const useApi=()=>{

const [response,setResponse]=useState(null)
const [loading,setLoading]=useState(null)
const [error,setError]=useState(null)


const apicaller=async({method,url,data,config})=>{
setLoading(true)
setError(null)
try {
    const res=await  axios({method,url,data,config})

    if(!res.data){
        setError(res.error.message||'Api calling falied ')
    }

    if(res.data){
        setResponse(res.data)
    }

} catch (error) {
    console.log('error',error)
}finally{
    setLoading(false)
}
}

return {response,loading,error,apicaller}


}

export{useApi}