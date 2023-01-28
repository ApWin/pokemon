import {StyleSheet} from 'react-native';
import colors from 'assets/styles/colors';

export default StyleSheet.create({
  button: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.brandColor,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },

  spinner: {
    alignSelf: 'center',
  },
  opacity: {
    opacity: 0.5,
  },
  textStyle: {
    fontSize: 16,
  },
});
