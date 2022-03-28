import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Fab, Drawer, Tab, Tabs, View } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons, MaterialIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from 'react-native';
import AppLoading from 'expo-app-loading';

import Onboarding from 'react-native-onboarding-swiper';
import Simple from './Onboard.js'

import Tab1 from './TabOne';
import Tab2 from './TabTwo';
import Tab3 from './TabThree';
import Onboard from './Onboard.js';


export default class App extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
    
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;

    }

    return (
      <Onboard>
        
      </Onboard>
    );
  }
}
