import React, { Component} from 'react';
import AppLoading from 'expo-app-loading';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Fab, Drawer, Tab, Tabs } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

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
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        
       
        <Content>
          <Text>
            Content Section
          </Text>
        </Content>
        
        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{bottom : 70 }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
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
            <Button vertical active>
              <Icon active name="" />
              <Text>12 HOURS</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}