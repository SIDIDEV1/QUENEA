import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import HomeScreen from './src/screens/home/HomeScreen';
import SearchSreen from './src/screens/search/SearchSreen';
import SettingScreen from './src/screens/profil/SettingScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from './src/constants/Colors';
import Taskdetails from './src/screens/Task/Taskdetails';

const HomeStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="TaskDetails"
        component={Taskdetails}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchSreen} />
    </SearchStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingScreen} />
    </SettingsStack.Navigator>
  );
}

function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'SearchStack') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'SettingsStack') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.blue,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{tabBarLabel: 'Accueil'}}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStackScreen}
        options={{tabBarLabel: 'Rechercher'}}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStackScreen}
        options={{tabBarLabel: 'Profil'}}
      />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default App;
