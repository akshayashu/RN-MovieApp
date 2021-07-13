import React from 'react';
import { StatusBar, Text, View, Button, ScrollView } from 'react-native';
import { styles, colors } from '../../Style';
import Header from './components/Header';

export default class MainScreen extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView >
                    <Header/>
                </ScrollView>
            </View> 
        );
    }
}