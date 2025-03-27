import axios from "axios";
import { useState } from "react";

const useApi = () => {
    const [response, setresponse] = useState(null)
    const [loading, setloading] = useState(null)
    const [error, setError] = useState(false)

        const apicaller=async({method,url,data,config})=>{

        setError(null)
        setloading(true)
        try {
            const res = await axios({ method, url, data, ...config })

            if (!res.data) {
                setError(res.error.message || 'Api calling falied ') 
            }
            if(res.data){
                setresponse(res.data)
            }
        } catch (error) {
            console.log('error', error)
        } finally {
            setloading(false)
        }
    }


    return ({ response, loading, error, apicaller })
}

export { useApi }