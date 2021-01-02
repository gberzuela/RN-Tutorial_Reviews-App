import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import ReviewDetailsScreen from '../screens/ReviewDetailsScreen';

const Stack = createStackNavigator();

const MainNavigation = () => {
	return (
		<NavigationContainer>
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
					options={{ title: 'GameZone' }}
				/>
				<Stack.Screen
					name="Review Details Screen"
					component={ReviewDetailsScreen}
					options={{ title: 'Review Details' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigation;
