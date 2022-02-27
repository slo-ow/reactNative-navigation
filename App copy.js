import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import {View, Text, TouchableOpacity} from 'react-native';
import {Children} from 'react/cjs/react.production.min';
import HeaderlessScreen from './screens/HeaderlessScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            // Header 블록에 대한 스타일
            headerStyle: {
              backgroundColor: '#29b6f6',
            },
            // Header의 텍스트, 버튼들 색상
            headerTintColor: '#ffffff',
            // 타이틀 텍스트의 스타일
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Headerless"
          component={HeaderlessScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            // 안드로이드에서 좌측 화살표 아이콘 비활성화
            headerBackVisible: false,
            headerLeft: ({onPress}) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle: ({Children}) => (
              <View>
                <Text>{Children}</Text>
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
