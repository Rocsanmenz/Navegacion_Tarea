import React from "react";
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';

import Home from "./src/Home"
import Noma from "./src/noma";
import Casa from "./src/casa";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Inicio" 
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Probando" 
        component={Noma} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calculator" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Cancion" 
        component={Casa} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Naveg() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
