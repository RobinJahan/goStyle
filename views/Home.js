import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Promotion from '../components/Promotion.js';
import data from '../helpers/dataPromotions';
import Header from '../components/Header';
class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header 
                navigation={this.props.navigation}></Header>
                <StatusBar style="auto" />
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Promotion
                        id={item.id}
                        nom={item.nom}
                        description={item.description}
                        mentionLegal={item.mentionLegal}
                        dateDebut={item.dateDebut}
                        dateFin={item.dateFin}
                        navigation={this.props.navigation}
                    ></Promotion>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
    },
});


export default Home;