/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent('main', () => App);
AppRegistry.registerComponent(appName, () => App);

if(Platform.OS == 'web') {
    const rootTag = document.getElementById('root');
    AppRegistry.runApplication(appName, { rootTag });
}