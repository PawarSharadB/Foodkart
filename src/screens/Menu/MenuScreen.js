import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet, FlatList} from 'react-native';
// Components
import MenuItem from '../../components/MenuItem/MenuItem';
// API
import {fetchMenuItems} from '../../Redux/slices/menuSlice';
import {addItemToCart} from '../../Redux/slices/cartSlice';

const MenuScreen = () => {
  const dispatch = useDispatch();
  const {items, status, error} = useSelector(state => state.menu);

  useEffect(() => {
    dispatch(fetchMenuItems());
  }, [dispatch]);

  const handleAddToCart = ({name, price, description, image, category, id}) => {
    dispatch(addItemToCart({name, price, description, image, category, id}));
  };

  const renderItem = ({item}) => (
    <MenuItem buttonTitle="Add To Cart" onPress={handleAddToCart} {...item} />
  );

  return (
    <View style={styles.container}>
      {status === 'loading' && <Text style={styles.loading}>Loading...</Text>}
      {status === 'failed' && <Text>Error: {error}</Text>}
      {status === 'succeeded' && (
        <FlatList
          data={items.items}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  loading: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default MenuScreen;
