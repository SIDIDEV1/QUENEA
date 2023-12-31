import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../../constants/Colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Checklists = ({navigation}) => {
  const inset = useSafeAreaInsets();

  const handleGoback = () => {
    navigation.goBack();
  };

  return (
    <View style={{paddingTop: inset.top, ...styles.container}}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoback}>
            <AntDesign name="arrowleft" size={30} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Affaire / SITES 1</Text>
        </View>

        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.text}>Listes de contrôle</Text>
            {[...Array(10)].map((_, i) => (
              <TouchableOpacity key={i + 1} style={styles.listItem}>
                <Text style={styles.text}>Avant intervention</Text>
                <View style={styles.listItemRight}>
                  <Text style={styles.text}>22%</Text>
                  <Entypo name="chevron-right" size={20} />
                </View>
              </TouchableOpacity>
            ))}

            <View style={styles.buttons}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Imprimer</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Envoyer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Checklists;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 12,
  },
  headerTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  section: {
    gap: 15,
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  text: {
    fontSize: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
  },
  listItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  button: {
    backgroundColor: Colors.blue,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 15,
    color: Colors.white,
    fontWeight: 'bold',
  },
});
