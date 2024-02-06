import React from 'react';
import {View} from 'react-native';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import styles from '../../styles/styles';

function SearchBar(): JSX.Element {
  return (
    <View style={styles.searchBar}>
      <SearchInput />
      <SearchButton />
    </View>
  );
}

export default SearchBar;
