import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Share,
  Platform,
  ScrollView
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

viewProfile = async link => {
  await WebBrowser.openBrowserAsync(link);
};

onShare = async (link, name) => {
  try {
    const result = await Share.share({
      message: `Checkout ${name} GitHub profile: \n\n${link}`
    });
  } catch (error) {
    alert(error.message);
  }
};

onBackPressed = async navigation => {
  navigation.goBack(null);
};

export default class Profile extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const item = this.props.navigation.getParam('item', () => {});
    return (
      <ScrollView>
        <View>
          <TouchableOpacity
            onPress={() => onBackPressed(this.props.navigation)}
            style={styles.backBtn}
          >
            <Image
              style={styles.backImg}
              source={require('../../assets/images/back.png')}
            />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <View style={styles.container}>
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
                <Text style={styles.text}>{item.location}</Text>
              </View>
              <View style={styles.info}>
                <Image
                  style={styles.iconImage}
                  source={require('../../assets/images/link.png')}
                />
                <TouchableOpacity onPress={() => viewProfile(item.url)}>
                  <Text
                    style={styles.link}
                    numberOfLines={1}
                    ellipsizeMode='tail'
                  >
                    {item.url}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.info}>
                <Image
                  style={styles.iconImage}
                  source={require('../../assets/images/repos.png')}
                />
                <View style={styles.info}>
                  <Text style={styles.text}>Repos: </Text>
                  <Text style={styles.text}>
                    {item.repositories.totalCount}
                  </Text>
                </View>
              </View>
              <View style={styles.info}>
                <Image
                  style={styles.iconImage}
                  source={require('../../assets/images/star.png')}
                />
                <View style={styles.info}>
                  <Text style={styles.text}>Stars: </Text>
                  <Text style={styles.text}>
                    {item.starredRepositories.totalCount}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => onShare(item.url, item.name)}
              >
                <Text style={styles.buttonText}>Share Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'column'
  },
  info: {
    flexDirection: 'row'
  },
  profileImgContainer: {
    marginLeft: 8,
    overflow: 'hidden',
    height: 252,
    width: 252,
    borderRadius: 125,
    borderWidth: 1,
    borderColor: '#6f6f6f',
    backgroundColor: '#bdbdbd',
    marginTop: Platform.OS === 'ios' ? 60 : 70
  },
  profileImg: {
    height: 250,
    width: 250,
    borderRadius: 125
  },
  stackLayout: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 20
  },
  name: {
    marginTop: 15,
    fontWeight: 'bold',
    color: '#707070',
    fontSize: 30
  },
  text: {
    marginTop: 15,
    color: '#707070',
    fontSize: 20,
    fontWeight: 'bold'
  },
  iconImage: {
    marginTop: 15,
    marginRight: 15,
    height: 20,
    width: 20
  },
  link: {
    marginTop: 15,
    fontWeight: 'bold',
    color: '#707070',
    fontSize: 20,
    width: 250,
    color: '#3366BB'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6f6f6f',
    borderRadius: 5,
    height: 50,
    width: 300,
    marginTop: 80
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  backBtn: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 5
  },
  backImg: {
    height: 30,
    width: 30
  },
  backText: {
    color: 'black',
    fontSize: 20,
    marginTop: 3
  }
});
