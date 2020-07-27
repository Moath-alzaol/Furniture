import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {SearchBar} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
const Search = () => {
  const [searchValue, setsearchValue] = useState('');
  const updateSearch = (search) => {
    setsearchValue(search);
  };
  return (
    <View>
      <SearchBar
        placeholder="Type Here"
        containerStyle={{
          width: (200 * width) / 320,
          marginHorizontal: 10,
          borderRadius: 3,
          // marginTop: 20,
          backgroundColor: '#fff',
          borderBottomColor: '#fff',
          borderBottomWidth: 0,
          borderTopWidth: 0,
          elevation: 0.5,
          height: 40,
        }}
        inputContainerStyle={{
          backgroundColor: '#fff',
          borderColor: '#fff',
          height: 30,
        }}
        onChangeText={updateSearch}
        value={searchValue}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  search: {
    marginHorizontal: 10,
    backgroundColor: 'red',
  },
});

export default Search;
