import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 1,
    paddingTop:30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    height: 27,
    width:100,
  },
  upperText: {
    fontSize:21,
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flex:15,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  blue: {
    width: width*0.8,
    height: height*0.2,
    borderRadius: 30,
    borderWidth:5,
    borderColor: 'lightblue',
  },
  pink: {
    width: width*0.8,
    height: height*0.2,
    borderRadius: 30,
    borderWidth:5,
    borderColor: 'pink',
  },
  green: {
    width: width*0.8,
    height: height*0.2,
    borderRadius: 30,
    borderWidth:5,
    borderColor: 'lightgreen',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    borderRadius: 28,

  },
  refresh: {
    width: 50,
    height:50,
    backgroundColor: 'orange',
    position: 'absolute',
    bottom:20,
    right:20,
    borderRadius:25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  refreshText: {
    fontSize: 11,
    color: 'white',
    fontWeight: 'bold',
  },
});
