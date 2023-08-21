import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
// Redux
import {removeItemFromCart} from '../../Redux/slices/cartSlice';
// Components
import MenuItem from '../../components/MenuItem/MenuItem';

const TotalPrice = ({items}) => {
  const itemSubtotal = items.reduce((total, item) => total + item.price, 0);
  const taxRate = 0.1; // Example tax rate (10%)
  const taxAmount = itemSubtotal * taxRate;
  const grandTotal = itemSubtotal + taxAmount;

  return (
    <View style={styles.totalPriceContainer}>
      <Text style={styles.totalPriceText}>
        Item Subtotal: Rs. {itemSubtotal.toFixed(2)}
      </Text>
      <Text style={styles.totalPriceText}>
        Tax Amount: Rs. {taxAmount.toFixed(2)}
      </Text>
      <Text style={styles.grandTotalText}>
        Item Grand Total: Rs. {grandTotal.toFixed(2)}
      </Text>
    </View>
  );
};

const CartScreen = () => {
  const dispatch = useDispatch();
  const {items} = useSelector(state => state.cart);

  const renderItem = ({item}) => (
    <MenuItem
      buttonTitle="Remove"
      onPress={() => dispatch(removeItemFromCart(item.id))}
      {...item}
    />
  );

  return (
    <View style={styles.container}>
      {items.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
          <TotalPrice items={items} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  totalPriceContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 10,
  },
  totalPriceText: {
    fontSize: 16,
    color: '#555',
  },
  grandTotalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default CartScreen;
