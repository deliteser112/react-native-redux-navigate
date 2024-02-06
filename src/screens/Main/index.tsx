import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {fetchPosts, resetSetting} from '../../redux/slices/apiSlice';
import {Text, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MoiveSwipperComponent from '../../components/MovieSwipper';
import {main} from '../../constants';
import styles from './styles';

const Main = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const navigation = useNavigation();
  const {playing, trending, upcoming, rating, categories, setting} =
    useSelector((state: any) => state.api);
  const handleChangeCategory = (category: any) => {
    dispatch(resetSetting(category));
  };

  const navigate = (param: string) => {
    navigation.navigate(param as never);
  };

  useEffect(() => {
    const initialSetting = {
      category: setting.category,
      playingPageNumber: 1,
      upcomingPageNumber: 1,
      trendingPageNumber: 1,
      ratingPageNumber: 1,
    };
    dispatch(fetchPosts(initialSetting));
  }, [dispatch, setting.category]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.title}>{main.movieLibrary}</Text>
        </View>
        <View>
          <Text style={styles.categoryTitle}>{main.CATEGORY}</Text>
          <ScrollView
            horizontal
            contentContainerStyle={styles.category}
            showsHorizontalScrollIndicator={false}>
            {categories.map(
              (
                item: {value: string; label: string},
                index: React.Key | null | undefined,
              ) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleChangeCategory(item.value)}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    backgroundColor:
                      item.value === setting.category
                        ? 'rgb(218 26 55)'
                        : 'rgb(48 57 71)',
                    ...styles.categoryButton,
                  }}>
                  <Text style={styles.label}>{item.label}</Text>
                </TouchableOpacity>
              ),
            )}
          </ScrollView>
        </View>
        <MoiveSwipperComponent
          slidesData={playing.Search}
          title={main.NOW_PLAYING}
          navigate={() => navigate('Playing')}
          autoplay={true}
        />
        <MoiveSwipperComponent
          slidesData={trending.Search}
          title={main.TRENDING}
          navigate={() => navigate('Trending')}
          autoplay={false}
        />
        <MoiveSwipperComponent
          slidesData={rating.Search}
          title={main.TOP_RATED}
          navigate={() => navigate('Rating')}
          autoplay={false}
        />
        <MoiveSwipperComponent
          slidesData={upcoming.Search}
          title={main.UPCOMING}
          navigate={() => navigate('Upcoming')}
          autoplay={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
