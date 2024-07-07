// screens/QuestionnaireScreen.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, RadioButton, ProgressBar, Card } from 'react-native-paper';

const questions = [
  {
    id: 1,
    text: '您遇到的是哪種法律問題？',
    options: ['勞資糾紛', '被挪為人頭帳戶', '詐騙問題', '其他'],
  },
  {
    id: 2,
    text: '這個問題發生多久了？',
    options: ['不到一個月', '1-3個月', '3-6個月', '6個月以上'],
  },
  {
    id: 3,
    text: '您是否已經採取了任何行動？',
    options: ['是', '否'],
  },
  // 可以根據需要添加更多問題
];

export default function QuestionnaireScreen({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigation.navigate('LegalProcess', { answers });
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const currentQ = questions[currentQuestion];

  return (
    <View style={styles.container}>
      <ProgressBar progress={(currentQuestion + 1) / questions.length} color="#6200ee" style={styles.progressBar} />
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.questionText}>{currentQ.text}</Text>
          <RadioButton.Group
            onValueChange={(value) => handleAnswer(currentQ.id, value)}
            value={answers[currentQ.id]}
          >
            {currentQ.options.map((option) => (
              <RadioButton.Item key={option} label={option} value={option} style={styles.radioItem} />
            ))}
          </RadioButton.Group>
        </Card.Content>
      </Card>
      <View style={styles.buttonContainer}>
        <Button mode="outlined" onPress={prevQuestion} disabled={currentQuestion === 0} style={styles.button}>
          上一題
        </Button>
        <Button mode="contained" onPress={nextQuestion} style={styles.button}>
          {currentQuestion < questions.length - 1 ? '下一題' : '完成'}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  progressBar: {
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 20,
  },
  radioItem: {
    paddingVertical: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '45%',
  },
});