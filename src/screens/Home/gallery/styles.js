import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 1,
    paddingTop:30,
    backgroundColor: 'orange',
    alignItems:'center',
  },
  header: {
    fontSize:20,
    paddingLeft: 5,
    fontWeight: 'bold',
    color: 'white',
  },
  bottomContainer: {
    flex:15,
    flexDirection: 'row',
  },
});
