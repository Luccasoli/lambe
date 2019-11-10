/* eslint-disable global-require */
import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';

class Feed extends Component {
	state = {
		posts: [
			{
				id: Math.random(),
				nickname: 'Rafael Pereira',
				email: 'rafael12@gmail.com',
				image: require('../../assets/imgs/fence.jpg'),
				comments: [
					{
						nickname: 'Joaozinho Carvalho',
						comment: 'Aí sim, papai!'
					},
					{
						nickname: 'Marcos Aurélio',
						comment: 'Cuidam man'
					}
				]
			},
			{
				id: Math.random(),
				nickname: 'Bruno de Sousa',
				email: 'brunin@gmail.com',
				image: require('../../assets/imgs/bw.jpg'),
				comments: []
			}
		]
	};

	render() {
		const { posts } = this.state;
		return (
			<View style={styles.container}>
				<Header />
				<FlatList
					data={posts}
					keyExtractor={item => item.id.toString()}
					renderItem={({ item }) => <Post {...item} />}
				/>
			</View>
		);
	}
}

export default Feed;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor: '#f5fcff'
	}
});
