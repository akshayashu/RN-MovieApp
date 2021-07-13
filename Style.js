import { StyleSheet } from "react-native";

export const colors = {
    darkBg: '#222',
    lightBg: '#333',
    darkHl: '#666',
    lightHl: '#888',
    orange: '#D63446',
    text: '#fff',
    textSec: '#aaa'
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg,
    },
    centreContainer: {
        justifyContent: 'center',
    },
    button: {
        width: 200,
        height: 50,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    }, 
    titleText: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        margin: 30,
        marginLeft: 20
    },
    sectionContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between', 
        marginTop: 10
    },
    sectionTextTitle: {
        color: colors.text,
        fontSize: 22,
        marginTop: 10,
        marginLeft: 20
    },
    sectionTextSmall: {
        color: colors.orange,
        fontSize: 12,
        marginTop: 10,
        marginRight: 10,
        fontWeight: '100'
    },
    searchBar: {
        color: 'white',
        width : '80%',
        justifyContent: 'center',
        alignSelf: 'center',
        height: 40,
        backgroundColor: colors.lightHl,
        borderRadius: 15,
        padding: 10, 
        borderColor: 'white',
        borderWidth: 0.5
    },
    movieRowContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    movieItem: {
        margin: 10,
        borderRadius: 15,
        width: 210,
        backgroundColor: colors.orange
    }, 
    movieImage: {
        width: 210,
        height: 250,
        borderRadius:15
    },
    moviesDetailSection: {
        position: 'absolute',
        paddingStart: 10,
        paddingBottom: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(92, 92, 92, 0.75)',
    },
    movieTitle: {
        paddingStart: 10,
        paddingBottom: 5,
        fontSize: 14,
        color: colors.text
    }
})