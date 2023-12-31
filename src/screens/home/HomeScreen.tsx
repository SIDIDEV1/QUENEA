import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import DashedLine from '../../components/DashedLine';
import Icon from 'react-native-vector-icons/Feather';

const HomeScreen = ({navigation}) => {
  const inset = useSafeAreaInsets();
  const handleTaskDetails = () => {
    navigation.navigate('TaskDetails')
  }

  return (
    <View style={{ ...styles.container, paddingTop: inset.top }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>QUENEA</Text>
        <Pressable style={styles.notificationButton}>
          <Icon name="mail" size={20} />
        </Pressable>
      </View>
      <ScrollView>
        <View style={styles.listContent}>
          {[...Array(10)].map((_, i) => (
            <TouchableOpacity style={styles.item} onPress={handleTaskDetails}>
              <View style={styles.itemTop}>
                <Text style={styles.itemName}>Affaire > Site {i + 1}</Text>
                <View style={styles.itemStatus}>
                  <Text style={styles.itemStatusText}>ouvert</Text>
                </View>
              </View>
              <DashedLine dashWidth={7} dashGap={10} totalLength={700} />
              <View style={styles.itemBottom}>
                <View>
                  <Text style={{ fontWeight: 'bold' }}>Identifiant :</Text>
                  <Text style={{ fontWeight: 'bold' }}>ARZ46323</Text>
                </View>
                <Text>Date de création : <Text style={{ fontWeight: 'bold' }}>01/93/00</Text></Text>
              </View>
              <View style={styles.cercle}>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 31,
  },
  notificationButton: {
    borderWidth: 1,
    width: 36,
    height: 36,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.gray
  },
  item: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 16,
  },
  itemName: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  itemStatus: {
    backgroundColor: Colors.blueLight,
    borderWidth: 1,
    borderColor: Colors.blue,
    paddingHorizontal: 23,
    paddingVertical: 2,
    borderRadius: 7
  },
  itemStatusText: {
    textTransform: 'capitalize',
    fontWeight: 'bold'
  },
  itemTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  separator: {
    width: '100%',
    height: 1,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderStyle: 'dashed',
  },
  itemBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 11,
    paddingHorizontal: 20,
  },
  cercle: {
    width: 35,
    height: 35,
    backgroundColor: Colors.white,
    borderRadius: 100,
    position: 'absolute',
    top: 37,
    left: -19,
  },
  listContent : {
    flex: 1, 
    gap: 19,
    paddingHorizontal: 20,
  }
});
