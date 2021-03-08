import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button, Alert, Image } from 'react-native';
import Header from '../components/Header';
class QRflash extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    navigation={this.props.navigation}></Header>

                <Image
                    source={{uri:'https://upload.wikimedia.org/wikipedia/commons/7/78/Qrcode_wikipedia_fr_v2clean.png'}}
                    style={{width: 420, height: 420, marginTop: 20}}
                />
                <View style={styles.temp}>
                    <Button
                        title="bon QR code"
                        onPress={() => goodQR(this.props.navigation)
                        }
                    />
                    <Button
                        title="mauvais QR code"
                        onPress={() => badQR("mauvais QR code :(")}
                        color="#D59312" />
                </View>

                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
    },
    temp: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

function goodQR(navigation) {
    navigation.navigate('CodeDetails');
};

function badQR(msg) {
    Alert.alert("ERREUR : " + msg);
};

export default QRflash;
