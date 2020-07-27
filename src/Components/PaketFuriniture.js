import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Star from 'react-native-vector-icons/dist/FontAwesome';
import Fonts from '../Styles/Themes/Fonts';
import {ScrollView} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
const Paket = () => {
  return (
    <View style={styles.paket}>
      <Text style={styles.paketText}>Paket Furiniture</Text>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.card}>
          <Image style={styles.pic} source={require('../assest/living.jpg')} />

          <View style={styles.rating}>
            <Text style={styles.textCard}>Paket Rating : </Text>
            <View style={styles.stars}>
              <Star color="#efcc00" name="star" size={15} />
              <Star color="#efcc00" name="star" size={15} />
              <Star color="#efcc00" name="star" size={15} />
              <Star color="#efcc00" name="star" size={15} />
              <Star color="#000" name="star" size={15} />
            </View>
          </View>
          <Text style={styles.textCard}>Price : 500 JD</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.pic} source={require('../assest/office2.jpg')} />
          <View style={styles.rating}>
            <Text style={styles.textCard}>Paket Rating : </Text>
            <View style={styles.stars}>
              <Star color="#efcc00" name="star" size={15} />
              <Star color="#000" name="star" size={15} />
              <Star color="#000" name="star" size={15} />
              <Star color="#000" name="star" size={15} />
              <Star color="#000" name="star" size={15} />
            </View>
          </View>
          <Text style={styles.textCard}>Price : 500 JD</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.pic} source={require('../assest/paket.jpg')} />

          <View style={styles.rating}>
            <Text style={styles.textCard}>Paket Rating : </Text>
            <View style={styles.stars}>
              <Star color="#efcc00" name="star" size={15} />
              <Star color="#efcc00" name="star" size={15} />
              <Star color="#000" name="star" size={15} />
              <Star color="#000" name="star" size={15} />
              <Star color="#000" name="star" size={15} />
            </View>
          </View>
          <Text style={styles.textCard}>Price : 500 JD</Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default Paket;

const styles = StyleSheet.create({
  paket: {
    margin: 15,
  },
  paketText: {
    fontFamily: Fonts.bold,
    fontSize: Fonts.md,
    marginBottom: 15,
  },
  card: {
    flex: 1,
    padding: 5,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    width: width - 50,
  },
  pic: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  textCard: {
    fontSize: Fonts.xsm,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  stars: {
    flexDirection: 'row',
  },
});
