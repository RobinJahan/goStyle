import React from 'react'
import { View, Text, Button } from 'react-native'

class Promotion extends React.Component {
    render() {
        return (
            <View style={styles.promotion}>
                <Text style={styles.title}>{this.props.nom}</Text>
                <Text style={styles.description}>{this.props.description}</Text>
                <Text style={styles.petit}>mention légal : {this.props.mentionLegal}</Text>
                <Button title='Flasher mon code' onPress={() => { }} color="#D59312"/>
            </View>
        )
    }
}

const styles = {
    promotion: {
        marginTop: 10,
        backgroundColor: '#BBB',
        width: '80%',
        marginLeft: '10%',
        padding: 10,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    description:{
        marginTop:10,
    },
    petit:{
        fontSize: 8,
    }
};


export default Promotion;