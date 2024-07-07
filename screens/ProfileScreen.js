// screens/ProfileScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Title, Avatar } from 'react-native-paper';

export default function ProfileScreen({ navigation }) {
  const [name, setName] = useState('張三');
  const [email, setEmail] = useState('zhangsan@example.com');
  const [phone, setPhone] = useState('0912345678');

  const handleSave = () => {
    // 實現保存個人資料的邏輯
    console.log('Saving profile:', name, email, phone);
    alert('個人資料已更新');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar.Icon size={100} icon="account" />
      </View>
      <Title style={styles.title}>個人資料</Title>
      <TextInput
        label="姓名"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        label="電子郵件"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        label="電話號碼"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <Button 
        mode="contained" 
        onPress={handleSave} 
        style={styles.button}
      >
        保存更改
      </Button>
      <Button 
        mode="outlined" 
        onPress={() => navigation.navigate('ChangePassword')}
        style={styles.button}
      >
        更改密碼
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
});