// TermsAndConditions.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function TermsAndConditions() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Terms and Conditions</Text>
      <Text style={styles.text}>
        By using this application, you agree to the following terms and conditions:
      </Text>
      <Text style={styles.text}>
        1. All data entered into the application is stored securely.
      </Text>
      <Text style={styles.text}>
        2. You agree not to misuse the application or its features.
      </Text>
      <Text style={styles.text}>
        3. The application is provided as is, without warranty of any kind.
      </Text>
      <Text style={styles.text}>
        4. You agree to receive communication from the app administrators.
      </Text>
      <Text style={styles.text}>
        5. Any updates or changes to the app will be communicated accordingly.
      </Text>
      <Text style={styles.text}>By using this app, you accept these terms.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});
