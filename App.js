// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// App.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { addUser, getUserByUsername, updateUserPassword, deleteUser } from './database';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    addUser(username, password, (result) => {
      if (result.rowsAffected > 0) {
        Alert.alert('Success', 'User registered successfully!');
      } else {
        Alert.alert('Error', 'Failed to register user.');
      }
    });
  };

  const handleLogin = () => {
    getUserByUsername(username, (result) => {
      if (result.rows.length > 0) {
        const storedPassword = result.rows.item(0).password;
        if (storedPassword === password) {
          Alert.alert('Success', 'Login successful!');
        } else {
          Alert.alert('Error', 'Incorrect password.');
        }
      } else {
        Alert.alert('Error', 'User not found.');
      }
    });
  };

  const handleUpdatePassword = () => {
    updateUserPassword(username, 'newpassword', (result) => {
      if (result.rowsAffected > 0) {
        Alert.alert('Success', 'Password updated successfully!');
      } else {
        Alert.alert('Error', 'Failed to update password.');
      }
    });
  };

  const handleDeleteUser = () => {
    deleteUser(username, (result) => {
      if (result.rowsAffected > 0) {
        Alert.alert('Success', 'User deleted successfully!');
      } else {
        Alert.alert('Error', 'Failed to delete user.');
      }
    });
  };

  return (
    <View>
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Update Password" onPress={handleUpdatePassword} />
      <Button title="Delete User" onPress={handleDeleteUser} />
    </View>
  );
}