import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  player: {
    // alignItems: 'flex-start',
  },
  nameCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  name: {
    textTransform: 'capitalize',
    fontSize: 16,
    fontFamily: 'Rubik-Medium',
  },
  image: {
    width: 60,
    height: 60,
    backgroundColor: '#c4c4c4',
    marginRight: 10,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
  },
  rateText: {
    textAlign: 'right',
    fontFamily: 'Rubik-Medium',
  },
  progress: {
    height: 20,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#0fb839',
  },
  progressCon: {
    flex: 1,
  },
  progressFill: rate => ({
    backgroundColor: rate > 50 ? '#0fb839' : rate > 30 ? '#e3f74d' : '#eb3838',
    height: '100%',
  }),
  card: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#0fb839',
    margin: 10,
  },
  button: {
    backgroundColor: '#eb3838',
    width: 180,
    alignSelf: 'center',
    marginTop: 30,
  },
  center: {
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
  },
  result: {
    fontSize: 22,
  },
});
