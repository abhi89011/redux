/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import Api from './src/screen/api';
import ShowModel from './src/screen/ShowModel';
import Task10 from './src/screen/Task';
import Task from './src/screen/task1';
import Cards from './src/screen/task2';
import Task2 from './src/screen/task2';
import Task3 from './src/screen/task3';
import Task4 from './src/screen/Task4';
import Task5 from './src/screen/Task5';

AppRegistry.registerComponent(appName, () => 
App
);
