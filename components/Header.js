import React from 'react'
import { View, Text, Button, Pressable } from 'react-native'
import { IconButton, Colors } from 'react-native-paper';


class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Pressable onPress={() => {this.props.navigation.navigate('Home')}}>
                <Text style={styles.title}>GoStyle App</Text>
                </Pressable>
                <IconButton
                    style={styles.icon}
                    icon="account"
                    color={Colors.white}
                    size={40}
                    onPress={() => this.props.navigation.navigate('Authentification')}
                />
            </View>
        )
    }
}

const styles = {
    title: {
        marginTop: 35,
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
    icon: {
        marginTop: 30,
        marginRight: 15,
    }
};

export default Header;