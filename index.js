// Import a library to help create a component
import React from 'react';
import {AppRegistry, View} from 'react-native.js';
import Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList.js';
// Create a component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render the component to a device
AppRegistry.registerComponent('album', () => App);
