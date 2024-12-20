import React, { createContext, useEffect, useState } from 'react' // Added useState import
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'


export const AuthContext = createContext()


const AuthProvider = ({children}) => {
 

  const [userData, setuserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const {employees} = getLocalStorage()
    setuserData(employees)
    
  }, [])
  
  return (
    
      <AuthContext.Provider value={[userData,setuserData]}>
        {children}
      </AuthContext.Provider>
    
  )
}

export default AuthProvider;