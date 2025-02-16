import React, { createContext, useState } from "react"


export const Context = createContext()

export const GlobalContext = ({children}) => {
    const [openDrawer, setOpenDrawer] = useState(false)

   return <Context.Provider value={{openDrawer, setOpenDrawer}}>{children}</Context.Provider>
}