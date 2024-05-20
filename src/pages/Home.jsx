import React, { useEffect } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Course from '../pages/Course'
import { useState } from 'react'
import UseContext from '../utils/UseContext'
import { Provider } from 'react-redux';
import AppStore from '../utils/AppStore'
export default function Home() {
  const [userName,setUserName]= useState();
  useEffect(()=>{
   const data={
    name :"Arpita"
   }
   setUserName(data.name)
  },[])
  return (
   <Provider store={AppStore}>
    <UseContext.Provider value={{loggedInUser:userName,setUserName}} >
     <>

    <Header/>
    <Course/>
    <Footer/>
    </>
   </UseContext.Provider>
   </Provider>
  )
}
