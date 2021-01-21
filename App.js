import * as React from 'react';
import { store } from './src/Store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "./src/views/Home";
import getStarted from "./components/getStarted";
import detailsScreen from './src/views/DetailsScreen'
import diagnoseScreen from './src/views/Diagnose'
import gardenScreen from './src/views/Garden'
import settingsScreen from './src/views/Settings'

const Tab = createBottomTabNavigator();

const HomeTabs = () =>  {
  return (
        <Tab.Navigator 
          initialRouteName="Home"
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: '#694fad' }}>
            <Tab.Screen
              name="Home"
              component={ Home } 
              options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
          }}
        />
          <Tab.Screen 
            name="Diagnose"
            component={diagnoseScreen}
            options={{
              tabBarLabel: 'Diagnose',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="magnify-scan" color={color} size={26} />
                ),
            }}
          />
          <Tab.Screen 
            name="Garden"
            component={gardenScreen}
            options={{
              tabBarLabel: 'Garden',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="flower" color={color} size={26} />
                ),
            }} 
          />
          <Tab.Screen 
            name="Profile"
            component={settingsScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }} 
          />
        </Tab.Navigator>
  );
}

const Stack  = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }}
          name="GetStarted"
          component={ getStarted }
          />
          <Stack.Screen
          name="Home"
          component={ HomeTabs }
          options={{ headerShown: false }}
          />
          <Stack.Screen 
          name="Details"
          component={ detailsScreen }
          options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


export default App