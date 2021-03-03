import { Icon } from 'react-native-vector-icons'

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button, Alert, Text } from 'react-native';
import Header from '../components/Header';
class CodeDetails extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    navigation={this.props.navigation}></Header>
                <View style={styles.card}>
                    <Text>Code : </Text>
                    <Text>qui veut du caca caki collé au cucu</Text>
                </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#555',
    },
    card: {
        marginTop: 10,
        backgroundColor: '#BBB',
        width: '80%',
        marginLeft: '10%',
        padding: 10,
    }
});


export default CodeDetails;
