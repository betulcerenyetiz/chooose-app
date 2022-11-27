import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 3,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 200,
    width: width * 0.9,
    height: height / 7,
  },
  input: {
    borderColor: 'orange',
    borderBottomWidth: 3,
    width: width * 0.9,
    marginBottom: 10,
  },
  button: {
    width: width * 0.9,
    backgroundColor: 'orange',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: height * 0.05,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
