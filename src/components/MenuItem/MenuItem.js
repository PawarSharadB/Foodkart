import React, {memo} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Button from '../Button/Button';

const MenuItem = props => {
  const {
    name,
    price,
    description,
    category,
    image,
    type,
    onPress,
    buttonTitle,
  } = props;
  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
      ) : (
        <View style={styles.placeholderImage}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      )}
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>Price: Rs.{price}</Text>
        {description && (
          <Text numberOfLines={3} style={styles.description}>
            {description}
          </Text>
        )}
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.type}>{type}</Text>
        <Button onPress={() => onPress(props)} title={buttonTitle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    color: '#888',
  },
  type: {
    fontSize: 14,
    color: '#888',
  },
  placeholderImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  placeholderText: {
    color: 'gray',
    fontSize: 14,
  },
});

export default memo(MenuItem);
