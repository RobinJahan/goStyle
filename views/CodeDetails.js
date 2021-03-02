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
                    title="Code Promo !"
                    navigation={this.props.navigation}></Header>
                <Text> tiens voila ton code : qui veut du caca caki collé au cucu</Text>
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
});


export default CodeDetails;
