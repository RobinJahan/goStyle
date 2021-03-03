import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

import Header from '../components/Header';

class Authentification extends React.Component {
    state = {
        email: '',
        password: '',
        nom: '',
        prenom: '',
        date_naissance: null,
        id_magasin: null,
        newEmail: '',
        newPassword: '',

    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    handleNom = (text) => {
        this.setState({ nom: text })
    }
    handlePrenom = (text) => {
        this.setState({ prenom: text })
    }
    handleDateNaissance = (date) => {
        this.setState({ date_naissance: date })
    }
    handleIdMagasin = (id) => {
        this.setState({ id_magasin: id })
    }
    handleNewEmail = (text) => {
        this.setState({ newEmail: text })
    }
    handleNewPassword = (text) => {
        this.setState({ newPassword: text })
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    navigation={this.props.navigation}></Header>

                <Text style={styles.title}>Connexion</Text>

                <TextInput style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#DDDDDD"
                    onChangeText={this.handleEmail} />

                <TextInput style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#DDDDDD"
                    onChangeText={this.handlePassword} />

                <Button
                    title="Connexion"
                    onPress={() => auth(this.props.navigation, this.state)}
                    color="#D59312"
                />

                <Text style={styles.title}>Inscription</Text>
                
                <TextInput style={styles.input}
                    placeholder="nom"
                    placeholderTextColor="#DDDDDD"
                    onChangeText={this.handleNom} />

                <TextInput style={styles.input}
                    placeholder="prenom"
                    placeholderTextColor="#DDDDDD"
                    onChangeText={this.handlePrenom} />

                <TextInput style={styles.input}
                    placeholder="date de naissance (mettre date)"
                    placeholderTextColor="#DDDDDD"
                    onChangeText={this.handleDateNaissance} />

                <TextInput style={styles.input}
                    placeholder="magasin préféré (mettre un select)"
                    placeholderTextColor="#DDDDDD"
                    onChangeText={this.handleIdMagasin} />
                
                <TextInput style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#DDDDDD"
                    onChangeText={this.handleNewEmail} />

                <TextInput style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#DDDDDD"
                    onChangeText={this.handleNewPassword} />

                <Button
                    title="Insciption"
                    onPress={() => inscription(this.props.navigation, this.state)}
                    color="#D59312"
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
    title: {
        marginTop: 18,
        textAlign: 'center',
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        marginLeft: 12,
        marginTop: 8
    },
});
export default Authentification;

function auth(navigation, state) {
    Alert.alert("email : " + state.email + ", mdp : " + state.password);
    navigation.navigate('Home');
}

function inscription(navigation, state) {
    Alert.alert("email : " + state.newEmail + ", mdp : " + state.newPassword + ", prenom : " + state.prenom + ", nom : " + state.nom);
    navigation.navigate('Home');
}