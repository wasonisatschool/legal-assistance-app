// screens/AIAssistantScreen.js
import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph, TextInput, Chip, ActivityIndicator } from 'react-native-paper';
import axios from 'axios';

export default function AIAssistantScreen() {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [caseDetails, setCaseDetails] = useState('');
  const [selectedFunction, setSelectedFunction] = useState(null);

  const aiFunctions = [
    { label: '生成訴狀', value: 'generateDocument' },
    { label: '模擬訊問', value: 'simulateInterrogation' },
    { label: '法律建議', value: 'legalAdvice' },
    { label: '權利解釋', value: 'explainRights' },
  ];

  const performAIFunction = async () => {
    if (!selectedFunction) {
      alert('請選擇一個AI功能');
      return;
    }
    setLoading(true);

    // 模擬AI回應
    const mockResponses = {
      generateDocument: `
        訴狀
        原告：王大明
        被告：陳小華

        案由：請求賠償損害

        事實與理由：
        1. 原告於2024年7月1日因被告的過失受到傷害，經醫院診斷為骨折。
        2. 原告因此次事件產生醫療費用新台幣20萬元，並且因失去工作收入損失新台幣30萬元。
        
        依據：
        民法第184條第1項第1款

        此致
        台灣台北地方法院

        附件：
        1. 醫院診斷證明書
        2. 工作收入證明

        原告：王大明
        2024年7月7日
      `,
      simulateInterrogation: `
        訊問過程模擬：
        法官：被告，請描述當天發生的事情。
        被告：我當時正在駕車，突然一名行人衝出馬路，我試圖緊急剎車但來不及。
        法官：你有沒有看到當時的交通信號？
        被告：我沒有注意到紅燈。
        法官：原告，請陳述你的受傷情況。
        原告：我被車撞倒，造成左腿骨折，醫生說需要至少三個月才能康復。
      `,
      legalAdvice: `
        法律建議：
        根據您的案件詳情，建議您首先蒐集所有相關證據，包括醫療記錄、警察報告和目擊者證詞。接下來，您可以根據民法第184條第1項第1款向被告提出民事訴訟，要求賠償醫療費用和收入損失。此外，建議您諮詢專業律師以獲取更詳細的法律指導。
      `,
      explainRights: `
        權利解釋：
        根據台灣法律，您有權在受到他人過失造成的傷害時，要求賠償相關損失。這包括醫療費用、工作收入損失以及其他因事故產生的費用。您可以根據民法第184條提出訴訟，並且有權要求被告賠償所有因事故造成的損失。
      `,
    };

    // 模擬延遲
    setTimeout(() => {
      setResult(mockResponses[selectedFunction]);
      setLoading(false);
    }, 1000);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>AI法律助手</Title>
      <TextInput
        label="請輸入案件詳情"
        value={caseDetails}
        onChangeText={setCaseDetails}
        multiline
        numberOfLines={4}
        style={styles.input}
      />
      <View style={styles.chipContainer}>
        {aiFunctions.map((func) => (
          <Chip
            key={func.value}
            selected={selectedFunction === func.value}
            onPress={() => setSelectedFunction(func.value)}
            style={styles.chip}
          >
            {func.label}
          </Chip>
        ))}
      </View>
      <Button 
        mode="contained" 
        onPress={performAIFunction}
        loading={loading}
        style={styles.button}
      >
        執行AI功能
      </Button>
      {loading && <ActivityIndicator animating={true} color="#0000ff" />}
      {result && (
        <Card style={styles.resultCard}>
          <Card.Content>
            <Title>AI 回應</Title>
            <Paragraph>{result}</Paragraph>
          </Card.Content>
        </Card>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  chip: {
    margin: 4,
  },
  button: {
    marginBottom: 20,
  },
  resultCard: {
    marginTop: 20,
  },
});
