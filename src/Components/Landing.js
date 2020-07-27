import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import Fonts from '../Styles/Themes/Fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Landing = () => {
  return (
    <>
      <View style={styles.landing}>
        <Image style={styles.pic} source={require('../assest/bg.jpg')} />
        <View style={styles.save}>
          <Text style={styles.landingText}>Time To Shop At The</Text>

          <Text style={styles.landingText}> Lowest Prices</Text>
          <Text style={styles.landingDiscount}>Discounts up to 50%</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.TextButton}>Shopping Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.hr}></Text>
    </>
  );
};

export default Landing;

const styles = StyleSheet.create({
  landing: {
    margin: 15,
    position: 'relative',
    elevation: 7,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  pic: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  save: {
    position: 'absolute',
    top: '10%',
    left: '5%',
  },
  landingText: {
    color: '#000',
    fontSize: Fonts.lg,
    fontFamily: Fonts.bold,
  },
  landingDiscount: {
    color: 'red',
    marginTop: 1,
    marginLeft: 5,
    fontSize: Fonts.xsm,
  },
  button: {
    backgroundColor: '#f024',
    width: 120,
    padding: 5,
    borderRadius: 3,
    marginTop: 10,
  },
  TextButton: {
    color: '#fff',
    fontSize: Fonts.xsm,
    fontFamily: Fonts.bold,
    textAlign: 'center',
  },
  hr: {
    flex: 1,
    borderBottomWidth: 1,
    width: '80%',
    marginHorizontal: '10%',
    borderBottomColor: '#3332',
  },
});
