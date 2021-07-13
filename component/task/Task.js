import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square} ></View>
                <Text style={styles.itemText}>{props.taskName}</Text>
            </View>
            <View style={styles.itemCircle}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'space-between'
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        borderRadius: 5,
        opacity: 0.5,
        marginRight: 10
    },
    itemText: {
        maxWidth: '80%'
    },
    itemCircle: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 10
    }
})

export default Task;