import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AboutScreen from '../screens/AboutScreen';
import Header from '../shared/Header';

const Stack = createStackNavigator();

const AboutStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="About Screen"
				component={AboutScreen}
				options={({ navigation }) => {
					return {
						headerTitle: () => (
							<Header navigation={navigation} title="About GameZone" />
						),
						headerTitleAlign: 'center',
					};
				}}
			/>
		</Stack.Navigator>
	);
};

export default AboutStack;
