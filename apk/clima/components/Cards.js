import * as React from "react";
import {
  Text,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import{styles} from "./CardsStyle"

export default function Cards({ image, txt, temp }) {

  const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={image}
        />
        <Text style={styles.font}>{txt}</Text>
        <Text style={styles.fontNumber}>{temp}</Text>
      </View>
  );
}
