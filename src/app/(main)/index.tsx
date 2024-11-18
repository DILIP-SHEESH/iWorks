import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function InitialScreen() {
  const router = useRouter();

  const handlePress = () => {
    router.push('/Auth/CreateAccount');
  };

  return (
    <ImageBackground
      source={require('../../../assets/background.jpg')}
      style={styles.background}
    >
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to IWorks</Text>
          <Text style={styles.subtitle}>Tap anywhere to get started</Text>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Or 'contain' depending on how you want the image to behave
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional overlay
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
  },
});
