import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import Colors from '../../constants/Colors';

const Quiz = ({navigation}: any) => {
  const inset = useSafeAreaInsets();
  const [activeSection, setActiveSection] = useState(null);

  const handleGoback = () => {
    navigation.goBack();
  };

  const toggleSection = (index: any) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <View style={{paddingTop: inset.top, ...styles.container}}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoback}>
            <AntDesign name="arrowleft" size={30} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>AMOIRE AC</Text>
        </View>

        <ScrollView>
          <View style={styles.section}>
            {[...Array(10)].map((_, i) => (
              <Pressable key={i + 1} onPress={() => toggleSection(i)}>
                <View style={styles.listItem}>
                  <Text style={styles.text}>Etat de l'armoire</Text>
                  <Entypo
                    name="chevron-right"
                    size={20}
                    style={{
                      transform: [
                        {rotate: activeSection === i ? '90deg' : '0deg'},
                      ],
                    }}
                  />
                </View>
                {activeSection === i && (
                  <View style={styles.dropDownContent}>
                    <View style={styles.answer}>
                      <Text style={styles.dropDownText}>
                        Etat <Text>*</Text>
                      </Text>
                      <View style={styles.answerOneActions}>
                        <TouchableOpacity style={styles.answerOneAction}>
                          <Text style={styles.answerOneActionText}>Bon</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.answerOneAction}>
                          <Text style={styles.answerOneActionText}>Repris</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.answerOneAction}>
                          <Text style={styles.answerOneActionText}>
                            Non conforme
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View style={styles.answer}>
                      <Text style={styles.dropDownText}>Commentaire</Text>
                      <TextInput
                        editable
                        style={styles.textInput}
                        multiline
                        placeholder="Mettez votre commentaire ici..."
                      />
                    </View>

                    <View style={styles.answer}>
                      <Text style={styles.dropDownText}>Photo</Text>
                      <View style={styles.answerThreeActions}>
                        <TouchableOpacity style={styles.answerThreeAction}>
                          <AntDesign
                            name="camera"
                            size={20}
                            color={Colors.gray}
                          />
                          <Text>Appareil photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.answerThreeAction}>
                          <Foundation
                            name="photo"
                            size={20}
                            color={Colors.gray}
                          />
                          <Text>Galeries</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
                <View style={styles.separator} />
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Quiz;

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
    gap: 10,
    flex: 1,
    paddingBottom: 20,
  },
  text: {
    fontSize: 20,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  separator: {
    backgroundColor: Colors.primary,
    height: 1,
    width: '100%',
  },
  dropDownContent: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    gap: 15,
  },
  answer: {
    gap: 10,
  },
  dropDownText: {},
  answerOneActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  answerOneAction: {
    backgroundColor: Colors.blue,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 15,
  },
  answerOneActionText: {
    fontSize: 15,
    color: Colors.white,
  },
  textInput: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    height: 70,
  },
  answerThreeActions: {
    flexDirection: 'row',
    gap: 20,
  },
  answerThreeAction: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
