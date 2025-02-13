import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Animated, ScrollView } from 'react-native';
import SPACING from '../config/SPACING';
import colors from '../config/colors';
import Menu from '../components/Menu';
import Header from '../components/Header';
import SearchField from '../components/SearchField';
import Categories from '../components/Categories';
import CoffeeList from '../components/CoffeeList';
import coffees from '../config/coffees';

const HomeScreen = ({ navigation }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuHeight] = useState(new Animated.Value(0));

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(menuHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(menuHeight, {
        toValue: 150,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleHomePageClick = () => {
    setActiveCategoryId(null);
    setActiveMenu(null);
    Animated.timing(menuHeight, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setMenuVisible(false));
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    Animated.timing(menuHeight, {
      toValue: menu === 'iletisim' || menu === 'hakkimizda' ? 300 : 150,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const filteredCoffees = activeCategoryId
    ? coffees.filter((coffee) => coffee.categoryId === activeCategoryId)
    : coffees;

  const handleCategoryChange = (id) => {
    setActiveCategoryId(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header toggleMenu={toggleMenu} />
      <Animated.View style={[styles.menuContainer, { height: menuHeight }]}>
        {menuVisible && (
          <Menu
            setActiveMenu={handleMenuClick}
            handleHomePageClick={handleHomePageClick}
          />
        )}
        {activeMenu && (
          <View style={styles.menuContent}>
            {activeMenu === 'iletisim' && (
              <View style={styles.menuInfo}>
                <Text style={styles.menuContentText}>
                  Telefon numarası: 0500 00 00 00{'\n'}
                  Email: Coffeai@coffeai.com
                </Text>
              </View>
            )}
            {activeMenu === 'ulasim' && (
              <View style={styles.menuInfo}>
                <Text style={styles.menuContentText}>
                  Adres: Kahve Sokak No:1, Kahve Şehri{'\n'}
                  Telefon: 0500 00 00 01
                </Text>
              </View>
            )}
            {activeMenu === 'hakkimizda' && (
              <View style={styles.menuInfo}>
                <Text style={styles.menuContentText}>
                  CoffeAI, kaliteli kahve çekirdeklerini inceleme seçenekleri,
                  uzman baristalarımızla mükemmel kahve sunar.  Sürdürülebilirlik prensibiyle,
                  doğrudan kahve çiftliklerinden taze çekirdek temin ediyoruz.
                </Text>
              </View>
            )}
          </View>
        )}
      </Animated.View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.welcomeText}>Welcome to Coffee AI</Text>
        <SearchField coffeeList={coffees} navigation={navigation} />
        <Categories onChange={handleCategoryChange} />
        <CoffeeList data={filteredCoffees} numColumns={2} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    marginTop:"5%"
  },
  scrollContent: {
    paddingHorizontal: SPACING,
    paddingTop: SPACING * 2,
    paddingBottom: SPACING * 10,
  },
  welcomeText: {
    color: colors.white,
    fontSize: SPACING * 3.5,
    fontWeight: '600',
  },
  menuContainer: {
    overflow: 'hidden',
    backgroundColor: colors.dark,
    marginHorizontal: SPACING,
    borderRadius: SPACING,
    marginBottom: SPACING,
  },
  menuContent: {
    paddingHorizontal: SPACING,
    paddingVertical: SPACING,
  },
  menuContentText: {
    color: colors.white,
    fontSize: SPACING * 1.5,
  },
  menuInfo: {
    padding: SPACING,
    backgroundColor: "#022b3a",
    borderRadius: 11,
    marginTop: SPACING,
  },
});

export default HomeScreen;