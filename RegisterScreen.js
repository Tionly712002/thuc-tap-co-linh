import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Text } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Thực hiện xác nhận đăng ký ở đây
    // Có thể lưu thông tin người dùng vào cơ sở dữ liệu hoặc trạng thái ứng dụng
    // Sau khi đăng ký thành công, chuyển hướng đến màn hình đăng nhập
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text>dang ky</Text>
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
      <Button title="Register" onPress={handleRegister} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />

      {/* <Text style={styles.registerText} onPress={() => navigation.navigate('Login')}>
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

export default RegisterScreen;
