import React from 'react';
import {StyleSheet, View} from 'react-native';
import Home from './container/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import About from './container/About';
import Header from './Components/Hedaer';
const App = () => {
  const Drawer = createDrawerNavigator();

  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
