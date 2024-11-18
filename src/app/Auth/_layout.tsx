import React from 'react';
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" options={{ title: 'Login' }} />
      <Stack.Screen name="CreateAccount" options={{ title: 'Create Account' }} />
    </Stack>
  );
}
