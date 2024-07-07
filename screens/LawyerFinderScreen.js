
import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph, TextInput, Chip, Avatar, Divider, ActivityIndicator } from 'react-native-paper';
import axios from 'axios';

export default function LawyerFinderScreen({ navigation }) {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');

  const specialties = ['勞資糾紛', '刑事辯護', '民事訴訟', '商業法', '家庭法'];

  const searchLawyers = async () => {
    setLoading(true);
    try {
      // 這裡應該是您的律師搜索API端點
      const response = await axios.get('https://your-lawyer-api-endpoint.com/search', {
        params: { location: location, specialty: specialty }
      });
      setLawyers(response.data.lawyers);
    } catch (error) {
      console.error('Error searching lawyers:', error);
      setLawyers([]);
    }
    setLoading(false);
  };

  const applyLegalAid = () => {
    navigation.navigate('LegalAid');
  };

  return (
    <ScrollView style={styles.container}>
      {/* ... (rest of the component remains the same) ... */}
      <Title style={styles.title}>尋找律師</Title>
            <Card style={styles.searchCard}>
                <Card.Content>
                    <TextInput
                        label="輸入地點"
                        value={location}
                        onChangeText={setLocation}
                        style={styles.input}
                    />
                    <View style={styles.chipContainer}>
                        {specialties.map((item) => (
                            <Chip
                                key={item}
                                selected={specialty === item}
                                onPress={() => setSpecialty(item)}
                                style={styles.chip}
                            >
                                {item}
                            </Chip>
                        ))}
                    </View>
                    <Button 
  mode="contained" 
  onPress={() => navigation.navigate('LawyerMatch')}
  style={styles.matchButton}
>
  開始律師配對
</Button>
                </Card.Content>
            </Card>

            {loading && <ActivityIndicator animating={true} color="#0000ff" style={styles.loader} />}

            {lawyers.map((lawyer, index) => (
                <Card key={index} style={styles.lawyerCard}>
                    <Card.Title
                        title={lawyer.name}
                        subtitle={lawyer.specialty}
                        left={(props) => <Avatar.Icon {...props} icon="account" />}
                    />
                    <Card.Content>
                        <Paragraph>地點: {lawyer.location}</Paragraph>
                        <Paragraph>經驗: {lawyer.experience}年</Paragraph>
                        <Paragraph>評分: {lawyer.rating}/5</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button onPress={() => { }}>聯繫律師</Button>
                        <Button onPress={() => { }}>查看詳情</Button>
                    </Card.Actions>
                </Card>
            ))}


      <Button 
        mode="outlined" 
        onPress={applyLegalAid}
        style={styles.legalAidButton}
      >
        檢視法律扶助資格
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
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    searchCard: {
        marginBottom: 20,
    },
    input: {
        marginBottom: 10,
    },
    chipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    chip: {
        margin: 4,
    },
    button: {
        marginTop: 10,
    },
    loader: {
        marginVertical: 20,
    },
    lawyerCard: {
        marginBottom: 15,
    },
    legalAidButton: {
        marginTop: 20,
        marginBottom: 40,
    },
});