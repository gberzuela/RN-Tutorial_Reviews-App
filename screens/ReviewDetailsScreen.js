import React from 'react';
import { View, Text, Button } from 'react-native';

import { globalStyles } from '../styles/global';

const ReviewDetailsScreen = ({ navigation }) => {
	const handlePress = () => {
		navigation.goBack();
	};

	return (
		<View style={globalStyles.container}>
			<Text>Review Details Screen</Text>
			<Button title="Back to Home" onPress={handlePress} />
		</View>
	);
};

export default ReviewDetailsScreen;
