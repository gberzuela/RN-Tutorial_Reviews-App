import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();

const AboutStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="About Screen"
				component={AboutScreen}
				options={{ title: 'About GameZone' }}
			/>
		</Stack.Navigator>
	);
};

export default AboutStack;
