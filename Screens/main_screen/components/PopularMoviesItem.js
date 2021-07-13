import React from 'react';
import { Text, View, Button, Image, TextInput } from 'react-native';
import { styles, colors } from '../../../Style';

export default class PopularMoviesItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const {sno, name, genre, rating} = this.props.data;
        return(
            <View style={styles.movieItem}>
                <Image style={styles.movieImage} source={require('../../../assets/mazeRunner.jpg')}></Image>
                <View style={styles.moviesDetailSection}>
                    {/* <Text style={styles.movieTitle}>{sno}</Text> */}
                    <Text style={styles.movieTitle}>{name}</Text>
                    <Text style={styles.movieTitle}>{genre}</Text>
                    {/* <Text style={styles.movieTitle}>{rating}</Text> */}
                </View>
                
            </View>
        );
    }
}