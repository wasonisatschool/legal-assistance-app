import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, PanResponder, Dimensions, Image } from 'react-native';
import { Card, Title, Paragraph, Button, IconButton } from 'react-native-paper';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

export default function LawyerMatchScreen({ navigation }) {
  const [lawyers, setLawyers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const position = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          forceSwipe('left');
        } else {
          resetPosition();
        }
      },
    })
  ).current;

  useEffect(() => {
    fetchLawyers();
  }, []);

  const fetchLawyers = async () => {
    // 使用模擬資料
    const mockLawyers = [
      {
        name: '王大明',
        specialty: '刑事辯護',
        experience: 10,
        rating: 4.5,
        image: 'https://via.placeholder.com/300',
      },
      {
        name: '陳小華',
        specialty: '家庭法',
        experience: 8,
        rating: 4.0,
        image: 'https://via.placeholder.com/300',
      },
      {
        name: '李美麗',
        specialty: '民事訴訟',
        experience: 5,
        rating: 4.8,
        image: 'https://via.placeholder.com/300',
      },
    ];
    setLawyers(mockLawyers);
  };

  const forceSwipe = (direction) => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => onSwipeComplete(direction));
  };

  const onSwipeComplete = (direction) => {
    const item = lawyers[currentIndex];
    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    position.setValue({ x: 0, y: 0 });
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  const onSwipeLeft = (item) => {
    console.log('Swiped left on:', item);
  };

  const onSwipeRight = (item) => {
    console.log('Swiped right on:', item);
    // 這裡可以添加匹配邏輯，比如顯示一個匹配成功的提示
    alert(`您已成功與律師 ${item.name} 配對！`);
  };

  const renderCard = () => {
    if (currentIndex >= lawyers.length) {
      return (
        <Card style={styles.card}>
          <Card.Content>
            <Title>沒有更多律師了</Title>
            <Paragraph>請稍後再試或修改您的搜索條件。</Paragraph>
          </Card.Content>
        </Card>
      );
    }

    const lawyer = lawyers[currentIndex];
    return (
      <Animated.View
        style={[styles.cardContainer, getCardStyle()]}
        {...panResponder.panHandlers}
      >
        <Card style={styles.card}>
          <Card.Cover source={{ uri: lawyer.image }} />
          <Card.Content>
            <Title>{lawyer.name}</Title>
            <Paragraph>專長: {lawyer.specialty}</Paragraph>
            <Paragraph>經驗: {lawyer.experience}年</Paragraph>
            <Paragraph>評分: {lawyer.rating}/5</Paragraph>
          </Card.Content>
        </Card>
      </Animated.View>
    );
  };

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg'],
    });
    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    };
  };

  return (
    <View style={styles.container}>
      {renderCard()}
      <View style={styles.buttonContainer}>
        <IconButton
          icon="close"
          size={30}
          onPress={() => forceSwipe('left')}
          style={styles.button}
        />
        <IconButton
          icon="check"
          size={30}
          onPress={() => forceSwipe('right')}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  cardContainer: {
    width: SCREEN_WIDTH,
    position: 'absolute',
  },
  card: {
    margin: 10,
    elevation: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: 'white',
    elevation: 2,
  },
});
