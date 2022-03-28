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
import Onboard from './Onboard.js';
import OnboardTest from './OnboardTest.js'

import Tab1 from './TabOne';
import Tab2 from './TabTwo';
import Tab3 from './TabThree';

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
      <NavigationContainer>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='information-circle' />
            </Button>
            <Button transparent>
              <Icon name='ellipsis-vertical' />
            </Button>
          </Right>
        </Header>
        <Header hasTabs>
          <Tabs
          tabContainerStyle={{
            elevation:0
          }}>
          <Tab heading="Daily Graph">
            <Tab1 />
          </Tab>
          <Tab heading="Time In Target">
            <Tab2 />
          </Tab>
          <Tab heading="Low Gl Events">
            <Tab3 />
          </Tab>
        </Tabs>
        </Header>

        <Content>
          <View>
              <LineChart
              data={{
                labels: ["15:00", "18:00", "21:00", "00:00", " "],
                datasets: [
                  {
                    data: 
                    [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]
                  }
                ]
              }}
              height={Dimensions.get("window").height + 1}
              width={Dimensions.get("window").width + 1}
              //height={675}
              //width={395}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#5067FF",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                fillShadowGradient: "#5067FF",
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#FFFFFF"
                }
              }}
              />
          </View>
        </Content>
      
        
        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{bottom : 70, elevation : 0 }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="add-outline" />
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="eyedrop-outline" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="pizza-outline" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="bicycle-outline" />
            </Button>
        
        </Fab>

        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="" />
              <Text>3 HOURS</Text>
            </Button>
            <Button vertical>
                <Icon name="" />
                <Text>6 HOURS</Text>
            </Button>
            <Button vertical>
              <Icon active name="" />
              <Text>12 HOURS</Text>
            </Button>
          </FooterTab>
        </Footer>
      </NavigationContainer>
    );
  }
}
