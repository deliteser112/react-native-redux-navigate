import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    backgroundColor: '#f1ecec',
    borderRadius: 25,
    marginHorizontal: width * 0.1,
    shadowColor: 'white',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 0.75,
    shadowRadius: 5,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 3,
    borderColor: 'red',
  },
});
