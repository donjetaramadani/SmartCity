import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Dimensions, Animated } from 'react-native';
import { COLOURS } from '../database/Database';

const ProductSlider = ({ images }) => {
  const width = Dimensions.get('window').width;
  const scrollX = new Animated.Value(0);
  const position = Animated.divide(scrollX, width);

  const renderProduct = ({ item }) => {
    return (
      <View style={{ width: width, height: 240, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={item} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
      </View>
    );
  };

  return (
    <View style={{ width: '100%', borderBottomRightRadius: 20, borderBottomLeftRadius: 20, position: 'relative', justifyContent: 'center', alignItems: 'center', marginBottom: 50, paddingTop: 100 }}>
      <FlatList
        data={images}
        horizontal
        renderItem={renderProduct}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={width}
        bounces={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
      />
      <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 16, marginTop: 50 }}>
        {images.map((data, index) => {
          let opacity = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.2, 1, 0.2],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View key={index} style={{ width: '16%', height: 2.4, backgroundColor: COLOURS.black, opacity, marginHorizontal: 4, borderRadius: 100 }}></Animated.View>
          );
        })}
      </View>
    </View>
  );
};

export default ProductSlider;
