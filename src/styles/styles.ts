import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
// Styles of the Components
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  // style of search bar
  searchBar: {
    flexDirection: 'row',
    height: 40,
  },
  // style of search box
  searchBox: {
    padding: 10,
    flex: 3,
    borderColor: 'white',
    backgroundColor: 'black',
    color: 'white',
    marginRight: 2,
  },
  // style of search button
  searchButton: {
    flex: 1,
    color: 'white',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // style of searchbox
  input: {
    height: 40,
    margin: 1,
    borderWidth: 1,
    padding: 10,
  },
  // style of photo list
  photoList: {
    paddingTop: 20,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  // style of photo
  photo: {
    width: 160,
    height: 160,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 2,
  },
  // styles of history bar

  // style of history item
  historyItem: {
    padding: 10,
    height: 40,
    backgroundColor: 'black',
    color: 'white',
  },
  // style of history List
  historyList: {
    width: width,
    borderTopColor: 'white',
    borderTopWidth: 1,
    maxHeight: 120,
  },
});
export default styles;
