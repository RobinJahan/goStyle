import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import Header from '../components/Header';

class Authentification extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    title="Connexion"
                    navigation={this.props.navigation}></Header>
                <Text>connecte toi !!!</Text>
                <Button
                    title="Connexion"
                    onPress={() => auth(this.props.navigation)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#555',
    },
});
export default Authentification;

function auth(navigation) {
    navigation.navigate('Home');
}