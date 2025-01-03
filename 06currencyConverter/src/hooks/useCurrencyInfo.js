import {useEffect, useState} from "react"

function useCurrencyInfo(currency){// provide my data to call API
    const [data, setData] = useState({}) // as our data is object
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])

console.log(data); //lets see data and type of this
return data
}

export default useCurrencyInfo;