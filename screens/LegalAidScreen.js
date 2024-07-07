import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph, TextInput, List, Checkbox, Divider, ActivityIndicator } from 'react-native-paper';

export default function LegalAidScreen() {
  const [loading, setLoading] = useState(false);
  const [eligibility, setEligibility] = useState(null);
  const [income, setIncome] = useState('');
  const [assets, setAssets] = useState('');
  const [caseType, setCaseType] = useState('');
  const [urgency, setUrgency] = useState(false);

  const caseTypes = ['勞資糾紛', '刑事辯護', '民事訴訟', '家庭法', '行政訴訟'];

  const checkEligibility = async () => {
    setLoading(true);

    // 模擬法律扶助資格檢查
    setTimeout(() => {
      const isEligible = parseInt(income) < 30000 && parseInt(assets) < 500000;
      setEligibility(isEligible);
      setLoading(false);
    }, 1000);
  };

  const applyForLegalAid = () => {
    // 這裡實現提交法律扶助申請的邏輯
    alert('您的法律扶助申請已提交。我們將盡快與您聯繫。');
  };

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>法律扶助資格檢視</Title>
      <Card style={styles.card}>
        <Card.Content>
          <TextInput
            label="月收入 (新台幣)"
            value={income}
            onChangeText={setIncome}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            label="資產總值 (新台幣)"
            value={assets}
            onChangeText={setAssets}
            keyboardType="numeric"
            style={styles.input}
          />
          <Paragraph style={styles.label}>案件類型：</Paragraph>
          {caseTypes.map((type) => (
            <List.Item
              key={type}
              title={type}
              onPress={() => setCaseType(type)}
              right={() => <Checkbox status={caseType === type ? 'checked' : 'unchecked'} />}
            />
          ))}
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={urgency ? 'checked' : 'unchecked'}
              onPress={() => setUrgency(!urgency)}
            />
            <Paragraph>是否緊急案件</Paragraph>
          </View>
          <Button 
            mode="contained" 
            onPress={checkEligibility}
            loading={loading}
            style={styles.button}
          >
            檢查資格
          </Button>
        </Card.Content>
      </Card>
      
      {loading && <ActivityIndicator animating={true} color="#0000ff" style={styles.loader} />}
      
      {eligibility !== null && (
        <Card style={styles.resultCard}>
          <Card.Content>
            <Title>{eligibility ? '您符合申請資格' : '很抱歉，您可能不符合申請資格'}</Title>
            <Paragraph>
              {eligibility 
                ? '根據您提供的信息，您可能符合法律扶助的申請資格。請點擊下方按鈕提交正式申請。' 
                : '根據您提供的信息，您可能不符合法律扶助的申請資格。如有疑問，請聯繫當地法律扶助基金會。'}
            </Paragraph>
          </Card.Content>
          {eligibility && (
            <Card.Actions>
              <Button onPress={applyForLegalAid}>申請法律扶助</Button>
            </Card.Actions>
          )}
        </Card>
      )}
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
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    marginTop: 20,
  },
  loader: {
    marginVertical: 20,
  },
  resultCard: {
    marginTop: 20,
  },
});
