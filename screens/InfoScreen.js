import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity  } from "react-native";
import vehicles from '../assets/dataset/vehicles.json';
import Header from '../components/Header';

const image_v_1 = require("../assets/vehicles/v-1.png");
const image_v_2 = require("../assets/vehicles/v-2.png");
const image_v_3 = require("../assets/vehicles/v-3.png");
const image_v_4 = require("../assets/vehicles/v-4.png");

const InfoScreen = ({ route }) => {
  const { vehicle } = route.params;

  const getImage = (id) => {
    if (id === 1) return image_v_1;
    if (id === 2) return image_v_2;
    if (id === 3) return image_v_3;
    if (id === 4) return image_v_4;
  };

  return (
    <View style={styles.container}>
       <Header />
      <View style={[styles.imageSection, { marginTop: 100 }]}>
        <Image
          source={getImage(vehicle.id)}
          resizeMode="contain"
          style={styles.vehicleImage}
        />
      </View>

      <View style={styles.headSection}>
        <View style={styles.topTextArea}>
          <Text style={styles.makemodelText}>{vehicle.make} {vehicle.model}</Text>
          <Text style={[styles.price, styles.amount]}>${vehicle.price_per_day}/day</Text>
        </View>
        <Text style={styles.typetranText}>{vehicle.type}-{vehicle.transmission}</Text>
      </View>

      <Text style={styles.descriptionText}>{vehicle.description}</Text>

      <Text style={styles.propertiesText}>Properties:</Text>
      <View style={styles.propertiesArea}>
        <View style={styles.level}>
          <Text style={styles.propertyText}>Level:</Text>
          <Text style={styles.valueText}>{vehicle.properties.level}</Text>
        </View>
        <View>
          <Text style={styles.propertyText}>Fuel:</Text>
          <Text style={styles.valueText}>{vehicle.properties.fuel}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.rentButton}>
        <Text style={styles.rentButtonText}>Rent Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  imageSection: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  vehicleImage: {
    width: 300,
    height: 300,
  },
  headSection: {},
  topTextArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  makemodelText: {
    fontSize: 20,
    fontWeight: "500",
  },
  price: {
    fontWeight: "400",
  },
  amount: {
    fontWeight: "bold",
  },
  typetranText: {
    marginTop: 5,
    color: "#696969",
    fontWeight: "600",
    fontSize: 12,
  },
  descriptionText: {
    marginTop: 20,
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 18,
    color: "#696969",
    fontWeight: "500",
  },
  propertiesText: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: "500",
  },
  propertiesArea: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  level: {
    marginRight: 30,
  },
  propertyText: {
    fontSize: 12,
    color: "#696969",
  },
  valueText: {
    fontSize: 12,
    color: "black",
  },
  rentButton: {
    marginTop: 50,
    height: 40,
    alignSelf: "center",
    width: 250,
    backgroundColor: "black",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  rentButtonText: {
    color: "white",
    fontWeight: "500",
  },
});

export default InfoScreen;
