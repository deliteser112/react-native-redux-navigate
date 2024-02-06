import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {RouteProp} from '@react-navigation/native';
import {AnyAction} from 'redux';
import {fetchPosts} from '../../redux/slices/apiSlice';
import {Text, View, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import styles from './styles';

type RootStackParamList = {
  Category: {categoryName: string}; // Define your screen's parameter here
};
type CategoryRouteProp = RouteProp<RootStackParamList, 'Category'>;

const CategoryList = ({route}: {route: CategoryRouteProp}) => {
  const categoryName = route.params?.categoryName;
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const {setting} = useSelector((state: any) => state.api);
  const selectedCategoryData = useSelector(
    (state: any) => state.api[categoryName.toLowerCase()],
  );

  const [isFetching, setIsFetching] = useState(false);
  const handleEndReached = () => {
    if (!isFetching) {
      setIsFetching(true);
      if (categoryName === 'Playing') {
        dispatch(
          fetchPosts({
            ...setting,
            playingPageNumber: setting.playingPageNumber + 1,
          }),
        )
          .then(() => {
            setIsFetching(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setIsFetching(false);
          });
      }
    }
  };

  useEffect(() => {
    dispatch(fetchPosts(setting));
  }, [dispatch, setting]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>{categoryName}</Text>
      </View>
      <FlatList
        data={selectedCategoryData?.Search}
        renderItem={({item}) => (
          <View style={styles.list}>
            <FastImage style={styles.image} source={{uri: item.Poster}} />
            <View style={styles.description}>
              <Text style={styles.movieSubject}>{item.Title}</Text>
              <Text style={styles.detail}>{item.Year}</Text>
              <Text style={styles.detail}>{categoryName}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.imdbID}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  );
};

export default CategoryList;
