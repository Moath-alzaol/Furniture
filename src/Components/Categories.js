import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import Fonts from '../Styles/Themes/Fonts';
import Lamp from '../assest/lamp';
import Bed from '../assest/bed';
import Desk from '../assest/desk';
import Fridge from '../assest/fridge';

const {width, height} = Dimensions.get('window');

const Categories = () => {
  return (
    <View style={styles.categories}>
      <View style={styles.categoriesTitle}>
        <Text style={styles.categoriesTitleLeft}>Categoreis</Text>
        <Text style={styles.categoriesTitleRight}>View All</Text>
      </View>
      <View style={styles.cards}>
        <View style={styles.card}>
          <Lamp style={[styles.pic, {fill: '#000'}]} />
          <Text style={styles.textCard}>Lampu</Text>
        </View>
        <View style={styles.card}>
          <Desk style={[styles.pic, {fill: '#000'}]} />

          <Text style={styles.textCard}>Office</Text>
        </View>
        <View style={styles.card}>
          <Bed style={[styles.pic, {fill: '#000'}]} />

          <Text style={styles.textCard}>Bed</Text>
        </View>
        <View style={styles.card}>
          <Fridge style={[styles.pic, {fill: '#000'}]} />
          <Text style={styles.textCard}>Kitchen</Text>
        </View>
      </View>
      <Text style={styles.hr}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categories: {
    margin: 15,
  },
  categoriesTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoriesTitleLeft: {
    fontFamily: Fonts.bold,
    fontSize: Fonts.md,
    marginBottom: 15,
  },
  categoriesTitleRight: {
    fontSize: Fonts.sm,
    marginRight: 15,
    marginBottom: 10,
    color: '#3338',
  },

  cards: {
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  pic: {
    width: (55 * width) / 320,
    height: (55 * width) / 320,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#fff',
    margin: 10,
  },
  textCard: {
    fontSize: Fonts.sm,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '8%',
  },
  hr: {
    flex: 1,
    borderBottomWidth: 1,
    width: '80%',
    marginHorizontal: '10%',
    borderBottomColor: '#3332',
  },
});
export default Categories;
