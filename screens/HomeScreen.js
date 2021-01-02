import React from 'react';
import { View, Text } from 'react-native';

import { globalStyles } from '../styles/global';

const HomeScreen = () => {
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.titleText}>Home Screen</Text>
		</View>
	);
};

export default HomeScreen;
