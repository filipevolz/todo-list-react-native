import React from 'react';
import { Home } from "./src/screens/Home";
import { StatusBar } from "react-native";

export default function App(){
  return(
   <>
    <StatusBar
      barStyle="light-content"
      backgroundColor="#0D0D0D"
      translucent
    />
    <Home />
   </>
  )
}