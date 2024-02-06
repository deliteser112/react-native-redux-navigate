import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {useContextValue} from '../../context';
import styles from '../../styles/styles';

function HistoryList(): JSX.Element {
  const {history, showHistory, onChangeText, searchPhotos, setSearchText} =
    useContextValue();
  // Render History Item
  const renderHistory = (item: {item: string}) => {
    if (item.item) {
      return (
        <TouchableOpacity onPress={() => onSelectHistory(item)}>
          <Text style={styles.historyItem}>{item.item}</Text>
        </TouchableOpacity>
      );
    } else {
      return <></>;
    }
  };

  // Click the item of history
  const onSelectHistory = (item: {item: any}) => {
    if (onChangeText && searchPhotos) {
      onChangeText(item.item);
      setSearchText(item.item);
      searchPhotos();
    }
  };
  return (
    <>
      {showHistory ? (
        <FlatList
          style={styles.historyList}
          data={history}
          renderItem={renderHistory}
          keyExtractor={item => item}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default HistoryList;
