import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';
import SPACING from '../config/SPACING';

const avatar = require('../../assets/kcc.png');

const Header = ({ toggleMenu }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <BlurView style={styles.menuIcon}>
          <Ionicons name="menu" size={SPACING * 2.5} color={colors.secondary} />
        </BlurView>
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <BlurView style={styles.profileIcon}>
          <Image style={styles.profileImage} source={avatar} />
        </BlurView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING,
    paddingTop: SPACING * 2,
  },
  menuButton: {
    borderRadius: SPACING,
    overflow: 'hidden',
    width: SPACING * 4.5,
    height: SPACING * 4.5,
    zIndex: 2,
  },
  menuIcon: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    width: SPACING * 6,
    height: SPACING * 6,
    overflow: 'hidden',
    borderRadius: SPACING,
  },
  profileIcon: {
    height: '100%',
    padding: SPACING / 2,
  },
  profileImage: {
    height: '100%',
    width: '100%',
    borderRadius: SPACING,
  },
});

export default Header;