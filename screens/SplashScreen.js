// screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Title, ActivityIndicator } from 'react-native-paper';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // 模擬加載過程
    setTimeout(() => {
      navigation.replace('Home'); // 假設 'Home' 是主頁面的名稱
    }, 3000); // 3秒後跳轉
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.jpg')} // 請確保你有一個logo圖片
        style={styles.logo}
      />
      <Title style={styles.title}>法律助手</Title>
      <ActivityIndicator animating={true} color="#0000ff" size="large" style={styles.loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,
  },
});