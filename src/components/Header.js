import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Header extends Component {
	state = { a: [] };

	render() {
		return (
			<View>
				<Text> textInComponent </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({});
