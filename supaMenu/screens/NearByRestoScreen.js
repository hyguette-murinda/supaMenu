import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

const restaurants = [
  { name: 'Restaurant 1', location: 'Kigali, Rwanda' },
  { name: 'Restaurant 2', location: 'Nairobi, Kenya' },
  { name: 'Restaurant 3', location: 'Cape Town, South Africa' },
  { name: 'Restaurant 4', location: 'Accra, Ghana' },
  { name: 'Restaurant 5', location: 'Lagos, Nigeria' },
  { name: 'Restaurant 6', location: 'Dar es Salaam, Tanzania' },
];

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {restaurants.map((restaurant, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.location}>{restaurant.location}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
  },
  item: {
    padding: 20,
    marginTop: 5,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
  },
});

export default App;
