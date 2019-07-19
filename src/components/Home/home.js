import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
<<<<<<< HEAD
<<<<<<< HEAD
  Platform,
  AsyncStorage
=======
  Platform
>>>>>>> [Finishes #167284918] added home page screen
=======
  Platform,
  AsyncStorage
>>>>>>> [Finishes #167284920] added profile page
} from 'react-native';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import { usersQuery } from './userquery';
import ProfileView from './profileView';
import BusyIndicator from './activityIndicator';
<<<<<<< HEAD
import { TouchableOpacity } from 'react-native-gesture-handler';
import { signOutAsync } from '../../services/oauth_services';

const initializeApollo = token => {
  const link = new HttpLink({
    uri: `https://api.github.com/graphql`,
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link,
    cache
  });

  return client;
};

logout = async navigation => {
  await signOutAsync();
  navigation.navigate('Login');
};
=======

const initializeApollo = token => {
  const link = new HttpLink({
    uri: `https://api.github.com/graphql`,
    headers: {
      authorization: `Bearer ${token}`
    }
<<<<<<< HEAD
  }),
  cache: new InMemoryCache()
});
>>>>>>> [Finishes #167284918] added home page screen
=======
  });

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link,
    cache
  });

  return client;
};
>>>>>>> [Finishes #167284920] added profile page

export default class Home extends Component {
  static navigationOptions = {
    header: null
  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> [Finishes #167284920] added profile page
  state = {
    client: null
  };

  async componentDidMount() {
    let token = await AsyncStorage.getItem('@Expo:GithubToken');
<<<<<<< HEAD
    console.log('token', token);
=======
>>>>>>> [Finishes #167284920] added profile page
    const client = initializeApollo(token);
    this.setState({
      client: client
    });
  }

<<<<<<< HEAD
  render() {
    if (!this.state.client) {
      return <BusyIndicator />;
    }
    return (
      <ApolloProvider client={this.state.client}>
=======
=======
>>>>>>> [Finishes #167284920] added profile page
  render() {
    if (!this.state.client) {
      return <BusyIndicator />;
    }
    return (
<<<<<<< HEAD
      <ApolloProvider client={client}>
>>>>>>> [Finishes #167284918] added home page screen
=======
      <ApolloProvider client={this.state.client}>
>>>>>>> [Finishes #167284920] added profile page
        <View>
          <View style={styles.navBar}>
            <Image
              style={{
                width: 30,
                height: 20,
                marginTop: Platform.OS === 'ios' ? 45 : 45,
                marginLeft: 10
              }}
              source={require('../../assets/images/more.png')}
            />
            <Image
              style={{
                width: 170,
                height: 28,
                marginTop: Platform.OS === 'ios' ? 40 : 40,
                marginRight: 10
              }}
              source={require('../../assets/images/codelab.png')}
            />
<<<<<<< HEAD
            <TouchableOpacity onPress={() => logout(this.props.navigation)}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginTop: Platform.OS === 'ios' ? 40 : 40,
                  marginRight: 10
                }}
                source={require('../../assets/images/logout.png')}
              />
            </TouchableOpacity>
=======
            <Image
              style={{
                width: 30,
                height: 30,
                marginTop: Platform.OS === 'ios' ? 40 : 40,
                marginRight: 10
              }}
              source={require('../../assets/images/bell.png')}
            />
>>>>>>> [Finishes #167284918] added home page screen
          </View>
          <Query query={usersQuery}>
            {({ data, error, loading }) => {
              if (loading) {
                return <BusyIndicator />;
              }
              if (data.search) {
                return (
                  <FlatList
                    data={data.search.nodes}
                    renderItem={({ item }) => (
                      <ProfileView
                        item={item}
                        navigation={this.props.navigation}
                      />
                    )}
                    numColumns={2}
                    keyExtractor={(item, index) => index}
                  />
                );
              }
              if (error) {
                return <Text>An error Occurred</Text>;
              }
            }}
          </Query>
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  navBar: {
    backgroundColor: '#6f6f6f',
    height: Platform.OS === 'ios' ? 80 : 85,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
