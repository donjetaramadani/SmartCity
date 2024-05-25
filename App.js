import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './navigation/BottomTab';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from './screens/ProductScreen';
import AudiScreen from './screens/AudiScreen';
import BentleyScreen from './screens/BentleyScreen';
import LamborghiniScreen from './screens/LamborghiniScreen';
import MustangScreen from './screens/MustangScreen';
import PorscheScreen from './screens/PorscheScreen';
import CarsScreen from './screens/CarsScreen';
import AccessoriesScreen from './screens/AccessoriesScreen';
import HomeLifeStyleScreen from './screens/HomeLifeStyleScreen';
import ServicesScreen from './screens/ServicesScreen';
import LifeStyleScreen from './screens/LifeStyleScreen';
import MyCartScreen from './screens/MyCartScreen';
import AccessoriesLifeScreen from './screens/AccessoriesLifeScreen';
import AccessoriesCartScreen from './screens/AccessoriesCartScreen';
import BrowseScreen from './screens/BrowseScreen';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={MyTabs} options={{ headerShown: false }} />
          <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AudiScreen" component={AudiScreen} options={{ headerShown: false }} />
          <Stack.Screen name="BentleyScreen" component={BentleyScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LamborghiniScreen" component={LamborghiniScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MustangScreen" component={MustangScreen} options={{ headerShown: false }} />
          <Stack.Screen name="PorscheScreen" component={PorscheScreen} options={{ headerShown: false }} />
          <Stack.Screen name="CarsScreen" component={CarsScreen} options={{ headerShown: false }} /> 
          <Stack.Screen name="AccessoriesScreen" component={AccessoriesScreen} options={{ headerShown: false }} /> 
          <Stack.Screen name="HomeLifeStyleScreen" component={HomeLifeStyleScreen} options={{ headerShown: false }} /> 
          <Stack.Screen name="ServicesScreen" component={ServicesScreen} options={{ headerShown: false }} /> 
          <Stack.Screen name="LifeStyleScreen" component={LifeStyleScreen} options={{ headerShown: false }} /> 
          <Stack.Screen name="MyCartScreen" component={MyCartScreen} options={{ headerShown: false }} /> 
          <Stack.Screen name="AccessoriesLifeScree" component={AccessoriesLifeScreen} options={{ headerShown: false }} /> 
          <Stack.Screen name="AccessoriesCartScreen" component={AccessoriesCartScreen} options={{ headerShown: false }} /> 
          <Stack.Screen name="BrowseScreen" component={BrowseScreen} options={{ headerShown: false }} /> 
         
        
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
