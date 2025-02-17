import { useEffect } from "react"
import { useState } from "react"
import { instance } from "../hooks/instance"


export const getRequest = (API, refresh) => {
    const [data, setData] = useState({})

    useEffect(()=> {
        instance().get(API).then(res => setData(res.data))
    },[refresh])

    return data
}