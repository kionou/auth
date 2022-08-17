import { useState,useEffect } from "react";
const Usefecht = (url) => {

    const [data,setData]= useState(null);
    const [isloading,setIsloading]=useState(true);
    const[error,setError]=useState(null)
  


    useEffect(()=>{
        setTimeout(() => {
            fetch(url)
            .then((res)=> {
                if (!res.ok) {
                  throw Error ('une erreur est suvenu...');
                }
                return res.json()
            })
            .then((data)=>{
               
            setIsloading(false)
              setData(data)
              setError(null)
            })
            .catch(err => {
               console.log(err.message);
               setError(err.message)
               setIsloading(false)
            })
        }, 2000);
   
    },[url])
    return {data,isloading,error}
 
}
 
export default Usefecht;