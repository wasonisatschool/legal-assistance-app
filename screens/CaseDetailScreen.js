import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, List, Divider, Button } from 'react-native-paper';

export default function CaseDetailScreen({ route, navigation }) {
  // 在實際應用中,您會從route.params中獲取案件ID,然後從API獲取詳細信息
  // 這裡我們使用模擬數據
  const caseDetail = {
    id: '1',
    title: '合同糾紛',
    date: '2024-03-15',
    status: '進行中',
    description: '與供應商A公司就合同條款產生糾紛,涉及金額500萬元。',
    parties: ['我方公司', 'A公司'],
    lawyer: '張律師',
    nextHearing: '2024-05-20',
    documents: [
      { id: '1', name: '合同原件.pdf', date: '2024-03-10' },
      { id: '2', name: '證據材料1.docx', date: '2024-03-12' },
    ],
    updates: [
      { id: '1', date: '2024-03-15', content: '案件立案' },
      { id: '2', date: '2024-03-20', content: '提交初步證據' },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>{caseDetail.title}</Title>
          <Paragraph style={styles.statusText}>狀態: {caseDetail.status}</Paragraph>
          <Paragraph>案件編號: {caseDetail.id}</Paragraph>
          <Paragraph>立案日期: {caseDetail.date}</Paragraph>
          <Paragraph style={styles.description}>{caseDetail.description}</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>當事人</Title>
          {caseDetail.parties.map((party, index) => (
            <Paragraph key={index}>{party}</Paragraph>
          ))}
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>案件信息</Title>
          <Paragraph>代理律師: {caseDetail.lawyer}</Paragraph>
          <Paragraph>下次聽證日期: {caseDetail.nextHearing}</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>相關文件</Title>
          {caseDetail.documents.map((doc) => (
            <List.Item
              key={doc.id}
              title={doc.name}
              description={`上傳日期: ${doc.date}`}
              left={props => <List.Icon {...props} icon="file-document-outline" />}
              onPress={() => console.log('查看文件', doc.id)}
            />
          ))}
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>案件進展</Title>
          {caseDetail.updates.map((update, index) => (
            <React.Fragment key={update.id}>
              {index > 0 && <Divider style={styles.divider} />}
              <Paragraph style={styles.updateDate}>{update.date}</Paragraph>
              <Paragraph>{update.content}</Paragraph>
            </React.Fragment>
          ))}
        </Card.Content>
      </Card>

      <Button 
        mode="contained" 
        onPress={() => console.log('聯繫律師')}
        style={styles.contactButton}
      >
        聯繫代理律師
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 18,
    color: '#4a90e2',
    marginVertical: 8,
  },
  description: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 8,
  },
  divider: {
    marginVertical: 8,
  },
  updateDate: {
    fontWeight: 'bold',
  },
  contactButton: {
    marginTop: 16,
    marginBottom: 32,
  },
});