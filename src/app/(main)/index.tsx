import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useRouter } from 'expo-router';

export default function InitialScreen() {
  const router = useRouter();

  const handlePress = () => {
    router.push('/Auth/CreateAccount'); // Redirect to Login
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to iWorks</Text>
        <Text style={styles.subtitle}>Tap anywhere to get started</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    marginTop: 10,
  },
});
