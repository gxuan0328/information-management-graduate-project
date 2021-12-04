import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import CreatRoom from './src/CreatRoom';
import RoomMember from './src/RoomMember';
import MainView from './src/MainView';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SmallMap from './src/SmallMap';
import police_page_final from './Attractions_page/police_page/police_page_final';
import school_page_final from './Attractions_page/school_page/school_page_final';
import station_page_final from './Attractions_page/station_page/station_page_final';
import temple_page_final from './Attractions_page/temple_page/temple_page_final';
import woodpecker_page_final from './Attractions_page/woodpecker_page/woodpecker_page_final';
import GameStory from './src/GameStory'
import Gift from './src/Gift'
import Game from './src/GameMap';
import PhotoAlbum_1 from './src/PhotoAlbum_1';
import PhotoAlbum_2 from './src/PhotoAlbum_2';
import PhotoAlbum_3 from './src/PhotoAlbum_3';
import GameSuccessPassPage from './src/GameSuccessPassPage';
import GameFailPassPage from './src/GameFailPassPage';
import bad_event_page_1 from './Attractions_page/Bad_event/bad_event_page_1'
import bad_event_page_2 from './Attractions_page/Bad_event/bad_event_page_2'
import bad_event_page_3 from './Attractions_page/Bad_event/bad_event_page_3'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class app extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="CreatRoom" component={CreatRoom} options={{ headerShown: false }} />
          <Stack.Screen name="RoomMember" component={RoomMember} options={{ headerShown: false }} />
          <Stack.Screen name="GameStory" component={GameStory} options={{ headerShown: false }} />
          <Stack.Screen name="MainView" component={MainView} options={{ headerShown: false }} />
          <Stack.Screen name="Game" component={Game} options={{ headerShown: false }} />
          <Stack.Screen name="Gift" component={Gift} options={{ headerShown: false }} />
          <Stack.Screen name="SmallMap" component={SmallMap} options={{ headerShown: false }} />
          <Stack.Screen name="police_page_final" component={police_page_final} options={{ headerShown: false }} />
          <Stack.Screen name="school_page_final" component={school_page_final} options={{ headerShown: false }} />
          <Stack.Screen name="station_page_final" component={station_page_final} options={{ headerShown: false }} />
          <Stack.Screen name="temple_page_final" component={temple_page_final} options={{ headerShown: false }} />
          <Stack.Screen name="woodpecker_page_final" component={woodpecker_page_final} options={{ headerShown: false }} />
          <Stack.Screen name="PhotoAlbum_1" component={PhotoAlbum_1} options={{ headerShown: false }} />
          <Stack.Screen name="PhotoAlbum_2" component={PhotoAlbum_2} options={{ headerShown: false }} />
          <Stack.Screen name="PhotoAlbum_3" component={PhotoAlbum_3} options={{ headerShown: false }} />
          <Stack.Screen name="GameSuccessPassPage" component={GameSuccessPassPage} options={{ headerShown: false }} />
          <Stack.Screen name="GameFailPassPage" component={GameFailPassPage} options={{ headerShown: false }} />
          <Stack.Screen name="bad_event_page_1" component={bad_event_page_1} options={{ headerShown: false }} />
          <Stack.Screen name="bad_event_page_2" component={bad_event_page_2} options={{ headerShown: false }} />
          <Stack.Screen name="bad_event_page_3" component={bad_event_page_3} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>

    );

  }
}