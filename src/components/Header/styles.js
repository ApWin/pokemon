import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    //ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.0,
    //android
    elevation: 4,
  },
  leftCon: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 40,
  },
  title: {
    fontFamily: 'Rubik-Medium',
    flex: 1,
    fontSize: 18,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    marginRight: 10,
  },
});
