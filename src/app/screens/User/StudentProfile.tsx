import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function StudentProfile() {
  const router = useRouter();

  // Mock student data
  const student = {
    name: 'Billy Butcher',
    email: 'billyb@example.com',
    phone: '+1234567890',
    avatar: 'https://i.pinimg.com/originals/a6/d9/f3/a6d9f378d01eb6432b906d9f4e3ea57e.jpg', // Replace with actual profile image URL
  };

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: student.avatar }} />
      <Text style={styles.name}>{student.name}</Text>
      <Text style={styles.email}>{student.email}</Text>
      <Text style={styles.phone}>{student.phone}</Text>
      <Button title="Back to Home" onPress={() => router.push('screens/User/Tabs/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: '#555',
    marginBottom: 5,
  },
  phone: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  }, 
});
