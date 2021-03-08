import React from 'react'
import { View, Text, Button, Pressable, Image } from 'react-native'
import { IconButton, Colors } from 'react-native-paper';


class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Pressable onPress={() => {this.props.navigation.navigate('Home')}}>
                <Image
                    source={require('../assets/gostyle-full-final-v23.png')}
                    style={{width: 337, height: 75, marginTop: 12}}
                />
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
    header: {
        flexDirection: 'row',
        width: "100%",
        height: 100,
        backgroundColor: '#281F42',
        justifyContent: 'space-between',
    },
    icon: {
        marginTop: 25,
        marginRight: 15,
    }
};

export default Header;