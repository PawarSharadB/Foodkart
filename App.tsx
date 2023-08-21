import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
// Screens
import MenuScreen from './src/screens/Menu/MenuScreen';
import CartScreen from './src/screens/Cart/CartScreen';
// Store
import store from './src/Redux/store';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Menu"
            component={MenuScreen}
            options={{
              tabBarLabel: 'Menu',
              tabBarIcon: () => null,
              tabBarLabelStyle: styles.tabLabel,
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarLabel: 'Cart',
              tabBarIcon: () => null,
              tabBarLabelStyle: styles.tabLabel,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  tabBar: {},
  tabLabel: {
    fontSize: 16,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default App;
