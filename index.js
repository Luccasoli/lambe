if (__DEV__) {
	import('./src/config/ReactotronConfig').then(() =>
		console.log('Reactotron Configured')
	);
	console.disableYellowBox = true;
}

import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { MenuNavigator } from './src/Navigator.js';

import storeConfig from './src/store/storeConfig.js';

const store = storeConfig();
const Redux = () => (
	<Provider store={store}>
		<MenuNavigator />
	</Provider>
);
AppRegistry.registerComponent(appName, () => Redux);
