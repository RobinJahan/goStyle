import React from 'react'
import { View, Text, Button } from 'react-native'

class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Button title='connexion' onPress={() => this.props.navigation.navigate('Authentification')} color="#D59312" style={styles.btn}/>
            </View>
        )
    }
}

const styles = {
    title: {
        marginTop: 30,
        marginLeft: 15,
        fontWeight: 'bold',
        fontSize: 30,
        color: '#FFF',
    },
    header: {
        flexDirection: 'row',
        width: "100%",
        height: 100,
        backgroundColor: '#daa520',
        justifyContent: 'space-between',
    },
    btn: {
        //ne marche pas
    }
};

export default Header;