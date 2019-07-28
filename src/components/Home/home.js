import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  Platform,
  AsyncStorage
} from 'react-native';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import { usersQuery } from './userquery';
import ProfileView from './profileView';
import BusyIndicator from './activityIndicator';

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

export default class Home extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    client: null
  };

  async componentDidMount() {
    let token = await AsyncStorage.getItem('@Expo:GithubToken');
    const client = initializeApollo(token);
    this.setState({
      client: client
    });
  }

  render() {
    if (!this.state.client) {
      return <BusyIndicator />;
    }
    return (
      <ApolloProvider client={this.state.client}>
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
            <Image
              style={{
                width: 30,
                height: 30,
                marginTop: Platform.OS === 'ios' ? 40 : 40,
                marginRight: 10
              }}
              source={require('../../assets/images/bell.png')}
            />
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
