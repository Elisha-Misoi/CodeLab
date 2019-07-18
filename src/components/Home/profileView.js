import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    const { item, navigation } = this.props;
    return (
<<<<<<< HEAD
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('Profile', { item: item })}
      >
=======
      <TouchableOpacity style={styles.container}>
>>>>>>> [Finishes #167284918] added home page screen
        <View style={styles.profileImgContainer}>
          <Image
            style={styles.profileImg}
            source={{
              uri: item.avatarUrl
            }}
          />
        </View>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.stackLayout}>
          <View style={styles.info}>
            <Image
              style={styles.iconImage}
              source={require('../../assets/images/marker.png')}
            />
            <Text style={styles.locationEmail}>{item.location}</Text>
          </View>
          <View style={styles.info}>
            <Image
              style={styles.iconImage}
              source={require('../../assets/images/mail.png')}
            />
            <Text
              style={styles.locationEmail}
              numberOfLines={1}
              ellipsizeMode='tail'
            >
              {item.email}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    padding: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#6f6f6f',
    margin: 5,
    paddingTop: 30,
    paddingBottom: 30
  },
  info: {
    flexDirection: 'row'
  },
  profileImgContainer: {
    marginLeft: 8,
    overflow: 'hidden',
    height: 82,
    width: 82,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#6f6f6f',
    backgroundColor: '#bdbdbd'
  },
  profileImg: {
    height: 80,
    width: 80,
    borderRadius: 40
  },
  stackLayout: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  name: {
    marginTop: 5,
    fontWeight: 'bold',
    color: '#707070',
    fontSize: 14
  },
  locationEmail: {
    marginTop: 5,
    color: '#707070',
    fontSize: 12,
    width: 100
  },
  iconImage: {
    marginTop: 5,
    marginRight: 5,
    height: 15,
    width: 15
  }
});
