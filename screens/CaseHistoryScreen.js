import React from 'react';
import { View, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, List, Divider } from 'react-native-paper';

const caseData = [
  { id: '1', title: '合同糾紛', date: '2024-03-15', status: '進行中' },
  { id: '2', title: '勞資糾紛', date: '2024-02-20', status: '已結案' },
  { id: '3', title: '知識產權訴訟', date: '2024-01-10', status: '等待判決' },
];

export default function CaseHistoryScreen({ navigation }) {
  const renderCaseItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('CaseDetail', { caseId: item.id })}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>{item.title}</Title>
          <Paragraph>日期: {item.date}</Paragraph>
          <Paragraph>狀態: {item.status}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Title style={styles.title}>案件歷史記錄</Title>
      </View>
      <FlatList
        data={caseData}
        renderItem={renderCaseItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Divider />}
      />
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
});