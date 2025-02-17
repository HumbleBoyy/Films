import { useEffect } from "react"
import { useState } from "react"
import { instance } from "../hooks/instance"


export const getRequest = (API, refresh, setIsLoading) => {
    const [data, setData] = useState({})

    useEffect(()=> {
        instance().get(API).then(res => {
            setData(res.data)
            setIsLoading(false)
        })
    },[refresh])

    return data
}