import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Platform,
  TouchableOpacity,
  Text
} from 'react-native';
import firebase from 'firebase';
import {
  initializeFirebase,
  signInAsync,
  attemptToRestoreAuthAsync,
  signOutAsync
} from '../../services/oauth_services';

export default class Login extends Component {
  state = { isSignedIn: false };

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.setupFirebaseAsync();
    if (this.state.isSignedIn) {
      this.props.navigation.navigate('Home');
    }
  }

  setupFirebaseAsync = async () => {
    initializeFirebase();

    firebase.auth().onAuthStateChanged(async auth => {
      const isSignedIn = !!auth;
      this.setState({ isSignedIn });
      if (!isSignedIn) {
        attemptToRestoreAuthAsync();
      } else {
        this.props.navigation.navigate('Home');
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/codelab.png')}
          />
        </View>

        <TouchableOpacity
          onPress={() => signInAsync()}
          style={styles.touchableOpacity}
        >
          <View style={styles.buttonContainer}>
            <Image
              style={styles.buttonImage}
              source={require('../../assets/images/github.png')}
            />
            <Text style={styles.text}>Login with GitHub</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6f6f6f'
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: Platform.OS === 'ios' ? 30 : 30,
    width: 300
  },
  touchableOpacity: {
    height: Platform.OS === 'ios' ? 60 : 52,
    marginRight: Platform.OS === 'ios' ? 30 : 50,
    marginLeft: Platform.OS === 'ios' ? 30 : 50,
    marginBottom: 100
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5
  },
  buttonImage: {
    height: Platform.OS === 'ios' ? 40 : 35,
    width: Platform.OS === 'ios' ? 40 : 35,
    marginRight: 20
  },
  text: {
    fontSize: Platform.OS === 'ios' ? 25 : 20,
    fontWeight: 'bold'
  },
  image: {
    width: 128,
    height: 128,
    borderRadius: 64,
    overflow: 'hidden',
    resizeMode: 'contain'
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e'
  }
});
