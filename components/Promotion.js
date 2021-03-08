import React from 'react'
import { View, Text, Button } from 'react-native'

class Promotion extends React.Component {
    render() {
        return (
            <View style={styles.promotion}>
                <Text style={styles.title}>{this.props.id} - {this.props.nom}</Text>
                <Text style={styles.description}>{this.props.description}</Text>
                <Text style={styles.petit}>mention légal : {this.props.mentionLegal}</Text>
                <Text style={styles.petit}>valable du : {this.props.dateDebut} au {this.props.dateFin} inclu</Text>
                <Button title='Flasher mon code'  onPress={() => this.props.navigation.navigate('QRflash')} color="#E1903A"/>
            </View>
        )
    }
}

const styles = {
    promotion: {
        marginTop: 10,
        backgroundColor: '#555',
        width: '80%',
        marginLeft: '10%',
        padding: 10,
    },
    title:{
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    description:{
        color: '#FFF',
        marginTop:10,
    },
    petit:{
        color: '#FFF',
        fontSize: 8,
    }
};


export default Promotion;