import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import SPACING from '../config/SPACING';
import CoffeeItem from './CoffeeItem';

const CoffeeList = ({ data, numColumns }) => {
  return (
    <FlatList
      key={numColumns} // Change the key to force a re-render when numColumns changes
      data={data}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
      numColumns={numColumns}
      renderItem={({ item }) => <CoffeeItem item={item} />}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: SPACING,
    paddingBottom: SPACING * 10, // Add some padding at the bottom to ensure all items are fully visible
  },
});

export default CoffeeList;