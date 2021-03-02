import React from 'react'
import { View, Text } from 'react-native'

class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.white}>GoStyle App</Text>
            </View>
        )
    }
}

const styles = {
    white: {
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
    }
};

export default Header;