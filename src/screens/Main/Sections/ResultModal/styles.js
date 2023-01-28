import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modalView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 400,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  image: {
    width: 220,
    height: 150,
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'Rubik-Medium',
    alignSelf: 'center',
    textAlign: 'center',
  },
  description: {
    opacity: 0.8,
    marginHorizontal: 40,
    textAlign: 'center',
    marginTop: 20,
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    width: '47%',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
  name: {
    fontFamily: 'Rubik-Medium',
    textTransform: 'capitalize',
  },
});
