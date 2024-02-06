/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../../../styles/styles';
import {useContextValue} from '../../../context';
function SearchButton(): JSX.Element {
  const {text, setSearchText, searchPhotos} = useContextValue();
  return (
    <TouchableOpacity
      style={styles.searchButton}
      onPress={() => {
        if (setSearchText && text) {
          setSearchText(text);
        }
        if (searchPhotos) {
          searchPhotos();
        }
      }}>
      <Text style={{color: 'white'}}>Search</Text>
    </TouchableOpacity>
  );
}

export default SearchButton;
