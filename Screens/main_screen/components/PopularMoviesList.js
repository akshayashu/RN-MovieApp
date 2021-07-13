import React from 'react';
import { Text, View, Button, TextInput, ScrollView } from 'react-native';
import { styles, colors } from '../../../Style';
import PopularMoviesItem from './PopularMoviesItem';

export default class PopularMoviesList extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        let data = this.props.list;
        let rows = [];

        for(let i of data){
            rows.push(<PopularMoviesItem key={i.sno} data={i}/>)
        }
        return(
            <View style={styles.movieRowContainer}>
                <ScrollView
                horizontal={true}>
                    {rows}
                </ScrollView>
            </View>
        );
    }
}