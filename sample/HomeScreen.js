import 'react-native-gesture-handler';
import * as React from 'react';
import {useContext} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContactsScreen from './ContactsScreen';
import GalleryScreen from './GalleryScreen';
import ChattingScreen from './ChattingScreen';
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {

    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={
            require('./drawer.jpg')
          }
          style={{width: 25, height: 25, marginLeft: 10}}
        />
      </TouchableOpacity>
    </View>
  );
};

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  switch (routeName) {
    case 'ContactsScreen':
      return 'Contacts';
    case 'GalleryScreen':
      return 'Gallery';
    case 'ChattingScreen':
      return 'Chat';
    case 'TabStack':
      return 'Contacts';
  }
};

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="ContactsScreen"
      tabBarOptions={{
              //activeTintColor: 'blue',
              //inactiveTintColor: 'gray',
              style: {
                backgroundColor: 'white',
              },
              labelStyle: {
                textAlign: 'center',
                fontSize: 16,
              },
            }}>
      <Tab.Screen
        name="ContactsScreen"
        component={ContactsScreen}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({horizontal, tintColor}) => (
            <Ionicons
                name='person-circle-outline'
                size={horizontal ? 20 : 25}
                //color={{tintColor}}
            />
          ),

        }}
      />
      <Tab.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        options={{
          tabBarLabel: 'Gallery',
          tabBarIcon: ({horizontal, tintColor}) => (
             <Ionicons
                name='image-outline'
                size={horizontal ? 20 : 25}
                //color={{tintColor}}
             />
          ),
        }}
      />
      <Tab.Screen
        name="ChattingScreen"
        component={ChattingScreen}
        options={{
            tabBarLabel: 'Chatting',
            tabBarIcon: ({horizontal, tintColor}) => (
               <Ionicons
                   name='map-outline'
                   size={horizontal ? 20 : 25}
                   //color={{tintColor}}
               />
            ),

        }}
      />
    </Tab.Navigator>
  );
};

const ContactsScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="ContactsScreen">
      <Stack.Screen
        name="Contacts"
        component={TabStack}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: 'white', //Set Header color
          },
          headerTintColor: 'black', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const ProfileScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
          initialRouteName="ProfileScreen"
          screenOptions={{
            headerLeft: () => (
              <NavigationDrawerStructure navigationProps={navigation} />
            ),
            headerStyle: {
              backgroundColor: 'white', //Set Header color
            },
            headerTintColor: 'black', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}>
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
              title: 'My Profile',
            }}
          />
        </Stack.Navigator>
  );
};



const HomeScreen = () => {
  return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: 'black',
          itemStyle: {marginVertical: 5},
        }}>
        <Drawer.Screen
          name="ContactsScreenStack"
          options={{drawerLabel: 'Home'}}
          component={ContactsScreenStack}
        />

        <Drawer.Screen
           name="ProfileScreenStack"
           options={{drawerLabel: 'Profile'}}
           component={ProfileScreenStack}
        />

      </Drawer.Navigator>
  );
};

export default HomeScreen;
