/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class Input extends Component {
	render() {
		return (
			<TextInput {...this.props} style={[styles.input, this.props.style]} />
		);
	}
}

const styles = StyleSheet.create({
	input: {
		width: '90%',
		marginTop: 10,
		backgroundColor: '#eee',
		height: 40,
		paddingHorizontal: '5%',
		borderWidth: 1,
		borderColor: '#333'
	}
});
