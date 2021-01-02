import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import ReviewDetailsScreen from '../screens/ReviewDetailsScreen';

const Stack = createStackNavigator();

const MainNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home Screen" component={HomeScreen} />
				<Stack.Screen
					name="Review Details Screen"
					component={ReviewDetailsScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigation;
