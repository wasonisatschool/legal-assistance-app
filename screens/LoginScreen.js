// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title, Paragraph } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 實現登入邏輯
    console.log('Login with:', email, password);
    // 登入成功後導航到主頁面
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>歡迎使用法律助手</Title>
      <TextInput
        label="電子郵件"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        label="密碼"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        登入
      </Button>
      <Paragraph style={styles.signupText}>
        還沒有帳號？ 
        <Button mode="text" onPress={() => {/* 導航到註冊頁面 */}}>
          註冊
        </Button>
      </Paragraph>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
  signupText: {
    marginTop: 20,
    textAlign: 'center',
  },
});