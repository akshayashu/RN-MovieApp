import React from 'react';
import { StatusBar, Text, View, Button, TextInput } from 'react-native';
import { styles, colors } from '../../../Style';
import PopularMoviesList from './PopularMoviesList';
import axios from 'axios';

export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            pageNumber: 1,
            rating: "all",
            data: []
        };
    }

    searchMovie = (e) => {
        this.setState({
            search: e
        })
    }
    componentDidMount(){

        axios.get('https://nativemovies.free.beeceptor.com/movies').then((res) => {
            console.log(res.data);
            this.setState({
                data: res.data
            })
        })
    }

    render(){
        
        let filterData = this.state.data.filter((movie) => {
            let movieName = movie.name.toLowerCase();
            let search = this.state.search.toLowerCase();

            return movieName.includes(search);
        })

        let finalData = [];
        for (let i = 0; i < filterData.length; i++) {
            finalData.push(filterData[i]);
        }
        return(
            <View>
                <StatusBar barStyle="light-content" />
                <Text style={styles.titleText}>NetPrime Movies</Text>
                <TextInput style={styles.searchBar} placeholder='Search movies' onChangeText={this.searchMovie}></TextInput>
                
                {/* Popular Movies section */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTextTitle}>Popular Around you</Text>
                    <Text style={styles.sectionTextSmall}>View More</Text>
                </View>
                
                <PopularMoviesList list={finalData}/>

                {/* Popular Movies section */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTextTitle}>Weekly Highlights</Text>
                    <Text style={styles.sectionTextSmall}>View More</Text>
                </View>
                <PopularMoviesList list={finalData}/>

                {/* Popular Movies section */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTextTitle}>Comedy</Text>
                    <Text style={styles.sectionTextSmall}>View More</Text>
                </View>
                <PopularMoviesList list={finalData}/>

                {/* Popular Movies section */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTextTitle}>Action</Text>
                    <Text style={styles.sectionTextSmall}>View More</Text>
                </View>
                <PopularMoviesList list={finalData}/>

                {/* Popular Movies section */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTextTitle}>Horror</Text>
                    <Text style={styles.sectionTextSmall}>View More</Text>
                </View>
                <PopularMoviesList list={finalData}/>
            </View>
        );
    }
}