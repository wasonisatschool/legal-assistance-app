// screens/SettingsScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import { List, Divider, Button } from 'react-native-paper';

export default function SettingsScreen({ navigation }) {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader>通知設定</List.Subheader>
        <List.Item
          title="接收推送通知"
          right={() => <Switch value={notifications} onValueChange={setNotifications} />}
        />
        <Divider />
        <List.Subheader>外觀</List.Subheader>
        <List.Item
          title="深色模式"
          right={() => <Switch value={darkMode} onValueChange={setDarkMode} />}
        />
        <Divider />
        <List.Subheader>賬戶</List.Subheader>
        <List.Item
          title="更改密碼"
          onPress={() => {/* 實現更改密碼邏輯 */}}
        />
        <List.Item
          title="隱私設定"
          onPress={() => {/* 實現隱私設定邏輯 */}}
        />
      </List.Section>
      <Button mode="outlined" onPress={() => {/* 實現登出邏輯 */}} style={styles.logoutButton}>
        登出
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  logoutButton: {
    margin: 20,
  },
});