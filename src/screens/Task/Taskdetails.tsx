import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Taskdetails = ({navigation}) => {
  const inset = useSafeAreaInsets();

  const mapsImage = require('../../assets/images/map.png');

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
            <Text style={styles.text}>Information</Text>
            <Text style={styles.text}>Type de maintenance...</Text>
            <Text style={styles.text}>Numéro : AOIE083</Text>
            <View>
              <Text style={{...styles.text, marginBottom: 5}}>Description</Text>
              <Text>
                Le Lorem Ipsum est simplement du faux texte employé dans la
                composition et la mise en page avant impression. Le Lorem Ipsum
                est le faux texte standard de l'imprimerie depuis les années
                1500, quand un imprimeur anonyme assembla ensemble des morceaux
                de texte pour réaliser un livre spécimen de polices de texte. Il
                n'a pas fait que survivre cinq siècles, mais s'est aussi adapté
                à la bureautique informatique, sans que son contenu n'en soit
                modifié. Il a été popularisé dans les années 1960 grâce à la
                vente de feuilles Letraset contenant des passages du Lorem
                Ipsum, et, plus récemment, par son inclusion dans des
                applications de mise en page de texte, comme Aldus PageMaker.
              </Text>
            </View>
            <Text style={styles.text}>Date de création : 04/05/23</Text>
            <View>
              <Text style={{...styles.text, marginBottom: 5}}>Adresse</Text>
              <Image style={styles.maps} source={mapsImage} />
            </View>
            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Effectuer cette tâche</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Taskdetails;

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
  maps: {},
  button: {
    backgroundColor: Colors.blue,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    textTransform: 'capitalize',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
