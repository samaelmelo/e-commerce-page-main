import React,{useState,useContext,createContext} from 'react'
import {Images} from "../services/datas"
const contextCouter = createContext()

export const CounterProvider = ({children}) => {
  const [imageMain, setImageMain] = useState(Images[0].img)

    const [amount, setAmount ] = useState(0)
    const [value, setValue] = useState(125)
    const [total, setTotal] = useState(125)
  const [MinusOrPlus, setMinusOrPlus] = useState(0)


  return (
    <contextCouter.Provider value={{amount, setAmount,value, setValue, total, setTotal,MinusOrPlus, setMinusOrPlus, imageMain, setImageMain}}>
      {children}
    </contextCouter.Provider>
  )
}

export const useCounter = () => {
  const context = useContext(contextCouter)

  const {amount, setAmount, value, setValue, total, setTotal,MinusOrPlus, setMinusOrPlus, imageMain, setImageMain} = context

  return { amount, setAmount, value, setValue, total, setTotal,MinusOrPlus, setMinusOrPlus, imageMain, setImageMain }
}


