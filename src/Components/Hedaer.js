import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import NoteIcon from 'react-native-vector-icons/dist/MaterialIcons';
import Fonts from '../Styles/Themes/Fonts';
import {useRoute} from '@react-navigation/native';
import Search from './Search';

const Header = ({navigation}) => {
  const route = useRoute();

  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.reigthHeader} onPress={openMenu}>
        <Icon name="menu" size={30} />
      </TouchableOpacity>
      {/* <Text style={styles.titleHeader}>{route.name}</Text> */}
      <Search />
      <TouchableOpacity style={styles.leftHeader}>
        <NoteIcon name="notifications-none" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 10,
  },
  reigthHeader: {
    flex: 1,
  },
  titleHeader: {
    flex: 1,
    fontFamily: Fonts.bold,
    fontSize: Fonts.md,
    textAlign: 'center',
  },
  leftHeader: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
export default Header;
