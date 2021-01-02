import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { globalStyles, images } from '../styles/global';
import Card from '../shared/Card';

const ReviewDetailsScreen = ({ route, navigation }) => {
	const { params } = route;

	return (
		<View style={globalStyles.container}>
			<Card>
				<Text>{params.title}</Text>
				<Text>{params.body}</Text>
				<View style={styles.rating}>
					<Text>GameZone rating: </Text>
					<Image source={images.ratings[params.rating]} />
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	rating: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: 16,
		marginTop: 16,
		borderTopWidth: 1,
		borderTopColor: '#eee',
	},
});

export default ReviewDetailsScreen;
