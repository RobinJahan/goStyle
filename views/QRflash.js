import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';
import Header from '../components/Header';
class QRflash extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    title="Flash ton code"
                    navigation={this.props.navigation}></Header>

                <Button
                    title="bon QR code"
                    onPress={() => goodQR(this.props.navigation)}
                />
                <Button
                    title="mauvais QR code"
                    onPress={() => badQR("mauvais QR code :(")}
                />

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

function goodQR(navigation) {
    Alert.alert("lol");
};

function badQR(msg) {
    Alert.alert("ERREUR : " + msg);
};

export default QRflash;
