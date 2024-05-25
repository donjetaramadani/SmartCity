import React, { useState, useContext, useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image,} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import { useToken } from '../TokenContext';

const LoginScreen = (props) => {
  const { getToken, saveToken } = useToken();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const token = getToken();

  useEffect(() => {
    if (token !== null) {
    
      props.navigation.navigate('ProductScreen');
    }
  }, [token]);

  const handleLogin = () => {
   
    const apiUrl = 'http://192.168.200.199:8000/account/login/';

    
    const data = {
      username: username,
      password: password,
    };

    // Sending POST request using fetch
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

      .then((response) => response.json())
      .then((result) => {
       
      console.log('Login response:', result);
      saveToken(result.token);
       
      })

      .then(() => props.navigation.navigate('ProductScreen'))
      .catch((error) => {
      
        console.error('Error:', error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 25, }}>
      <View style={{ maxWidth: 400, alignSelf: 'center' }}>

        <Text
          style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 28,
              fontWeight: '500',
              color: '#333',
              marginBottom: 30,
          }}>
          Login
        </Text>

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 45 }}>
          <View style={{ flex: 1, marginBottom: 20 }}>

              <InputField
                label={'Password'}
                icon={
                  <Ionicons
                    name="ios-lock-closed-outline"
                    size={20}
                    color="#666"
                    style={{ marginRight: 5 }}
                  />
              }
              inputType="password"
              style={{ marginBottom: 20 }}
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity onPress={() => props.navigation.navigate('ForgotPasswordScreen')} style={{ marginBottom: -75 }}>
            <Text style={{ color: '#AD40AF', fontSize: 14, fontWeight: '700' }}>Forgot Password?</Text>
          </TouchableOpacity>

        </View>

      
        <CustomButton label={"Login"} onPress={handleLogin} style={{ backgroundColor: '#004266' }} />


        <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
          Or, login with ...
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
          <TouchableOpacity
            onPress={() => {
              // Handle Google login
            }}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Image
              source={require('./img/google.png')}
              style={{ width: 45, height: 45 }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // Handle Facebook login
            }}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Image
              source={require('./img/Facebook.png')}
              style={{ width: 45, height: 45 }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
             
            }}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Image
              source={require('./img/x.jpg')}
              style={{ width: 45, height: 45 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#004266', 
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;