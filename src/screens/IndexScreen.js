import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';

const IndexScreen = ({ navigation }) => {
    return (
        <>
            <Text style={ styles.header }>IndexScreen</Text>
            <Button 
                title="Go To HomeScreen"
                onPress={ ()=>navigation.navigate('Home') }
            />
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 32
    }
});

export default IndexScreen;