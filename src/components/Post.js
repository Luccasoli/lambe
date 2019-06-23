import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native';
import Author from './Author';
import Comments from './Comments';
import AddComment from './AddComment';

export default class Post extends Component {
	render() {
		const { image, comments, nickname, email } = this.props;
		return (
			<View style={styles.container}>
				<Image resizeMode="cover" source={image} style={styles.image} />
				<Author nickname={nickname} email={email} />
				<Comments comments={comments} />
				<AddComment />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		width: '100%',
		height: (Dimensions.get('window').height * 2) / 5
	}
});
