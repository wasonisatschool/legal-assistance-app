// screens/LegalProcessScreen.js
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, Button, List } from 'react-native-paper';

const legalProcesses = {
  '勞資糾紛': [
    { 
      title: '調解', 
      content: '首先可以嘗試透過勞資爭議調解委員會進行調解。',
      steps: [
        '向當地勞工局提出調解申請',
        '等待調解會議的安排',
        '參加調解會議，嘗試達成共識',
        '如達成共識，簽署調解協議'
      ]
    },
    { 
      title: '訴訟', 
      content: '如果調解失敗，可以向勞動法庭提起訴訟。',
      steps: [
        '準備訴狀和相關證據',
        '向勞動法庭提交訴狀',
        '等待法院排期開庭',
        '出席庭審，陳述案情'
      ]
    },
  ],
  // 其他問題類型的處理流程...
};

export default function LegalProcessScreen({ route, navigation }) {
  const { answers } = route.params;
  const problemType = answers[1]; // 假設第一個問題的答案就是問題類型
  const [expandedProcess, setExpandedProcess] = useState(null);

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>法律流程說明</Title>
      <Paragraph style={styles.subtitle}>針對您遇到的{problemType}問題，以下是建議的法律流程：</Paragraph>
      {legalProcesses[problemType]?.map((process, index) => (
        <Card key={index} style={styles.card}>
          <Card.Title title={process.title} />
          <Card.Content>
            <Paragraph>{process.content}</Paragraph>
            <List.Accordion
              title="詳細步驟"
              expanded={expandedProcess === index}
              onPress={() => setExpandedProcess(expandedProcess === index ? null : index)}
            >
              {process.steps.map((step, stepIndex) => (
                <List.Item
                  key={stepIndex}
                  title={step}
                  left={props => <List.Icon {...props} icon="chevron-right" />}
                />
              ))}
            </List.Accordion>
          </Card.Content>
        </Card>
      ))}
      <View style={styles.buttonContainer}>
        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('AIAssistant')}
          style={styles.button}
        >
          獲取AI輔助
        </Button>
        <Button 
          mode="outlined" 
          onPress={() => navigation.navigate('LawyerFinder')}
          style={styles.button}
        >
          尋找律師
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    width: '48%',
  },
});