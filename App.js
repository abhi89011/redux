import { transform } from "@babel/core";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { back } from "react-native/Libraries/Animated/Easing";
import Task from "./src/screen/task1";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Task2 from "./src/screen/task2";
import SplashScreen from "./src/screen/SplashScreen";
import Task3 from "./src/screen/task3";
import Api from "./src/screen/api";
import Task10 from "./src/screen/Task";
import { Provider } from "react-redux";
import store from "./src/redux/store.js"
import ReduxScreen from "./src/screen/Redux";
function App() {
  const [test, setTest] = useState('flex-start')
  const [test1, setTest1] = useState('flex-start')

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Api" component={ReduxScreen} />
          <Stack.Screen name="Task" component={Task10} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  )


}
export default App;