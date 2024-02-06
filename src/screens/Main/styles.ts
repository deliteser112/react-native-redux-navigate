const React = require('react-native');
const {Dimensions} = React;

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(18 23 35)',
    color: 'white',
    paddingHorizontal: 20,
  },
  scrollView: {color: 'white'},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    width: Dimensions.get('screen').width / 3 + 20,
  },
  text: {
    fontSize: 24,
  },
  title: {color: 'white', fontSize: 24, fontWeight: '700'},
  label: {color: 'white'},
  categoryTitle: {color: 'white', fontSize: 18, marginVertical: 20},
  categoryButton: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 20,
    flexDirection: 'row',
    marginRight: 10,
  },
  category: {paddingRight: 10},
});
