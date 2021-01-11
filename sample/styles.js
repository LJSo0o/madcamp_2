import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#cccc',
    width: '87%',
    marginBottom: 10,
    borderRadius: 5,
    color: '#000000',
  },
  btnTextSubmit: {
    marginTop: 10,
    color: 'darkblue',
    fontSize: 26,
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'darkblue',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  btnTextUpdate: {
    marginTop: 10,
    color: 'green',
    fontSize: 20,
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  btnTextLogout: {
    marginTop: 30,
    color: 'red',
    fontSize: 20,
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#dc143c',
  },
  image: {
    width: '100%', height: '100%', justifyContent: 'flex-end'
   },
});

export default styles;