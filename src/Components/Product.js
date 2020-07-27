import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Modal} from 'react-native';
import Star from 'react-native-vector-icons/dist/FontAwesome';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Fonts from '../Styles/Themes/Fonts';
const {width, height} = Dimensions.get('window');
import Paths from '../assest/path';

const Product = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal visible={modal} animationType="slide">
        <View>
          <View style={styles.modalHeader}>
            <TouchableOpacity style={styles.leftHeader}>
              <Text onPress={() => setModal(false)} style={styles.leftButton}>
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightHeader}>
              <Text style={styles.rightButton}>Share</Text>
            </TouchableOpacity>
          </View>

          <Image
            style={styles.modelPic}
            source={require('../assest/DAMO-Table-Lamp-by-Aromas-Ref.A-S1191DL-600-800-1.jpg')}
          />
          <View style={styles.modalDiscription}>
            <Paths style={{position: 'absolute', top: -150}} />
            <View style={styles.modelNameRate}>
              <Text style={styles.modalText}>Lampu Table</Text>

              <View style={styles.modalRate}>
                <Star color="#efcc00" name="star" size={25} />
                <Star color="#efcc00" name="star" size={25} />
                <Star color="#efcc00" name="star" size={25} />
                <Star color="#000" name="star" size={25} />
                <Star color="#000" name="star" size={25} />
              </View>
            </View>
            <Text style={styles.modalText}>Price : 80 JD</Text>
            <View style={styles.ul}>
              <Text style={styles.ulTitle}>
                Untuk Spesigikasi dari lampu Arsitek Meja Belajar :
              </Text>
              <View style={styles.list}>
                <Text style={styles.listStyle}></Text>
                <Text style={styles.li}>Warna Hitam</Text>
              </View>
              <View style={styles.list}>
                <Text style={styles.listStyle}></Text>
                <Text style={styles.li}>
                  Diameter Kepala lampu kurang lebih 12.5cm
                </Text>
              </View>
              <View style={styles.list}>
                <Text style={styles.listStyle}></Text>
                <Text style={styles.li}>Rorareable , flexibel & protable</Text>
              </View>
              <View style={styles.list}>
                <Text style={styles.listStyle}></Text>
                <Text style={styles.li}>Material Metal Alumunium</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.product}>
        <View style={styles.productTitle}>
          <Text style={styles.productTitleLeft}>Product Popular</Text>
          <Text style={styles.productTitleRight}>View All</Text>
        </View>
        <View>
          <View style={styles.cards}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setModal(true);
                }}>
                <View style={styles.card}>
                  <Image
                    style={styles.pic}
                    source={require('../assest/new.jpg')}
                  />
                  <Text style={styles.textCard}>Lampu Table</Text>
                  <Text style={styles.textCard}>Price : 80 JD</Text>

                  <View style={styles.rate}>
                    <Star color="#efcc00" name="star" size={15} />
                    <Star color="#efcc00" name="star" size={15} />
                    <Star color="#efcc00" name="star" size={15} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.card}>
                  <Image
                    style={styles.pic}
                    source={require('../assest/DAMO-Table-Lamp-by-Aromas-Ref.A-S1191DL-600-800-1.jpg')}
                  />
                  <Text style={styles.textCard}>Sofa Navy</Text>
                  <Text style={styles.textCard}>Price : 40 JD</Text>

                  <View style={styles.rate}>
                    <Star color="#efcc00" name="star" size={15} />
                    <Star color="#efcc00" name="star" size={15} />
                    <Star color="#efcc00" name="star" size={15} />
                    <Star color="#efcc00" name="star" size={15} />
                    <Star color="#efcc00" name="star" size={15} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.card}>
                  <Image
                    style={styles.pic}
                    source={require('../assest/igor-industrial-dining-collaboration-office-table-1.jpg')}
                  />
                  <Text style={styles.textCard}>Meja Tamu</Text>
                  <Text style={styles.textCard}>Price : 30 JD</Text>
                  <View style={styles.rate}>
                    <Star color="#efcc00" name="star" size={15} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.card}>
                  <Image
                    style={styles.pic}
                    source={require('../assest/kitchen.jpg')}
                  />
                  <Text style={styles.modalText}>Lampu Table</Text>
                  <Text style={styles.modalText}>Price : 80 JD</Text>

                  <View style={styles.modalRate}>
                    <Star color="#efcc00" name="star" size={15} />
                    <Star color="#efcc00" name="star" size={15} />
                    <Star color="#efcc00" name="star" size={15} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.card}>
                  <Image
                    style={styles.pic}
                    source={require('../assest/bed.jpg')}
                  />
                  <Text style={styles.textCard}>Lampu Table</Text>
                  <Text style={styles.textCard}>Price : 80 JD</Text>

                  <View style={styles.rate}>
                    <Star color="#efcc00" name="star" size={15} />
                    <Star color="#efcc00" name="star" size={15} />
                    <Star color="#efcc00" name="star" size={15} />
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        <Text style={styles.hr}></Text>
      </View>
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  product: {
    margin: 15,
  },
  productTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productTitleLeft: {
    fontFamily: Fonts.bold,
    fontSize: Fonts.md,
    marginBottom: 15,
  },
  productTitleRight: {
    fontSize: Fonts.sm,
    marginRight: 15,
    marginBottom: 10,
    color: '#3338',
  },
  cards: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    padding: 5,
    margin: 7,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#fff',
  },
  pic: {
    width: (80 * width) / 320,
    height: (90 * width) / 320,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 7,
  },
  textCard: {
    fontSize: Fonts.xsm,
    marginBottom: 2,
  },
  rate: {
    flexDirection: 'row',
    marginTop: 5,
  },

  hr: {
    flex: 1,
    borderBottomWidth: 1,
    width: '80%',
    marginHorizontal: '10%',
    borderBottomColor: '#3332',
  },
  modalDiscription: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: '#fff',
    width: '100%',
    bottom: 0,
    height: 150,
    paddingHorizontal: 15,
  },
  modelPic: {
    width: width,
    height: '90%',
    resizeMode: 'cover',
  },
  modelNameRate: {
    flexDirection: 'row',
    marginTop: 10,
  },
  modalText: {
    fontSize: Fonts.xl,
    fontFamily: Fonts.bold,
  },
  modalRate: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 6,
  },
  ul: {
    marginTop: 10,
  },
  ulTitle: {
    fontWeight: '700',
    fontSize: Fonts.xsm,
  },
  list: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  li: {
    fontWeight: '700',

    fontSize: Fonts.xsm,
  },
  listStyle: {
    marginRight: 7,
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: 'black',
    opacity: 0.9,
  },
  modalHeader: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    zIndex: 10,
    justifyContent: 'space-between',
    width: width,
    paddingHorizontal: 15,
  },
  leftHeader: {},
  rightHeader: {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: '#000',
    borderRadius: 10,
  },
  leftButton: {
    fontSize: Fonts.md,
  },
  rightButton: {
    fontSize: Fonts.md,
    color: '#fff',
  },
});
