import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

const ReviewForm = ({ addReview }) => {
	return (
		<View style={globalStyles.container}>
			<Formik
				initialValues={{ title: '', body: '', rating: '' }}
				onSubmit={(values, actions) => {
					actions.resetForm(); // Clears input fields on Formik
					addReview(values);
				}}
			>
				{(formikProps) => (
					<View>
						<TextInput
							style={globalStyles.input}
							placeholder="Review Title"
							onChangeText={formikProps.handleChange('title')}
							value={formikProps.values.title}
						/>

						<TextInput
							multiline
							style={globalStyles.input}
							placeholder="Review Body"
							onChangeText={formikProps.handleChange('body')}
							value={formikProps.values.body}
						/>

						<TextInput
							style={globalStyles.input}
							placeholder="Rating (1-5)"
							onChangeText={formikProps.handleChange('rating')}
							value={formikProps.values.rating}
							keyboardType="numeric"
						/>

						<Button
							title="Submit"
							color="maroon"
							onPress={formikProps.handleSubmit}
						/>
					</View>
				)}
			</Formik>
		</View>
	);
};

export default ReviewForm;
