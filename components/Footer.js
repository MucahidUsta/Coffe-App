import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';
import SPACING from '../config/SPACING';

const Footer = ({ coffee }) => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.priceContainer}>
        <Text style={styles.priceLabel}>Price</Text>
        <View style={styles.priceValueContainer}>
          <Text style={styles.priceSymbol}>$</Text>
          <Text style={styles.priceValue}>{coffee.price}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: SPACING,
  },
  priceContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: SPACING * 3,
  },
  priceLabel: {
    color: colors.white,
    fontSize: SPACING * 1.5,
  },
  priceValueContainer: {
    flexDirection: "row",
  },
  priceSymbol: {
    color: colors.primary,
    fontSize: SPACING * 2,
  },
  priceValue: {
    color: colors.white,
    fontSize: SPACING * 2,
    marginLeft: SPACING / 2,
  },
  buyButton: {
    marginRight: SPACING,
    backgroundColor: colors.primary,
    width: width / 2 + SPACING * 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SPACING * 2,
  },
  buyButtonText: {
    color: colors.white,
    fontSize: SPACING * 2,
    fontWeight: "700",
  },
});

export default Footer;