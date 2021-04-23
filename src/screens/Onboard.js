import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from 'react-native';
import React from 'react';
import HomeScreen from './HomeScreen';
import Onboarding from 'react-native-onboarding-swiper';



const Onboard = ({ navigation }) => (
  <Onboarding
    onDone={() => navigation.navigate("HomeScreen")}
    pages={[
      {
        backgroundColor: '#5067FF',
        image: <Image source={require('../../assets/logo-resized.png')}  />,
        title: 'Intro Slider Test',
        subtitle: 'This is the first slide, greet your users!',
      },
      {
        backgroundColor: '#5067FF',
        image: <Image source={require('../../assets/logo-resized.png')} />,
        title: 'EULA',
        subtitle: 'Test warning, warns users not to use app as medical advice.',
      },
      {
        backgroundColor: '#5067FF',
        image: <Image source={require('../../assets/logo-resized.png')} />,
        title: 'Test',
        subtitle: "Test",
      },
    ]}
  />
);

export default Onboard;