import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View } from 'react-native';

import PostsScreen from '../Screens/PostsScreen';
import CreatePostsScreen from '../Screens/CreatePostsScreen';
import ProfileScreen from '../Screens/ProfileScreen';

import { useNavigation } from '@react-navigation/native';

import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';


const BottomTab = createBottomTabNavigator();

export const BottomMenu = () => {
  const navigation = useNavigation();

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 80, justifyContent: 'center' },
        headerTitleAlign: 'center',

        headerRightContainerStyle: { paddingRight: 16, paddingBottom: 9 },
        headerLeftContainerStyle: { paddingLeft: 16, paddingBottom: 9 },
      }}
    >
      <BottomTab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: focused ? '#FF6C00' : '#FFFFFF',
                width: 70,
                height: 40,
                borderRadius: 20,
              }}
            >
              <Ionicons
                name="grid-outline"
                size={20}
                color={'#212121'}
                strokeOpacity={0.8}
                // stroke={focused ? '#FFFFFF' : '#212121'}
              />
              {/* <Grid
                size={size}
                color={color}
                strokeOpacity={0.8}
                stroke={focused ? '#FFFFFF' : '#212121'}
              /> */}
            </View>
          ),
          headerRight: ({ focused, size, color }) => (
            <TouchableOpacity>
              <Feather name="log-out" size={24} color={'#BDBDBD'} />
              {/* <Logout size={size} color={color} /> */}
            </TouchableOpacity>
          ),
        }}
      />
      <BottomTab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FF6C00',
                width: 70,
                height: 40,
                borderRadius: 20,
              }}
            >
              <AntDesign
                name="plus"
                size={size}
                color={'#FFFFFF'}
                fillOpacity={0.8}
                fill={'#FFFFFF'}
              />
              {/* <Plus
                size={size}
                color={color}
                fillOpacity={0.8}
                fill={focused ? '#FFFFFF' : '#212121'}
              /> */}
            </View>
          ),
          headerLeft: ({ focused, size, color }) => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color={color} />
              {/* <Left size={size} color={color} /> */}
            </TouchableOpacity>
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: focused ? '#FF6C00' : '#FFFFFF',
                width: 70,
                height: 40,
                borderRadius: 20,
              }}
            >
              <Feather
                name="user"
                size={size}
                color={'#212121'}
                stroke={focused ? '#FFFFFF' : '#212121'}
              />
              {/* <User
                size={size}
                color={color}
                stroke={focused ? '#FFFFFF' : '#212121'}
              /> */}
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};