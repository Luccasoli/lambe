/* eslint-disable react/forbid-prop-types */
/* eslint-disable global-require */
import React, { Component } from 'react';
import { StyleSheet, View, FlatList, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Post from '../components/Post';
// eslint-disable-next-line react/prefer-stateless-function
class Feed extends Component {
	render() {
		const { posts } = this.props;
		return (
			<KeyboardAvoidingView behavior="height" style={styles.container}>
				<Header />
				<FlatList
					data={posts}
					keyExtractor={item => item.id.toString()}
					renderItem={({ item }) => <Post key={item.id} {...item} />}
				/>
			</KeyboardAvoidingView>
		);
	}
}

Feed.propTypes = {
	posts: PropTypes.array.isRequired
};

const mapStateToProps = ({ posts }) => posts;

export default connect(
	mapStateToProps,
	null
)(Feed);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor: '#f5fcff'
	}
});
