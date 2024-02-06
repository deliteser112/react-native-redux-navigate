import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from './src/redux/store';
import Main from './src/screens/Main';
import CategoryList from './src/screens/CategoryList';
import Login from './src/screens/Auth';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './src/components/TabBar';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text, View, ScrollView} from 'react-native';
type BottomTabParamList = {
  Main: undefined;
  Trending: undefined;
  Rating: undefined;
  Upcoming: undefined;
  Playing: undefined;
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator<BottomTabParamList>();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      tabBar={props => <TabBar {...props} />}>
      {/* <Tab.Screen name="Main" component={Main} options={{header: () => null}} /> */}
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          headerTitleStyle: {display: 'none'},
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            <TouchableOpacity style={{marginRight: 10}}>
              <Text style={{color: 'red'}}>More</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Playing"
        component={CategoryList}
        initialParams={{categoryName: 'Playing'}}
        options={{headerTitleStyle: {display: 'none'}, headerShown: false}}
      />
      <Tab.Screen
        name="Trending"
        component={CategoryList}
        initialParams={{categoryName: 'Trending'}}
        options={{headerTitleStyle: {display: 'none'}, headerShown: false}}
      />
      <Tab.Screen
        name="Rating"
        component={CategoryList}
        initialParams={{categoryName: 'Rating'}}
        options={{headerTitleStyle: {display: 'none'}, headerShown: false}}
      />
      <Tab.Screen
        name="Upcoming"
        component={CategoryList}
        initialParams={{categoryName: 'Upcoming'}}
        options={{headerTitleStyle: {display: 'none'}, headerShown: false}}
      />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'LoginScreen'}
          screenOptions={{header: () => null}}>
          <Stack.Screen name="LoginScreen" component={Login} />
          <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
