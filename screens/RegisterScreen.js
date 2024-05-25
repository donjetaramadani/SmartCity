import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import { useToken } from '../TokenContext';

const RegisterScreen = (props) => {
  const { getToken, saveToken } = useToken();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const token = getToken();

  useEffect(() => {
    if (token !== null) {
     
      props.navigation.navigate('ProductScreen');
    }
  }, [token]);

  const handleRegister = () => {
  
    if (!username || !email || !password || !confirmPassword || password !== confirmPassword) {
 
      console.error('Validation error: Please fill in all fields and ensure passwords match.');
      return;
    }

    //API endpoint for registration
    const apiUrl = 'http://192.168.200.199:8000/account/register/';

    // Data to be sent in the POST request
    const data = {
      username: username,
      email: email,
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
     
        console.log('Register response:', result);
        saveToken(result.token);
        
      })
      .then(() => props.navigation.navigate('ProductScreen'))
      .catch((error) => {
      
        console.error('Error:', error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Register</Text>

        <InputField
          label={'Username'}
          icon={<MaterialIcons name="person" size={20} color="#666" style={styles.icon} />}
          onChangeText={(text) => setUsername(text)}
          value={username}
        />

        <InputField
          label={'Email'}
          icon={<MaterialIcons name="email" size={20} color="#666" style={styles.icon} />}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <InputField
          label={'Password'}
          icon={<Ionicons name="ios-lock-closed-outline" size={20} color="#666" style={styles.icon} />}
          inputType="password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />

        <InputField
          label={'Confirm Password'}
          icon={<Ionicons name="ios-lock-closed-outline" size={20} color="#666" style={styles.icon} />}
          inputType="password"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry={true}
        />

        <CustomButton label={"Register"} onPress={handleRegister} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#fff',
  },
  formContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
  //textAlign: 'center',
  },
  icon: {
    marginRight: 5,
  },
});

export default RegisterScreen;
