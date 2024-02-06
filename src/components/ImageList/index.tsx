/**
 * List of Images
 * @format
 */

import React, {useEffect, useRef} from 'react';
import {FlatList, Image, TouchableWithoutFeedback} from 'react-native';
import {useContextValue} from '../../context';
import styles from '../../styles/styles';
function ImageList(): JSX.Element {
  const {photos, loading, loadMorePhotos, setShowHistory} = useContextValue();
  const listRef = useRef<FlatList>(null);
  useEffect(() => {
    if (photos?.length === 10) {
      listRef.current?.scrollToOffset({offset: 0, animated: true});
    }
  });
  // render each photo
  const renderPhoto = (item: {
    item: {farm: any; server: any; id: any; secret: any};
  }) => {
    if (item.item) {
      // GET fark, server, id ,secret from item
      const {farm, server, id, secret} = item.item;
      // Make image url
      const imageURL = `https://farm${farm}.static.flickr.com/${server}/${id}_${secret}.jpg`;
      return <Image style={styles.photo} source={{uri: imageURL}} />;
    }
    return <></>;
  };

  return (
    <TouchableWithoutFeedback onPress={() => setShowHistory(false)}>
      <FlatList
        data={photos}
        ref={listRef}
        columnWrapperStyle={styles.photoList}
        horizontal={false}
        numColumns={2}
        renderItem={renderPhoto}
        keyExtractor={(item, index) => `${item?.id}${index}`}
        refreshing={loading}
        onEndReached={loadMorePhotos}
        onEndReachedThreshold={0.5}
      />
    </TouchableWithoutFeedback>
  );
}

export default ImageList;
