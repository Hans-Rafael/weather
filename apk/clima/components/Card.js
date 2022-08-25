import * as React from "react";
import { Text, View, } from "react-native";
import { styles } from "./CardStyle";

export default function Card({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>This is </Text>
      <Text style={styles.font}>{route.params.name}</Text>
      <Text>Temperature: {route.params.data.temp}°C</Text>
      <Text> Real feels: {route.params.data.feels} ºC</Text>
      <Text>Max: {route.params.data.max} ºC</Text>
      <Text> Min: {route.params.data.min} ºC</Text>
      <Text> Wind: {route.params.data.wind} km/h</Text>
      <Text> Weather: {route.params.data.weather} </Text>
      <Text> Clouds: {route.params.data.clouds} %</Text>
      <Text> Latitud: {route.params.data.lat} º</Text>
      <Text> Longitud: {route.params.data.long} º</Text>
      <Text style={styles.font}>
        Today will be : 
      </Text>
      <Text style={styles.font}>{route.params.data.description}</Text>
    </View>
  );
}
