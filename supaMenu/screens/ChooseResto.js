import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import NearbyRestoCard from './NearbyRestoCard'; // Assuming NearbyRestoCard component is in a separate file

const NearbyRestoScreen = () => {
  // Sample data for demonstration
  const restaurants = [
    { name: 'Restaurant 1', location: 'Kigali, Rwanda', imageSource: require('./restaurant1.jpg') },
    { name: 'Restaurant 2', location: 'Nairobi, Kenya', imageSource: require('./restaurant2.jpg') },
    { name: 'Restaurant 3', location: 'Cape Town, South Africa', imageSource: require('./restaurant3.jpg') },
    { name: 'Restaurant 4', location: 'Accra, Ghana', imageSource: require('./restaurant4.jpg') },
    { name: 'Restaurant 5', location: 'Lagos, Nigeria', imageSource: require('./restaurant5.jpg') },
    { name: 'Restaurant 6', location: 'Dar es Salaam, Tanzania', imageSource: require('./restaurant6.jpg') },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {restaurants.map((restaurant, index) => (
        <NearbyRestoCard
          key={index}
          name={restaurant.name}
          location={restaurant.location}
          imageSource={restaurant.imageSource}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default NearbyRestoScreen;
