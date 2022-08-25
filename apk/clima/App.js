import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Card from "./components/Card";


const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{ 
            headerStyle: {
              backgroundColor: '#13245F',
            },
            headerTintColor: '#F3D403',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}   />
        <Stack.Screen name="Detail" component={Cards} />
        <Stack.Screen name="Info" component={Card} options={ ({ route }) => ({ title: route.params.name })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//
