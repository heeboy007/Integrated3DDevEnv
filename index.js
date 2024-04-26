/**
 * @format
 */
import 'react-native-gesture-handler';
import "react-native-url-polyfill/auto";
import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//simulator register...
AppRegistry.registerComponent('main', () => App);

//normal register...
AppRegistry.registerComponent(appName, () => App);

if(Platform.OS == 'web') {
    const rootTag = document.getElementById('root');
    AppRegistry.runApplication(appName, { rootTag });
}