import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';
import Profile from '../screens/ProfileScreen';
import { TokenProvider } from '../TokenContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import CarsList from '../components/CarsList';
import AuthStackNavigator from './StackNavigator';
import InfoScreen from '../screens/InfoScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CartStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InfoScreen"
          component={InfoScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };




const MyTabs = (props) => {
    return (
        <TokenProvider>
            <View style={styles.container}>
                <Tab.Navigator
                    initialRouteName="ProductScreen"
                    screenOptions={{
                        tabBarActiveTintColor: '#fff',
                        tabBarStyle: {
                            backgroundColor: 'black',
                            position: 'absolute',
                            bottom: 0,
                            left: '2.5%',
                            right: '2.5%',
                            height: 70,
                            paddingBottom: 10,
                            borderRadius: 30,
                            marginBottom: 20,
                        },
                        tabBarLabelStyle: {
                            fontSize: 12,
                        },
                        tabBarIconStyle: {
                            marginBottom: -15,
                        },
                        headerShown: false
                    }}
                >
                    <Tab.Screen
                        name="ProductScreen"
                        component={ProductScreen}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="home" size={size} color={color} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="CartScreen"
                        component={CartStack}
                        options={{
                            tabBarLabel: 'Cart',
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="th" size={size} color={color} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Profile"
                        component={AuthStackNavigator}
                        options={{
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="user-circle" size={size} color={color} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="CarsList"
                        component={CarsList}
                        options={{
                            tabBarLabel: 'Cars',
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="car" size={size} color={color} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </View>
        </TokenProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
});

export default MyTabs;
