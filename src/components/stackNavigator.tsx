import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/homeScreen";
import RecipeDetail from "../screens/recipeDetailScreen";


const Stack = createStackNavigator()
export default function MainStackNavigator(){
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{
                  headerShown: false
                }}/>
            <Stack.Screen name="Recipe" component={RecipeDetail}/>
        </Stack.Navigator>
    )
}