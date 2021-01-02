import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import DrawerNavigator from './routes/Drawer';

import * as Font from 'expo-font'; // Necessary
import AppLoading from 'expo-app-loading'; // Easy way for native to determine when the app is loaded

// expo-font has a built in async function to load fonts in for us
const getFonts = () =>
	Font.loadAsync({
		'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
		'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
	});

const App = () => {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	return fontsLoaded ? (
		<DrawerNavigator />
	) : (
		<AppLoading
			startAsync={getFonts}
			onFinish={() => setFontsLoaded(true)}
			onError={() => console.log('error')}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App;
