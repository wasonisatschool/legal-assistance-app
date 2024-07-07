// screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button, Avatar } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Icon size={64} icon="scale-balance" />
        <Title style={styles.title}>法律助手</Title>
        <Paragraph>您的專業法律諮詢平台</Paragraph>
      </View>

      <Card style={styles.card} onPress={() => navigation.navigate('Questionnaire')}>
        <Card.Content>
          <Title>案件評估</Title>
          <Paragraph>回答幾個簡單問題,評估您的法律情況</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card} onPress={() => navigation.navigate('AIAssistant')}>
        <Card.Content>
          <Title>AI法律助手</Title>
          <Paragraph>獲取即時的法律建議和文件生成</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card} onPress={() => navigation.navigate('LawyerFinder')}>
        <Card.Content>
          <Title>尋找律師</Title>
          <Paragraph>搜索並聯繫專業律師</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card} onPress={() => navigation.navigate('CaseHistory')}>
        <Card.Content>
          <Title>案件歷史</Title>
          <Paragraph>查看您的案件記錄和進展</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card} onPress={() => navigation.navigate('ChatSupport')}>
        <Card.Content>
          <Title>在線支持</Title>
          <Paragraph>與客服人員即時交談</Paragraph>
        </Card.Content>
      </Card>

      <Button 
        mode="outlined" 
        onPress={() => navigation.navigate('Profile')}
        style={styles.profileButton}
      >
        查看個人資料
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginTop: 10,
  },
  card: {
    marginBottom: 15,
  },
  profileButton: {
    marginTop: 20,
    marginBottom: 40,
  },
});