import React, { useContext } from 'react'
import { Context } from '../context/Context'

const getContext = () => {
    const {openDrawer, setOpenDrawer} = useContext(Context)
  return  {openDrawer, setOpenDrawer}
}

export default getContext
