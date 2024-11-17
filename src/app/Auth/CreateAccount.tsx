// src/app/Auth/CreateAccount.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function CreateAccount() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSignUp = () => {
    if (!termsAccepted) {
      alert('Please accept the terms and conditions to continue.');
      return;
    }
    console.log('Creating account with:', email, password);
    // Implement sign-up logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={() => setTermsAccepted(!termsAccepted)}>
        <Text style={styles.checkbox}>
          {termsAccepted ? '☑️' : '⬜️'} I agree to the Terms and Conditions
        </Text>
      </TouchableOpacity>
      <Button title="Sign Up" onPress={handleSignUp} />

      <TouchableOpacity onPress={() => router.push('/Auth/Login')}>
        <Text style={styles.link}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  checkbox: {
    fontSize: 16,
    marginVertical: 10,
  },
  link: {
    marginTop: 15,
    color: '#007BFF',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
