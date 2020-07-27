import React from 'react';
import {Text, View} from 'react-native';
import Header from '../Components/Hedaer';

const About = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>Hello from About Screeen </Text>
    </View>
  );
};

export default About;
