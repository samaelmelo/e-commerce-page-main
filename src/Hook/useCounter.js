import React,{useState,useContext,createContext} from 'react'

const contextCouter = createContext()


export const CounterProvider = ({children}) => {

  const [amount, setAmount ] = useState(0)


  return (
    <contextCouter.Provider value={{amount, setAmount}}>
      {children}
    </contextCouter.Provider>
  )
}

export const useCounter = () => {
  const context = useContext(contextCouter)

  const {amount, setAmount} = context

  return { amount, setAmount }
}


