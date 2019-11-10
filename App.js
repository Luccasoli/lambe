/* eslint-disable global-require */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Post from './src/components/Post';
import Header from './src/components/Header';

export default class App extends Component {
	render() {
		const comments = [
			{
				nickname: 'Joana Elena',
				comment: 'Excelente foto!'
			},
			{
				nickname: 'Joana Edlena',
				comment: 'df foto!'
			}
		];

		return (
			<View style={{ flex: 1, justifyContent: 'flex-start' }}>
				<Header />
				<Post comments={comments} image={require('./assets/imgs/fence.jpg')} />
			</View>
		);
	}
}
