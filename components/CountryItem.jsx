import { View, Text, Image, Linking } from "react-native";
import React from "react";
import { styles } from "../styles/countryItem";

export const CountryItem = ({ country }) => {
  const firstLanguage = country;
  // console.log(firstLanguage)

  const handlePress = async () => {
    const url = country.maps.googleMaps;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`No se puede abrir el enlace: ${url}`);
    }
  };

  const handleCurrensy = () => {
    if (country.currencies) {
      const currencyCode = Object.keys(country.currencies)[0];
      const currency = country.currencies && country.currencies[currencyCode];
      const currencyName = currency ? currency.name : "N/A";
      return currencyName;
    } else {
      return "N/A";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.flagColumn}>
        <Image style={styles.img} source={{ uri: country.flags.png }} />
        <Text style={styles.textPrinBold}>
          Name: <Text style={styles.textPrin}>{country.name.common}</Text>
        </Text>
        <Text style={styles.textPrinBold}>
          Languages:{" "}
          <Text style={styles.textPrin}>
            {country.languages ? Object.values(country.languages)[0] : "N/A"}
          </Text>
        </Text>
        <Text style={styles.link} onPress={handlePress}>
          Google Maps
        </Text>
      </View>
      <View style={styles.restColumn}>
        <Text style={styles.textPrinSe}>
          Capital:{" "}
          <Text style={styles.textSecond}>
            {Array.isArray(country.capital) && country.capital.length > 0
              ? country.capital[0]
              : "N/A"}
          </Text>
        </Text>
        <Text style={styles.textPrinSe}>
          Region: <Text style={styles.textSecond}>{country.region}</Text>
        </Text>
        <Text style={styles.textPrinSe}>
          Currency: <Text style={styles.textSecond}>{handleCurrensy()}</Text>
        </Text>
        <Text style={styles.textPrinSe}>
          Population:{" "}
          <Text style={styles.textSecond}>{country.population}</Text>
        </Text>
        <Text style={styles.textPrinSe}>
          Time Zone:{" "}
          <Text style={styles.textSecond}>{country.timezones[0]}</Text>
        </Text>
        <Text style={styles.textPrinSe}>
          Start Of Week:{" "}
          <Text style={styles.textSecond}>{country.startOfWeek}</Text>
        </Text>
      </View>
    </View>
  );
};
