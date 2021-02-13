import React from "react";
import { Dimensions } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


// ROUTES
import Reviews from "./src/Routes/Reviews/index";
import Leads from "./src/Routes/Leads/index";
import Galleries from "./src/Routes/Galleries/index";
import Profile from "./src/Routes/Profile/index";

//Width Height
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
const tabBarWidth = Width;
// NAVIGATIONS
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Reviews"
      shifting={false}
      // shifting={true}
      labeled={true}
      sceneAnimationEnabled={true}
       activeColor="#64b5f6"
        inactiveColor="#000"
      barStyle={{ backgroundColor: '#ffff' }}
      tabBarOptions={{
        activeTintColor: "yellow",
        inactiveTintColor: "#000000",
        style: {
          //backgroundColor: "",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        },

        indicatorStyle: {
          width: Width * 0.15,
         marginLeft: Width * 0.09,
          backgroundColor: "yellow",
          position: "absolute",
          padding: 1,
        },
        tabStyle: {
          justifyContent: "center",
          width: tabBarWidth / 4,
        },
        labelStyle: {
          marginTop: 1,
          
        },
      }}
    >
      <Tab.Screen name="Reviews" component={Reviews} />
      <Tab.Screen name="Leads" component={Leads} />
      <Tab.Screen name="Galleries" component={Galleries} />
      <Tab.Screen name="Profile" component={Profile} />
     
    </Tab.Navigator>
  );
}
