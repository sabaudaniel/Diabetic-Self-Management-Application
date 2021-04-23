import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Fab,
  Drawer,
  Tab,
  Tabs,
  View,
} from "native-base";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import * as Font from "expo-font";
import { LineChart } from "react-native-chart-kit";
import { Dimensions, useWindowDimensions } from "react-native";
import AppLoading from "expo-app-loading";

//import Onboarding from "react-native-onboarding-swiper";
//import Onboard from "./Onboard.js";
//import OnboardTest from "./OnboardTest.js";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


export default class HomeScreen extends React.Component  {
  constructor(props)  {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => console.log("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="information-circle" />
            </Button>
            <Button transparent>
              <Icon name="ellipsis-vertical" />
            </Button>
          </Right>
        </Header>

        <Content>
          <View>
            <LineChart
              data={{
                labels: ["15:00", "18:00", "21:00", "00:00", " "],
                datasets: [
                  {
                    data: [0, 0, 0, 0, 0],
                  },
                ],
              }}
              height={screenHeight}
              width={screenWidth}
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
                  r: "5",
                  strokeWidth: "0",
                  stroke: "#5067FF",
                },
              }}
            />
          </View>
        </Content>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ bottom: 70, elevation: 0 }}
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="add-outline" />
          <Button style={{ backgroundColor: "#3B5998" }} onPress={() => navigation.navigate("HomeScreen")} >
            <Icon name="eyedrop-outline" />
          </Button>
          <Button style={{ backgroundColor: "#3B5998" }} onPress={() =>{(console.log("Test food intake"))}} >
            <Icon name="pizza-outline" />
          </Button>
          <Button style={{ backgroundColor: "#3B5998" }} onPress={() =>{(console.log("Exercise input"))}} >
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
      </Container>
    );
  }
  
}
