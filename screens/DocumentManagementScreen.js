import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Card, Title, Paragraph, Button, List, IconButton } from 'react-native-paper';

const documentData = [
  { id: '1', name: '合同.pdf', date: '2024-03-20', size: '2.5 MB' },
  { id: '2', name: '證據材料.docx', date: '2024-03-18', size: '1.8 MB' },
  { id: '3', name: '法院裁決.pdf', date: '2024-03-15', size: '3.2 MB' },
];

export default function DocumentManagementScreen() {
  const renderDocumentItem = ({ item }) => (
    <List.Item
      title={item.name}
      description={`上傳日期: ${item.date} | 大小: ${item.size}`}
      left={props => <List.Icon {...props} icon="file-document-outline" />}
      right={props => (
        <View style={styles.actionButtons}>
          <IconButton icon="download" onPress={() => console.log('下載文件')} />
          <IconButton icon="delete" onPress={() => console.log('刪除文件')} />
        </View>
      )}
    />
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Title style={styles.title}>文件管理</Title>
      </View>
      <Card style={styles.card}>
        <Card.Content>
          <Button icon="upload" mode="contained" onPress={() => console.log('上傳新文件')}>
            上傳新文件
          </Button>
        </Card.Content>
      </Card>
      <FlatList
        data={documentData}
        renderItem={renderDocumentItem}
        keyExtractor={item => item.id}
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
  actionButtons: {
    flexDirection: 'row',
  },
});