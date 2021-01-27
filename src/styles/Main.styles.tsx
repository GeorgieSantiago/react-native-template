import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
export const exampleStyle = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export const viewStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexone: {flex: 1},
  mb10: {marginBottom: 10},
  flatButton: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
});

export const componentStyle = StyleSheet.create({
  button: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#000',
    alignContent: 'center',
  },
});

export const topNavigationStyle = StyleSheet.create({
  header: {
    color: '#fff',
    fontSize: 18,
    justifyContent: 'center',
  },
});

export const bottomNavigationStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  card: {
    padding: 0,
    margin: 0,
  },
  title: {},
  button: {
    backgroundColor: 'blue',
  },
  homeButton: {
    backgroundColor: 'blue',
  },
});
