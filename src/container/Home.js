import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../Components/Hedaer';
import Search from '../Components/Search';
import Product from '../Components/Product';
import Categories from '../Components/Categories';
import Paket from '../Components/PaketFuriniture';
import {ScrollView} from 'react-native-gesture-handler';
import Landing from '../Components/Landing';

const Home = ({navigation}) => {
  return (
    <>
      <View style={{backgroundColor: '#fff', paddingTop: 70}}>
        <Header navigation={navigation} />
        <ScrollView>
          {/* <Search /> */}
          <Landing />
          <Product />
          <Categories />
          <Paket />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default Home;
