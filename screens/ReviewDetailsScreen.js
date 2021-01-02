import React from 'react';
import { View, Text } from 'react-native';

import { globalStyles } from '../styles/global';

const ReviewDetailsScreen = ({ route, navigation }) => {
	const { params } = route;

	return (
		<View style={globalStyles.container}>
			<Text>{params.title}</Text>
			<Text>{params.body}</Text>
			<Text>{params.rating}</Text>
		</View>
	);
};

export default ReviewDetailsScreen;
