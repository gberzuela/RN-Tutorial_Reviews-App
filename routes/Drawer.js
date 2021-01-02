import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name="Home Screen" component={HomeStack} />
				<Drawer.Screen name="About Screen" component={AboutStack} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default DrawerNavigator;
