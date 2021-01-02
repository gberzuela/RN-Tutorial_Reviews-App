import React from 'react';
import { View, Text } from 'react-native';

import { globalStyles } from '../styles/global';
import Card from '../shared/Card';

const ReviewDetailsScreen = ({ route, navigation }) => {
	const { params } = route;

	return (
		<View style={globalStyles.container}>
			<Card>
				<Text>{params.title}</Text>
				<Text>{params.body}</Text>
				<Text>{params.rating}</Text>
			</Card>
		</View>
	);
};

export default ReviewDetailsScreen;
