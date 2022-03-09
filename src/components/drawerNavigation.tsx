import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import MainStackNavigator from "./stackNavigator";
import About from "../screens/AboutScreen";
const Drawer = createDrawerNavigator()
export default function DrawerNavigator(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Recipe App" component={MainStackNavigator}/>
            <Drawer.Screen name="About Me" component={About}/>
        </Drawer.Navigator>
    )
}