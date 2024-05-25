import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Header from '../components/Header';

const ProfileScreen = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginRegisterSection: {
      alignItems: 'center',
    },
    loginButton: {
      backgroundColor: '#1c1c1c',
      paddingVertical: 15,
      paddingHorizontal: 80,
      borderRadius: 8,
      marginBottom: 20,
    },
    registerButton: {
      backgroundColor: '#004266',
      paddingVertical: 15,
      paddingHorizontal: 70,
      borderRadius: 8,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });

  return (
    <ImageBackground
      source={require('../assets/images/tiree.png')} 
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Header />

        <View style={styles.loginRegisterSection}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => props.navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => props.navigation.navigate('Register')}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default ProfileScreen;
