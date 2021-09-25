import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";


const AuthContext = createContext()

export function useAuth(){
  return useContext(AuthContext)
}


export function AuthProvider({children}){
  const [isLoading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)


  useEffect(()=>{
    const getToken = async()=>{
      const token = await AsyncStorage.getItem('emailId');
      // console.log(token)
      // await AsyncStorage.setItem('emailId', 'v')
      // setTimeout(1000, ()=>{
      //   setLoading(false)
      // })
      setLoading(false)

      if(token!=null)
        setAuthenticated(true)
    }

    getToken()
  },[])

  const logout = async()=>{
    await AsyncStorage.removeItem('emailId');
    setAuthenticated(false)
  }

  const login = async(emailId)=>{
    await AsyncStorage.setItem('emailId', emailId);
    setAuthenticated(true)
    // setLoading
  }

  const value={
    authenticated,
    login,
    logout,
    isLoading

  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}