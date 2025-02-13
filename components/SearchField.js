import React, { useState } from 'react';
import { StyleSheet, TextInput, View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';
import SPACING from '../config/SPACING';

const SearchField = ({ coffeeList }) => {
  const [query, setQuery] = useState("");
  const [filteredCoffees, setFilteredCoffees] = useState([]);
  const navigation = useNavigation(); // React Navigation'dan gelen hook

  const handleSearch = (text) => {
    setQuery(text);
    if (text.trim().length > 0) {
      const filtered = coffeeList.filter((coffee) =>
        coffee.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredCoffees(filtered);
    } else {
      setFilteredCoffees([]);
    }
  };

  return (
    <View style={{ borderRadius: SPACING, overflow: "hidden" }}>
      <BlurView
        intensity={30}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Find Your Coffee..."
          placeholderTextColor={colors.light}
          value={query}
          onChangeText={handleSearch}
        />
        <Ionicons
          style={styles.icon}
          name="search"
          color={colors.light}
          size={SPACING * 2}
        />
      </BlurView>
      {filteredCoffees.length > 0 && (
        <FlatList
          data={filteredCoffees}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CoffeeDetailsScreen", { coffee: item })}
              style={styles.itemContainer}
            >
              <Image
                source={item.image}
                style={styles.itemImage}
              />
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    color: colors.white,
    fontSize: SPACING * 1.7,
    padding: SPACING,
    paddingLeft: SPACING * 3.5,
  },
  icon: {
    position: "absolute",
    left: SPACING,
  },
  listContainer: {
    backgroundColor: colors.dark,
    borderRadius: SPACING / 2,
    marginTop: SPACING,
    padding: SPACING,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: SPACING,
  },
  itemText: {
    color: colors.white,
    fontSize: SPACING * 1.5,
  },
});