import React, { Component } from 'react';
import { Text, StyleSheet, View, Alert, Dimensions } from 'react-native';

export default class Comments extends Component {
	render() {
		let view = null;
		const { comments } = this.props;

		if (comments) {
			view = this.props.comments.map((item, index) => {
				return (
					<View style={styles.commentContainer} key={index}>
						<Text style={styles.nickname}>{item.nickname}</Text>
						<Text style={styles.comment}>{item.comment}</Text>
					</View>
				);
			});
		}

		return <View style={styles.container}>{view}</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
	},
	commentContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	nickname: {
		fontWeight: 'bold',
		color: '#444'
	},
	comment: {
		color: '#444',
		marginLeft: 10
	}
});
