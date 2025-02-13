import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';
import SPACING from '../config/SPACING';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get("window");

const CoffeeItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.itemContainer}>
      <BlurView tint="dark" intensity={95} style={styles.blurView}>
        <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('CoffeeDetailsScreen', { coffee: item })}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.ratingContainer}>
            <BlurView tint="dark" intensity={70} style={styles.ratingBlur}>
              <Ionicons style={styles.ratingIcon} name="star" color={colors.primary} size={SPACING * 1.7} />
              <Text style={styles.ratingText}>{item.rating}</Text>
            </BlurView>
          </View>
        </TouchableOpacity>
        <Text numberOfLines={2} style={styles.itemName}>{item.name}</Text>
        <Text numberOfLines={1} style={styles.itemIncluded}>{item.included}</Text>
        <View style={styles.priceContainer}>
          <View style={styles.price}>
            <Text style={styles.priceSymbol}>$</Text>
            <Text style={styles.priceValue}>{item.price}</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={SPACING * 2} color={colors.white} />
          </TouchableOpacity>
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: (width - SPACING * 3) / 2, // Adjust width based on numColumns, leaving margin space
    marginBottom: SPACING,
    borderRadius: SPACING * 2,
    overflow: "hidden",
    marginRight: SPACING, // Add space between columns
  },
  blurView: {
    padding: SPACING,
  },
  imageContainer: {
    height: 150,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: SPACING * 2,
  },
  ratingContainer: {
    position: "absolute",
    right: 0,
    borderBottomStartRadius: SPACING * 3,
    borderTopEndRadius: SPACING * 2,
    overflow: "hidden",
  },
  ratingBlur: {
    flexDirection: "row",
    padding: SPACING - 2,
  },
  ratingIcon: {
    marginLeft: SPACING / 2,
  },
  ratingText: {
    color: colors.white,
    marginLeft: SPACING / 2,
  },
  itemName: {
    color: colors.white,
    fontWeight: "600",
    fontSize: SPACING * 1.7,
    marginTop: SPACING,
    marginBottom: SPACING / 2,
  },
  itemIncluded: {
    color: colors.secondary,
    fontSize: SPACING * 1.2,
  },
  priceContainer: {
    marginVertical: SPACING / 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    flexDirection: "row",
  },
  priceSymbol: {
    color: colors.primary,
    marginRight: SPACING / 2,
    fontSize: SPACING * 1.6,
  },
  priceValue: {
    color: colors.white,
    fontSize: SPACING * 1.6,
  },
  addButton: {
    backgroundColor: colors.primary,
    padding: SPACING / 2,
    borderRadius: SPACING,
  },
});

export default CoffeeItem;