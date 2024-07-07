import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Avatar, Title, Paragraph } from 'react-native-paper';

export default function ChatSupportScreen() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { id: 1, text: '您好！我是客服助理。有什麼可以幫助您的嗎？', isUser: false, timestamp: '10:00 AM' },
  ]);
  const scrollViewRef = useRef();

  useEffect(() => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [chatHistory]);

  const sendMessage = () => {
    if (message.trim() === '') return;
    
    const newMessage = { 
      id: chatHistory.length + 1, 
      text: message, 
      isUser: true, 
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setChatHistory([...chatHistory, newMessage]);
    setMessage('');
    
    // 模擬客服回覆
    setTimeout(() => {
      const replyMessage = { 
        id: chatHistory.length + 2, 
        text: '感謝您的提問。我們的專業人員會盡快處理您的請求。', 
        isUser: false, 
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatHistory(prevHistory => [...prevHistory, replyMessage]);
    }, 1000);
  };

  const renderMessage = (chat) => (
    <View key={chat.id} style={[styles.messageContainer, chat.isUser ? styles.userMessage : styles.supportMessage]}>
      {!chat.isUser && (
        <Avatar.Icon size={40} icon="account" style={styles.avatar} />
      )}
      <View style={styles.messageContent}>
        <Paragraph style={styles.messageText}>{chat.text}</Paragraph>
        <Paragraph style={styles.timestamp}>{chat.timestamp}</Paragraph>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Title style={styles.title}>客戶服務</Title>
      <ScrollView 
        style={styles.chatContainer}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
        {chatHistory.map(renderMessage)}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="輸入您的訊息..."
          mode="outlined"
        />
        <Button mode="contained" onPress={sendMessage} style={styles.sendButton}>
          發送
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 24,
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
  },
  supportMessage: {
    alignSelf: 'flex-start',
  },
  avatar: {
    marginRight: 8,
    backgroundColor: '#4a90e2',
  },
  messageContent: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  messageText: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#f0f0f0',
  },
  sendButton: {
    justifyContent: 'center',
  },
});