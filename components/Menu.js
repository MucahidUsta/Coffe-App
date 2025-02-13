import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import colors from '../config/colors';
import SPACING from '../config/SPACING';

const Menu = ({ setActiveMenu, handleHomePageClick }) => {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuItem} onPress={handleHomePageClick}>
        <Text style={styles.menuText}>Ana Sayfa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => setActiveMenu('iletisim')}>
        <Text style={styles.menuText}>İletişim</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => setActiveMenu('ulasim')}>
        <Text style={styles.menuText}>Ulaşım</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => setActiveMenu('hakkimizda')}>
        <Text style={styles.menuText}>Hakkımızda</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    padding: SPACING,
    backgroundColor: "#022b3a",
    borderRadius: 11,
  },
  menuItem: {
    paddingVertical: SPACING,
    paddingHorizontal: SPACING * 2,
  },
  menuText: {
    color: colors.white,
    fontSize: SPACING * 2,
    fontWeight: '600',
  },
});

export default Menu;