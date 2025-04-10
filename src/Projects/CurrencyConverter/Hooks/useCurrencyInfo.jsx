// custom hook
// Hooks is a function 
// function Hello(){     // this is also called hooks and these custom hook can use inbuild hooks useState
//  return []               
// }

import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    
    const [data,setData] = useState({})

    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`).then((res) => (res.json())).then((res) => setData(res[currency])).catch((error)=>(console.log(error)));
        console.log(data)        
    },[currency])

    useEffect(()=>{
        console.log("currency data ",data);
        
    },[data])
    
    return data;
}
export default useCurrencyInfo