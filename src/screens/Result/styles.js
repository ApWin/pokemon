import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },
  seperator: {
    backgroundColor: '#c4c4c4',
    width: 3,
    height: 20,
    marginHorizontal: 5,
  },
  image: {
    width: 30,
    height: 30,
    backgroundColor: '#c4c4c4',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  result: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  name: {
    fontFamily: 'Rubik-Medium',
    textTransform: 'capitalize',
  },
  list: {
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    paddingVertical: 10,
    fontFamily: 'Rubik-Medium',
  },
});
