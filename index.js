if (__DEV__) {
	import('./src/config/ReactotronConfig').then(() =>
		console.log('Reactotron Configured')
	);
	console.disableYellowBox = true;
}

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Feed } from './src/screens/Feed';
import { MenuNavigator } from './src/Navigator.js';

AppRegistry.registerComponent(appName, () => MenuNavigator);
