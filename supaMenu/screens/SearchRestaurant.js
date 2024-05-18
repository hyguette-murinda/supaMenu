import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, TextInput, Text, TouchableOpacity, View, Image, ScrollView, FlatList } from 'react-native';
import { ChevronLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import restaurantData from '../constants/restaurantData';
import { useNavigation } from '@react-navigation/native';
import tailwind from "twrnc";
function SearchRestaurant() {
  const navigation = useNavigation()
  const [showSearchField, toggleSearchField] = useState(true)
  const [restaurants, setRestaurants ] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  useEffect(()=> {
    setRestaurants(restaurantData)
  }, [])
  const handleSearchChange = (query) => {
    setSearchQuery(query)
    //filter items
  }
  return (
      <SafeAreaView style={tailwind`flex flex-1`}>
        <View style={tailwind`flex-row items-center py-2 border-b-1 `}>
              <TouchableOpacity onPress={() => toggleSearchField(!showSearchField)} style={tailwind`rounded-2xl bg-gray-200 p-1 mt-2 mx-4 `}>
                <ChevronLeftIcon color="orange" size={25} />
              </TouchableOpacity>
            <View style={tailwind`flex-row items-center radius-sm py-3`}>
            {showSearchField && (
              <TextInput
                placeholder='Search...'
                placeholderTextColor='gray'
                value={searchQuery}
                onChangeText={handleSearchChange}
                style={tailwind`flex flex-1 text-black px-3 font-bold`}
              />
              )}
            </View>
        </View>
        <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item}) => (
            <TouchableOpacity style={tailwind`mx-4`} onPress={() => navigation.navigate('ProductDetails', {product: item})}>
            <View style={tailwind`flex-1 flex-row bg-gray-200 mt-3 p-3 rounded-2xl`}>
                <View>
                    <Image source={item.image} style={tailwind`w-16 h-16 rounded-2xl`}/>
                </View>
                <View style={tailwind`rounded-2xl px-4`}>
                    <Text style={tailwind`text-gray-500 font-bold my-2`}>{item.name}</Text>
                    <View style={tailwind`flex flex-row`}>
                        <Text style={tailwind`text-gray-500`}>{item.location}, </Text>
                        <Text style={tailwind`text-gray-600`}>{item.dish}</Text>
                    </View>
                </View>
            </View>
          </TouchableOpacity>
        )}
        />
      </SafeAreaView>
  );
}
export default SearchRestaurant;