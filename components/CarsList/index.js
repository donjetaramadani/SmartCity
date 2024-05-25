// CarsList/index.js
import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import CarItem from "../CarItem";
import Header from "../Header"; // Adjust the import path

import styles from './styles';
import cars from './cars';

const CarsList = (props) => {
  return (
    <View style={styles.container}>
   
      <Header />
      
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default CarsList;
