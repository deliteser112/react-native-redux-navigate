import React, {useRef} from 'react';
import {TextInput} from 'react-native';
import styles from '../../../styles/styles';
import {useContextValue} from '../../../context';

function SearchInput(): JSX.Element {
  const {text, onChangeText, setShowHistory, searchPhotos, setSearchText} =
    useContextValue();
  const textInputRef = useRef(null);
  return (
    <TextInput
      style={styles.searchBox}
      ref={textInputRef}
      value={text}
      onChangeText={onChangeText}
      onSubmitEditing={() => {
        if (searchPhotos) {
          searchPhotos();
        }
        if (setSearchText) {
          setSearchText(text);
        }
      }}
      blurOnSubmit={false}
      onPressIn={() => {
        if (setShowHistory) {
          setShowHistory(true);
        }
      }}
    />
  );
}

export default SearchInput;
