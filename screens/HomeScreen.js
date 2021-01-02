import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { globalStyles } from '../styles/global';
import Card from '../shared/Card';

const HomeScreen = ({ navigation }) => {
	const [reviews, setReviews] = useState([
		{ title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'Hyah!', key: '1' },
		{
			title: 'Gotta Catch Them All... Again!',
			rating: 4,
			body: 'Pika!',
			key: '2',
		},
		{
			title: 'Not So "Final" Fantasy',
			rating: 3,
			body: 'Tifa <3 Cloud',
			key: '3',
		},
	]);

	return (
		<View style={globalStyles.container}>
			<FlatList
				data={reviews}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate('Review Details Screen', item)}
					>
						<Card>
							<Text style={globalStyles.titleText}>{item.title}</Text>
						</Card>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

export default HomeScreen;
