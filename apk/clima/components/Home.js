import * as React from "react";
import {
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Cards from "./Cards";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { apiKey } from '@env';

export default function Home() {
  const navigation = useNavigation();
  const [cities, setCities] = useState([]);
  const [Search, setSearch] = useState("");

  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            long: recurso.coord.lon,
            lat: recurso.coord.lat,
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            feels: recurso.main.feels_like,
            name: recurso.name,
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            weather: recurso.weather[0].main,
            description: recurso.weather[0].description,
            clouds: recurso.clouds.all,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  if (!cities) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  } else {
    console.log("Ciudad: ######", cities);

    const data = cities[0]; //objeto
    return (
      <View>
        <Searchbar
          placeholder="Search the city..."
          onChangeText={(value) => setSearch(value)} //fix it!
          value={Search}
          icon="thermometer"
          onIconPress={() => {
            onSearch(Search), setSearch("");
          }}
          onSubmitEditing={(e) => {
            e.preventDefault(), onSearch(Search) , setSearch("");
          }}
        />
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Info", { name: data.name, data: data })
            }
          >
            <FlatList
              data={cities}
              keyExtractor={(item, index) => item.id + index}
              renderItem={({ item }) => (
                <Cards
                  image={{
                    uri:
                      "https://openweathermap.org/img/wn/" +
                      item.img +
                      "@2x.png",
                  }}
                  txt={item.name}
                  temp={item.feels}
                />
              )}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
