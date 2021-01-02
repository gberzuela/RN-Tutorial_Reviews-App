import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ReviewDetailsScreen from '../screens/ReviewDetailsScreen';
import Header from '../shared/Header';

const Stack = createStackNavigator();

const HomeStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="Home Screen"
			screenOptions={{
				headerStyle: {
					backgroundColor: '#eee',
				},
				headerTintColor: '#444',
			}}
		>
			<Stack.Screen
				name="Home Screen"
				component={HomeScreen}
				// options={{
				// 	headerTitle: () => <Header />,
				// 	headerTitleAlign: 'center',
				// }}
				options={({ navigation }) => {
					return {
						headerTitle: () => (
							<Header navigation={navigation} title="GameZone" />
						),
					};
				}}
			/>
			<Stack.Screen
				name="Review Details Screen"
				component={ReviewDetailsScreen}
				options={{ title: 'Review Details' }}
			/>
		</Stack.Navigator>
	);
};

export default HomeStack;
