import React, { useState } from "react";
import { ScrollView, TextInput, TouchableOpacity, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import InfoScreen from "./InfoScreen";
import { Searchbar } from 'react-native-paper';

import Header from '../components/Header';

const image_v_1 = require("../assets/vehicles/v-1.png");
const image_v_2 = require("../assets/vehicles/v-2.png");
const image_v_3 = require("../assets/vehicles/v-3.png");
const image_v_4 = require("../assets/vehicles/v-4.png");

import data from '../assets/dataset/vehicles.json';

const Stack = createStackNavigator();

const CartScreen = ({ navigation }) => {

  const [selectedVehicles, setSelectedVehicles] = useState(data.vehicles);
  const [filteredVehicles, setFilteredVehicles] = useState(data.vehicles);

  const getImage = (id) => {
    if (id === 1) return image_v_1;
    if (id === 2) return image_v_2;
    if (id === 3) return image_v_3;
    if (id === 4) return image_v_4;
  };

  const searchVehicles = (keyword) => {
    const lowercasedKeyword = keyword.toLowerCase();
    const results = data.vehicles.filter((vehicle) => {
      return vehicle.make.toLowerCase().includes(lowercasedKeyword);
    });
    setFilteredVehicles(results);
  };

  return (
    <SafeAreaView style={styles.safeArea}>

        <Header />
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.headerSection}>
      
        </View>

        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Rent a Car</Text>
        </View>

{/* Search Section */}
<View style={styles.searchSection}>
  <Searchbar
    placeholder="Search a Car"
    onChangeText={(text) => searchVehicles(text)}
    style={styles.searchBar}
    inputStyle={styles.searchInput}
  />
</View>





        {/* Types Section */}
        <View style={styles.typesSection}>
          <Text style={styles.typesTextActive}>All</Text>
          <Text style={styles.typesText}>Suu</Text>
          <Text style={styles.typesText}>Sen</Text>
          <Text style={styles.typesText}>Mmm</Text>
          <Text style={styles.typesText}>Hhh</Text>
        </View>

        {/* List Section */}
        <View style={styles.listSection}>
          <Text style={styles.headText}>Most Rented</Text>

          <ScrollView style={styles.elementPallet}>
            {filteredVehicles.map((vehicle) => (
              <TouchableOpacity
                style={styles.element}
                key={vehicle.id}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('InfoScreen', { vehicle })}
              >
                <View style={styles.infoArea}>
                  <Text style={styles.infoTitle}>{vehicle.make} {vehicle.model}</Text>
                  <Text style={styles.infoSub}>{vehicle.type}-{vehicle.transmission}</Text>
                  <Text style={styles.infoPrice}>
                    <Text style={styles.infoAmount}>${vehicle.price_per_day} </Text>/day
                  </Text>
                </View>
                <View style={styles.imageArea}>
                  <Image
                    source={getImage(vehicle.id)}
                    resizeMode="contain"
                    style={styles.vehicleImage}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e7e7e7",
  },
  container: {
    flex: 1,
    paddingRight: 35,
    paddingLeft: 35,
  },
  headerSection: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleSection: {
    marginTop: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
  },
  searchSection: {
    marginTop: 15,
    paddingHorizontal: 1,

  },
  placeholderText: {
    fontSize: 14,
    color: "#696969",
    height:10,
  },
  searchBar: {
    borderRadius: 8,
    backgroundColor: "#F4F4F4",
   // height: 40,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    color: "#696969",
  },
  searchIconArea: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  typesSection: {
    marginTop: 15,
    flexDirection: "row",
  },
  typesTextActive: {
    fontSize: 15,
    marginRight: 34,
    fontWeight: "bold",
    color: "black",
  },
  typesText: {
    fontSize: 15,
    marginRight: 33,
    fontWeight: "500",
    color: "#696969",
  },
  listSection: {
    marginTop: 25,
  },
  headText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  elementPallet: {
    marginLeft: -15,
    paddingLeft: 15,
    paddingRight: 15,
    width: "110%",
    height: 450,
  },
  element: {
    height: 100,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "row",
    marginBottom: 13,
  },
  infoArea: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  infoSub: {
    fontSize: 11,
    fontWeight: "600",
    color: "#696969",
  },
  infoPrice: {
    position: "absolute",
    bottom: 0,
    fontSize: 10,
    color: "#696969",
    fontWeight: "bold",
  },
  infoAmount: {
    fontSize: 12,
    color: "black",
    fontWeight: "600",
  },
  imageArea: {
    flex: 1,
  },
  vehicleImage: {
    position: "absolute",
    top: -15,
    left: -15,
    width: "140%",
    height: "140%",
  },
});

export default CartScreen;
