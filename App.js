import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import HomeScreen from './screens/HomeScreen';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const getFonts = () =>
	Font.loadAsync({
		'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
		'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
	});

const App = () => {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	if (fontsLoaded) {
		return <HomeScreen />;
	} else {
		return (
			<AppLoading
				startAsync={getFonts}
				onFinish={() => setFontsLoaded(true)}
				onError={() => console.log('error')}
			/>
		);
	}
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
