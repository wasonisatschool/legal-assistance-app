// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import QuestionnaireScreen from './screens/QuestionnaireScreen';
import LegalProcessScreen from './screens/LegalProcessScreen';
import AIAssistantScreen from './screens/AIAssistantScreen';
import LawyerFinderScreen from './screens/LawyerFinderScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import CaseHistoryScreen from './screens/CaseHistoryScreen';
import DocumentManagementScreen from './screens/DocumentManagementScreen';
import ChatSupportScreen from './screens/ChatSupportScreen';
import CaseDetailScreen from './screens/CaseDetailScreen';
import LegalAidScreen from './screens/LegalAidScreen';
import LawyerMatchScreen from './screens/LawyerMatchScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} />
          <Stack.Screen name="LegalProcess" component={LegalProcessScreen} />
          <Stack.Screen name="AIAssistant" component={AIAssistantScreen} />
          <Stack.Screen name="LawyerFinder" component={LawyerFinderScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="CaseHistory" component={CaseHistoryScreen} />
          <Stack.Screen name="DocumentManagement" component={DocumentManagementScreen} />
          <Stack.Screen name="ChatSupport" component={ChatSupportScreen} />
          <Stack.Screen name="CaseDetail" component={CaseDetailScreen} />
          <Stack.Screen name="LegalAid" component={LegalAidScreen} />
          <Stack.Screen name="LawyerMatch" component={LawyerMatchScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}