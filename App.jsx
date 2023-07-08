import { useEffect, useState } from "react";
// import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, StatusBar } from "react-native";
import { CountryItem } from "./components/CountryItem";
import { styles } from "./styles/style";

export default function App() {
  const [dataCountries, setDataCountries] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setDataCountries(data);
    } catch (error) {
      console.log("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Hello world, this is my first App 😎</Text>
      <FlatList
        data={dataCountries}
        renderItem={({ item }) => {
          return <CountryItem country={item} />;
        }}
      />
    </View>
  );
}
