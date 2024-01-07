import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Text } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Thực hiện kiểm tra đăng nhập ở đây
    // Nếu đăng nhập thành công, chuyển hướng đến màn hình Home
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text>dang nhap</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />

      <Button title="Register" onPress={() => navigation.navigate('Register')} />

      
      {/* Nút chuyển hướng đến màn hình đăng ký */}
      {/* <Text style={styles.registerText} onPress={() => navigation.navigate('Register')}>
        Don't have an account? Register here
      </Text> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default LoginScreen;