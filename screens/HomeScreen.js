import React from 'react';
import { View, Text, Button } from 'react-native';

import { globalStyles } from '../styles/global';

const HomeScreen = ({ navigation }) => {
	const handlePress = () => {
		navigation.navigate('Review Details Screen');
	};

	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.titleText}>Home Screen</Text>
			<Button title="Got to Review" onPress={handlePress} />
		</View>
	);
};

export default HomeScreen;
