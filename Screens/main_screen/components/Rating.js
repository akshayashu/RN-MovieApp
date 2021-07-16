import React from 'react';
import { StatusBar, Text, View, Button, TextInput, Image } from 'react-native';
import { styles, colors } from '../../../Style';
import { Component } from 'react';

export class Rating extends Component{

    constructor(props){
        super(props);

        this.state ={    
        }

    }
    render(){
        let ratings = [
            <Image key='0' style={styles.ratingStar} source={{uri: 'https://img.icons8.com/color/28/000000/star--v1.png'}}></Image>,
            <Image key='1' style={styles.ratingStar} source={{uri: 'https://img.icons8.com/color/28/000000/star--v1.png'}}></Image>,
            <Image key='2' style={styles.ratingStar} source={{uri: 'https://img.icons8.com/color/28/000000/star--v1.png'}}></Image>,
            <Image key='3' style={styles.ratingStar} source={{uri: 'https://img.icons8.com/color/28/000000/star--v1.png'}}></Image>,
            <Image key='4' style={styles.ratingStar} source={{uri: 'https://img.icons8.com/color/28/000000/star--v1.png'}}></Image>
        ];

        for(let i = 0; i < this.props.rating; i++){
            ratings[i] = <Image key={i} style={styles.ratingStar} source={{uri: 'https://img.icons8.com/fluent/28/000000/star.png'}}/>
        }
        return(
            <View style={styles.ratingSection}>
                {ratings}
            </View>
        )
    }
}