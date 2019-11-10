/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
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

Post.propTypes = {
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			nickname: PropTypes.string,
			comment: PropTypes.string.isRequired
		})
	).isRequired,
	email: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	nickname: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	image: {
		width: '100%',
		height: (Dimensions.get('window').height * 2) / 5
	}
});
