import * as React from "react";
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import Logo from "../assets/logo.png";
import {styles} from "./LandingStyle"

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.h1} The Weather teller />
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        title="home way"
      >
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.h2}>Let predict the Weather !</Text>
      </TouchableOpacity>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
