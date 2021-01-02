import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>Home Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 24,
	},
	titleText: {
		fontFamily: 'nunito-bold',
		fontSize: 18,
	},
});

export default HomeScreen;