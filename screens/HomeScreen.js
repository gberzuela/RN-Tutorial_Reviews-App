import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	FlatList,
	TouchableWithoutFeedback,
	TouchableOpacity,
	Modal,
	Keyboard,
} from 'react-native';

import { globalStyles } from '../styles/global';
import Card from '../shared/Card';
import ReviewForm from './ReviewForm';

import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
	const [modalOpen, setModalOpen] = useState(false);
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

	const addReview = (review) => {
		// DB will handle generating a key for us
		// This is for sake of the tutorial
		review.key = Math.random().toString();
		setReviews([review, ...reviews]);
		setModalOpen(false);
	};

	return (
		<View style={globalStyles.container}>
			<Modal visible={modalOpen} animationType="slide">
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.modalContent}>
						<MaterialIcons
							style={{ ...styles.modalToggle, ...styles.modalClose }}
							name="close"
							size={24}
							onPress={() => setModalOpen(false)}
						/>
						<ReviewForm addReview={addReview} />
					</View>
				</TouchableWithoutFeedback>
			</Modal>

			<MaterialIcons
				style={styles.modalToggle}
				name="add"
				size={24}
				onPress={() => setModalOpen(true)}
			/>

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

const styles = StyleSheet.create({
	modalClose: {
		marginTop: 20,
		marginBottom: 0,
	},
	modalContent: {
		padding: 40,
		flex: 1,
	},
	modalToggle: {
		marginBottom: 10,
		borderWidth: 1,
		borderColor: '#f2f2f2',
		padding: 10,
		borderRadius: 10,
		alignSelf: 'center',
	},
});

export default HomeScreen;
