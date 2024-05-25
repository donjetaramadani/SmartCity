import React, { Component, useState } from "react";
import {View, Text, FlatList, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, RefreshControl, Modal} from "react-native";
import { Searchbar } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import styles from "./css/ProductStyle";
import Header from '../components/Header';


class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
      refreshing: false,
      modalVisible: false,
    };
  }


  onRefresh = async () => {
    this.setState({ refreshing: true });

    // Fetch new data or perform any asynchronous task
    // For demonstration purposes, I'm using a simple setTimeout
    setTimeout(() => {
      
      const newData = [...this.state.products, { id: this.state.products.length + 1, text: `Item ${this.state.products.length + 1}` }];
      this.setState({ products: newData, refreshing: false });
    }, 1000); 
  };

  // componentDidMount() {
  //   this.fetchAllProducts();
  // }

  // fetchAllProducts = async () => {
  //   try {
  //     const response = await fetch("http://123.123.123:8000/products/allProducts/");
  //     const data = await response.json();
  //     this.setState({ products: data, loading: false });
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //   }
  // };

  // renderProductItem = ({ item }) => {
  //   return (
  //     <View style={styles.productItem}>
  //       <Text style={styles.title}>{item.name}</Text>
  //       <Text style={styles.description}>{item.description}</Text>
  //       <Text style={styles.price}>Price: ${item.price}</Text>
  //       {/* You can add more details or buttons for each product */}
  //     </View>
  //   );
  // };


  openModal = () => {
    this.setState({ modalVisible: true });
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  /*
  render() {
    const { products, loading, refreshing } = this.state;
*/

render() {
  //const { products, loading, refreshing, navigation } = this.props; 
  const { refreshing } = this.state;
  const { navigation } = this.props;

    return (
      <View style={styles.container}>
        {/* Add the Header component here */}
        <Header />

        {/* Search product */}
        <View style={[styles.searchContainer, { marginTop: 80 }]}>
          <Searchbar
            placeholder="Search product"
            style={styles.searchInput}
          />
        </View>

        <View style={styles.main}>
          {/* categories cards */}
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />
            }>
            <Text style={{ fontSize: 22, fontWeight: "bold", padding: 20, color: '#fff' }}>Categories</Text>
            <ScrollView horizontal={true}>


            <View style={styles.categoryWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate('AudiScreen')}>
                  <View style={styles.categoryImage}>
                    <Image
                      source={require('../assets/Icons/audi.png')}
                      style={{ width: 64, height: 64, resizeMode: 'contain'  }}
                    />
                  </View>
                  <View style={styles.categoryName}>
                    <Text style={styles.categoryText}>Audi</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.categoryWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate('BentleyScreen')}>
                  <View style={styles.categoryImage}>
                    <Image
                      source={require('../assets/Icons/bently.png')}
                      style={{ width: 64, height: 64, resizeMode: 'contain'  }}
                    />
                  </View>
                  <View style={styles.categoryName}>
                    <Text style={styles.categoryText}>Bentley</Text>
                  </View>
                </TouchableOpacity>
              </View>

              
              <View style={styles.categoryWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate('LamborghiniScreen')}>
                  <View style={styles.categoryImage}>
                    <Image
                      source={require('../assets/Icons/Lamborghini.png')}
                      style={{ width: 64, height: 64 }}
                    />
                  </View>
                  <View style={styles.categoryName}>
                    <Text style={styles.categoryText}>Lamborghini</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.categoryWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate('MustangScreen')}>
                  <View style={styles.categoryImage}>
                        <Image
                          source={require('../assets/Icons/mustang.png')}
                          style={{ width: 64, height: 64, resizeMode: 'contain'  }}
                        />
                  </View>
                  <View style={styles.categoryName}>
                    <Text style={styles.categoryText}>Mustang</Text>
                  </View>
                </TouchableOpacity>
              </View>



              <View style={styles.categoryWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate('PorscheScreen')}>
                  <View style={styles.categoryImage}>
                    <Image
                      source={require('../assets/Icons/Porsche.png')}
                      style={{ width: 64, height: 64 }}
                    />
                  </View>
                  <View style={styles.categoryName}>
                    <Text style={styles.categoryText}>Porsche</Text>
                  </View>
                </TouchableOpacity>
              </View>


            </ScrollView>


            {/* products items */}
            <Text style={{ fontSize: 22, fontWeight: "bold", padding: 20, color: '#fff' }}>Products</Text>

            <View style={styles.products}>
              <View style={styles.productWrapper}>
                <TouchableOpacity>
                        <View style={styles.productImage}>
                          <Image
                            source={require('../assets/images/car.jpg')}
                            style={{ width: '100%', height: '100%', borderRadius: 10 }}
                          />
                        </View>
                        <View style={styles.productName}>
                          <Text style={{ fontSize: 16, color: 'white',  textAlign: 'center', textAlignVertical: 'center'  }}>Cars</Text>
                        </View>

                
                  
                        <View style={styles.productAction}>
                          <TouchableOpacity style={styles.cartBtn} onPress={() => navigation.navigate('CarsScreen')}>
                            <Text style={{ color: 'white' }}>Explore More</Text>
                          </TouchableOpacity>
                        </View>
                  </TouchableOpacity>
              </View>
             


              <View style={styles.productWrapper}>
                <TouchableOpacity>
                      <View style={styles.productImage}>
                        <Image
                          source={require('../assets/images/one.jpg')}
                          style={{ width: '100%', height: '100%', borderRadius: 10 }}
                        />
                      </View>
                      <View style={styles.productName}>
                        <Text style={{ fontSize: 16, color: 'white',  textAlign: 'center', textAlignVertical: 'center'  }}>Accessories</Text>
                      </View>

                 
       
                        
                              <View style={styles.productAction}>
                                <TouchableOpacity style={styles.cartBtn} onPress={() => navigation.navigate('AccessoriesScreen')}>
                                  <Text style={{ color: 'white' }}>Explore More</Text>
                                </TouchableOpacity>
                              </View>
                        </TouchableOpacity>
              </View>


              <View style={styles.productWrapper}>
                <TouchableOpacity>
                      <View style={styles.productImage}>
                        <Image
                          source={require('../assets/images/zu.jpg')}
                          style={{ width: '100%', height: '100%', borderRadius: 10 }}
                        />
                      </View>
                      <View style={styles.productName}>
                        <Text style={{ fontSize: 16, color: 'white',  textAlign: 'center', textAlignVertical: 'center'  }}>Life Style</Text>
                      </View>

                  
       
                    
                            <View style={styles.productAction}>
                              <TouchableOpacity style={styles.cartBtn} onPress={() => navigation.navigate('HomeLifeStyleScreen')}>
                                <Text style={{ color: 'white' }}>Explore More</Text>
                              </TouchableOpacity>
                            </View>
                      </TouchableOpacity>
              </View>


              <View style={styles.productWrapper}>
                <TouchableOpacity>
                        <View style={styles.productImage}>
                          <Image
                            source={require('../assets/images/pa.jpg')}
                            style={{ width: '100%', height: '100%', borderRadius: 10 }}
                          />
                        </View>
                        <View style={styles.productName}>
                          <Text style={{ fontSize: 16, color: 'white', textAlign: 'center', textAlignVertical: 'center'  }}>Services</Text>
                        </View>

       
               
                              <View style={styles.productAction}>
                                <TouchableOpacity style={styles.cartBtn} onPress={() => navigation.navigate('BrowseScreen')}>
                                  <Text style={{ color: 'white' }}>Explore More</Text>
                                </TouchableOpacity>
                              </View>
                          </TouchableOpacity>

              </View>
            </View>
          </ScrollView>
        </View>
</View>   
    );
  }

}





export default ProductScreen;
