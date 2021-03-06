import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { globalStyles } from '../styles/global';
import FlatButton from '../shared/Button';

import { Formik } from 'formik';
import * as yup from 'yup';

/*
	Validating with yup
	title is type string that is required and min of 4 chars
	body is type string that is required and min of 8 chars
	rating is type string (because we just use it to get an image and it'll be a string in the TextInput anyway) that is required
 */
// test(name for test, feedback message if test fails, callback that validates)
const reviewSchema = yup.object({
	title: yup.string().required().min(4),
	body: yup.string().required().min(8),
	rating: yup
		.string()
		.required()
		.test('is-num-1-5', 'Rating must be a number 1-5', (val) => {
			return parseInt(val) < 6 && parseInt(val) > 0;
		}),
});

const ReviewForm = ({ addReview }) => {
	return (
		<View style={globalStyles.container}>
			<Formik
				initialValues={{ title: '', body: '', rating: '' }}
				validationSchema={reviewSchema}
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
							onBlur={formikProps.handleBlur('title')}
						/>
						<Text style={globalStyles.errorText}>
							{formikProps.touched.title && formikProps.errors.title}
						</Text>

						<TextInput
							multiline
							minHeight={60}
							style={globalStyles.input}
							placeholder="Review Body"
							onChangeText={formikProps.handleChange('body')}
							value={formikProps.values.body}
							onBlur={formikProps.handleBlur('body')}
						/>
						<Text style={globalStyles.errorText}>
							{formikProps.touched.body && formikProps.errors.body}
						</Text>

						<TextInput
							style={globalStyles.input}
							placeholder="Rating (1-5)"
							onChangeText={formikProps.handleChange('rating')}
							value={formikProps.values.rating}
							keyboardType="numeric"
							onBlur={formikProps.handleBlur('rating')}
						/>
						<Text style={globalStyles.errorText}>
							{formikProps.touched.rating && formikProps.errors.rating}
						</Text>

						<FlatButton text="submit" handlePress={formikProps.handleSubmit} />
					</View>
				)}
			</Formik>
		</View>
	);
};

export default ReviewForm;
