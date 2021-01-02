import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) => {
	/*
     props.children allows this component to be dynamic and output all of the props values

     <Card>
      <Text>Child 1</Text>
      <Text>Child 2</Text>
     </Card>

     Both the Text components will be rendered with props.children
  */
	return (
		<View style={styles.card}>
			<View style={styles.cardContent}>{props.children}</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		borderRadius: 6,
		elevation: 3, // distance between the card and the back of the screen
		backgroundColor: '#fff',
		shadowOffset: { width: 1, height: 1 }, // basically a box shadow
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2, // how the shadow blends in
		marginHorizontal: 4,
		marginVertical: 6,
	},
	cardContent: {
		marginHorizontal: 18,
		marginVertical: 20,
	},
});

export default Card;
