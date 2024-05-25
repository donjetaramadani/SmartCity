import React, { useState } from 'react';
import { View, StatusBar, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import ProductSlider from '../components/ProductSlider';
import { COLOURS } from '../database/Database';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';


const vehiclesData = [
  { id: 1, make: 'Audi', model: 'A3', type: 'Sedan', transmission: 'Automatic', price_per_day: 100 },
  { id: 2, make: 'Audi', model: 'Q5', type: 'SUV', transmission: 'Automatic', price_per_day: 150 },
  { id: 3, make: 'Audi', model: 'A3', type: 'Sedan', transmission: 'Automatic', price_per_day: 100 },
  { id: 4, make: 'Audi', model: 'Q5', type: 'SUV', transmission: 'Automatic', price_per_day: 150 },
  { id: 5, make: 'Audi', model: 'A3', type: 'Sedan', transmission: 'Automatic', price_per_day: 100 },
  { id: 6, make: 'Audi', model: 'Q5', type: 'SUV', transmission: 'Automatic', price_per_day: 150 },
  { id: 7, make: 'Audi', model: 'A3', type: 'Sedan', transmission: 'Automatic', price_per_day: 100 },
  { id: 8, make: 'Audi', model: 'Q5', type: 'SUV', transmission: 'Automatic', price_per_day: 150 },


];


const image_v_1 = require("../assets/vehicles/Audi.png");
const image_v_2 = require("../assets/vehicles/rr.png");
const image_v_3 = require("../assets/vehicles/sport.png");
const image_v_4 = require("../assets/vehicles/audss.png");
const image_v_5 = require("../assets/vehicles/auds.png");
const image_v_6 = require("../assets/vehicles/audsf.png");
const image_v_7 = require("../assets/vehicles/audsq.jpg");
const image_v_8 = require("../assets/vehicles/audsff.png");

const AudiScreen = ({ navigation }) => {
  const images = [
    require('../assets/images/logo.jpg'),
    require('../assets/images/audi.jpg'),
    require('../assets/images/aud.jpg')
  ];

  const [filteredVehicles, setFilteredVehicles] = useState(vehiclesData);

  const getImage = (id) => {
    if (id === 1) return image_v_1;
    if (id === 2) return image_v_2;
    if (id === 3) return image_v_3;
    if (id === 4) return image_v_4;
    if (id === 5) return image_v_5;
    if (id === 6) return image_v_6;
    if (id === 7) return image_v_7;
    if (id === 8) return image_v_8;

  };




  const styles = StyleSheet.create({
    headerSection: {
      height: 70,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 20, 
    },

    titleSection: {
      marginTop: 15, 
    },
    searchSection: {
      marginTop: 15,
      paddingHorizontal: 20, 
    },
    searchBar: {
      borderRadius: 8,
      backgroundColor: "#F4F4F4",
      flex: 1, 
    },
    searchInput: {
      height: 40,
      paddingHorizontal: 10,
      color: "#696969",
    },

    element: {
      height: 120, 
      padding: 15,
      borderRadius: 10,
      backgroundColor: "#F4F4F4", 
      flexDirection: "row",
      marginBottom: 20, 
    },
    vehicleImage: {
      width: 100, 
      height: 100, 
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
    searchBar: {
      borderRadius: 8,
      backgroundColor: "#F4F4F4",
    },
    searchInput: {
      flex: 1,
      height: 40,
      paddingHorizontal: 10,
      color: "#696969",
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
    container: {
      flex: 1,
      paddingRight: 35,
      paddingLeft: 35,
      backgroundColor: 'rgba(0, 0, 0, 0.05)', 
    },
  });

  const searchVehicles = (keyword) => {
    const filtered = vehiclesData.filter(vehicle => vehicle.make.toLowerCase().includes(keyword.toLowerCase()));
    setFilteredVehicles(filtered);
  };

  
  return (
    <View style={{ flex: 1, backgroundColor: COLOURS.white }}>
      <StatusBar backgroundColor={COLOURS.backgroundLight} barStyle="dark-content" />
      <Header navigation={navigation} />
      <ScrollView contentContainerStyle={{ paddingTop: 20 }}>
        <ProductSlider images={images} />
      
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, paddingHorizontal: 60 }}>
          <Ionicons name="call-outline" size={32} color="#fff" style={{ backgroundColor: "#89c2d9", borderRadius: 10, padding: 20 }} />
          <Ionicons name="document-attach-outline" size={32} color="#fff" style={{ backgroundColor: "#bfdbf7", borderRadius: 10, padding: 20 }} />
          <Ionicons name="help-circle-outline" size={32} color="#fff" style={{ backgroundColor: "#61a5c2", borderRadius: 10, padding: 20 }} />
        </View>

        <View style={styles.container}>
      
          <View style={styles.headerSection}>
 
            <View style={styles.titleSection}>
              <Text style={styles.title}>Audi</Text>
            </View>

            <View style={styles.searchSection}>
              <Searchbar
                placeholder="Search a Car"
                onChangeText={(text) => searchVehicles(text)}
                style={styles.searchBar}
                inputStyle={styles.searchInput}
              />
            </View>
          </View>
  
          <View style={styles.listSection}>
            <Text style={styles.headText}>Most Sellers</Text>
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
      </ScrollView>
    </View>
  );
};


export default AudiScreen;

