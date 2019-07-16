import * as React from 'react';
import { Image, Text, View, AsyncStorage, StyleSheet } from 'react-native';
import firebase from 'firebase';
import getGithubTokenAsync from './github_token';
import getEnvVars from '../../environment';
const {
  FIRBSE_APIKEY,
  FIRBSE_AUTHDOMAIN,
  FIRBSE_DATABASEURL,
  FIRBSE_PROJECTID,
  FIRBSE_STORAGEBUCKET,
  FIRBSE_MESSAGINGSENDERID
} = getEnvVars();

const GithubStorageKey = '@Expo:GithubToken';

const firebaseConfig = {
  apiKey: FIRBSE_APIKEY,
  authDomain: FIRBSE_AUTHDOMAIN,
  databaseURL: FIRBSE_DATABASEURL,
  projectId: FIRBSE_PROJECTID,
  storageBucket: FIRBSE_STORAGEBUCKET,
  messagingSenderId: FIRBSE_MESSAGINGSENDERID
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
