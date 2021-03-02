import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Promotion from './components/Promotion.js';
import data from './helpers/dataPromotions';
import Header from './components/Header';


export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <StatusBar style="auto" />
      <FlatList
        data={data}
        renderItem={({ item }) => <Promotion
        id={ item.id }
        nom={ item.nom }
        description={ item.description }
        mentionLegal={ item.mentionLegal }
        dateDebut={ item.dateDebut }
        dateFin={ item.dateFin }
      ></Promotion>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
  },
});
