import * as React from 'react';
import { Image, Text, View, AsyncStorage, StyleSheet } from 'react-native';
import firebase from 'firebase';
import getGithubTokenAsync from './github_token';

const GithubStorageKey = '@Expo:GithubToken';

const firebaseConfig = {
  apiKey: 'AIzaSyARbSvyWepB5hT7g66Y7si6snXt7kZKV1A',
  authDomain: 'codelab-155a1.firebaseapp.com',
  databaseURL: 'https://codelab-155a1.firebaseio.com',
  projectId: 'project-115472164341',
  storageBucket: 'codelab-155a1.appspot.com',
  messagingSenderId: '115472164341'
};

export function initializeFirebase() {
  if (!firebase.apps.length) {
    return firebase.initializeApp(firebaseConfig);
  }
}

export async function signInAsync(token) {
  try {
    if (!token) {
      const token = await getGithubTokenAsync();
      if (token) {
        await AsyncStorage.setItem(GithubStorageKey, token);
        return signInAsync(token);
      } else {
        return;
      }
    }
    const credential = firebase.auth.GithubAuthProvider.credential(token);
    return firebase.auth().signInWithCredential(credential);
  } catch ({ message }) {
    alert(message);
  }
}

export async function signOutAsync() {
  try {
    await AsyncStorage.removeItem(GithubStorageKey);
    await firebase.auth().signOut();
  } catch ({ message }) {
    alert('Error: ' + message);
  }
}

export async function attemptToRestoreAuthAsync() {
  let token = await AsyncStorage.getItem(GithubStorageKey);
  if (token) {
    return signInAsync(token);
  }
}
