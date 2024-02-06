import React from 'react';
import {View, Pressable} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import styles from './style';

const TabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const icon =
          label === 'Main'
            ? 'home'
            : label === 'Playing'
            ? 'playcircleo'
            : label === 'Trending'
            ? 'zap'
            : label === 'Upcoming'
            ? 'device-camera-video'
            : label === 'Rating'
            ? 'hearto'
            : '';

        return (
          <View
            key={index}
            style={[
              styles.mainItemContainer,
              {borderRightWidth: label == 'notes' ? 3 : 0},
            ]}>
            <Pressable onPress={onPress}>
              {label === 'Trending' || label === 'Upcoming' ? (
                <Octicons
                  name={icon}
                  size={30}
                  color={isFocused ? 'red' : 'gray'}
                />
              ) : (
                <AntIcon
                  name={icon}
                  size={30}
                  color={isFocused ? 'red' : 'gray'}
                />
              )}
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default TabBar;
