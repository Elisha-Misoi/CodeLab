import React from 'react';
import { StyleSheet, View, ActivityIndicator, Platform } from 'react-native';

const BusyIndicator = () => (
  <View style={styles.container}>
    <ActivityIndicator animating={true} size={'large'} color={'#6f6f6f'} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 280 : 400
  }
});

export default BusyIndicator;
