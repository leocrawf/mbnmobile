/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import COLORS from '../../constants/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Categories({categories, setSelected}) {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const setSelectedCategory = i => {
    setSelectedCategoryIndex(i);
    setSelected(i);
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesListContainer}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => setSelectedCategory(index)}>
          <View
            style={{
              backgroundColor:
                selectedCategoryIndex === index ? COLORS.primary : COLORS.grey,
              ...styles.categoryBtn,
            }}>
            <View style={styles.categoryIcon}>
              {category.iconProvider === 'AntDesign' && (
                <AntDesign
                  name={category.icon}
                  size={20}
                  color={
                    selectedCategoryIndex === index
                      ? COLORS.primary
                      : COLORS.grey
                  }
                />
              )}
              {category.iconProvider === 'MaterialCommunityIcons' && (
                <MaterialCommunityIcons
                  name={category.icon}
                  size={20}
                  color={
                    selectedCategoryIndex === index
                      ? COLORS.primary
                      : COLORS.grey
                  }
                />
              )}
              {category.iconProvider === 'FontAwesome' && (
                <FontAwesome
                  name={category.icon}
                  size={20}
                  color={
                    selectedCategoryIndex === index
                      ? COLORS.primary
                      : COLORS.grey
                  }
                />
              )}
              {category.iconProvider === 'FontAwesome5' && (
                <FontAwesome5
                  name={category.icon}
                  size={20}
                  color={
                    selectedCategoryIndex === index
                      ? COLORS.primary
                      : COLORS.grey
                  }
                />
              )}
              {category.iconProvider === 'Ionicons' && (
                <Ionicons
                  name={category.icon}
                  size={20}
                  color={
                    selectedCategoryIndex === index
                      ? COLORS.primary
                      : COLORS.grey
                  }
                />
              )}
            </View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                marginLeft: 10,
                color:
                  selectedCategoryIndex === index ? COLORS.white : COLORS.light,
              }}>
              {category.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categoriesListContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    minWidth: 130,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryIcon: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
});
