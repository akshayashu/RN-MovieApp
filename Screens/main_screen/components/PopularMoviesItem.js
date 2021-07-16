import React from 'react';
import { Text, View, Button, Image, TextInput } from 'react-native';
import { styles, colors } from '../../../Style';
import { Rating } from './Rating';

export default class PopularMoviesItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const {sno, name, genre, rating, image_url} = this.props.data;
        return(
            <View style={styles.movieItem}>
                <Image style={styles.movieImage} source={{uri: image_url}}></Image>
                <View style={styles.moviesDetailSection}>
                    {/* <Text style={styles.movieTitle}>{sno}</Text> */}
                    <View style={styles.movieTitleDescSection}>
                        <Text style={styles.movieTitle}>{name}</Text>
                        <Text style={styles.movieDesc}>{genre}</Text>
                    </View>
                    
                    <Rating rating={rating}/>
                </View>
                
            </View>
        );
    }
}