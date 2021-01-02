import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ navigation, title }) => {
	const handlePress = () => {
		navigation.openDrawer();
	};

	return (
		<ImageBackground
			style={styles.header}
			source={require('../assets/game_bg.png')}
		>
			<MaterialIcons
				style={styles.icon}
				name="menu"
				size={28}
				onPress={handlePress}
			/>
			<View style={styles.headerTitle}>
				<Image
					style={styles.headerImage}
					source={require('../assets/heart_logo.png')}
				/>
				<Text style={styles.headerText}>{title}</Text>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	header: {
		width: Dimensions.get('screen').width,
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerImage: {
		width: 26,
		height: 26,
		marginHorizontal: 20,
	},
	headerText: {
		fontWeight: 'bold',
		fontSize: 20,
		color: '#333',
		letterSpacing: 1,
	},
	headerTitle: {
		flexDirection: 'row',
	},
	icon: {
		position: 'absolute',
		left: 16,
	},
});

export default Header;
