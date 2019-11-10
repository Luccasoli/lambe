import React, { Component } from 'react';
import {
	Text,
	StyleSheet,
	View,
	TextInput,
	TouchableWithoutFeedback as TWF
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addComment } from '../redux/posts';

class AddComment extends Component {
	state = {
		comment: '',
		editMode: false
	};

	handleAddComment = () => {
		const { comment } = this.state;
		const { name, postId, onAddComment } = this.props;
		onAddComment(postId, {
			nickname: name,
			comment
		});
		this.setState({ comment: '', editMode: false });
	};

	render() {
		const { comment, editMode } = this.state;
		let commentArea = null;
		if (editMode) {
			commentArea = (
				<View style={styles.container}>
					<TextInput
						placeholder="Escreva um comentário"
						style={styles.input}
						autoFocus
						value={comment}
						onChangeText={text => this.setState({ comment: text })}
						onSubmitEditing={this.handleAddComment}
					/>
					<TWF onPress={() => this.setState({ editMode: false })}>
						<Icon name="times" size={15} color="#555" />
					</TWF>
				</View>
			);
		} else {
			commentArea = (
				<TWF onPress={() => this.setState({ editMode: true })}>
					<View style={styles.container}>
						<Icon name="comment-o" size={25} color="#555" />
						<Text style={styles.caption}>Adicione um comentário...</Text>
					</View>
				</TWF>
			);
		}
		return <View>{commentArea}</View>;
	}
}

AddComment.propTypes = {
	name: PropTypes.string.isRequired,
	onAddComment: PropTypes.func.isRequired,
	postId: PropTypes.string.isRequired
};

const mapStateToProps = ({ user }) => user;

const mapDispatchToProps = dispatch => ({
	onAddComment: (postId, comment) => dispatch(addComment(postId, comment))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddComment);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		margin: 10
	},
	caption: {
		marginLeft: 10,
		fontSize: 12,
		color: '#666'
	},
	input: {
		flex: 1,
		borderBottomWidth: 0.4,
		padding: '3%',
		fontSize: 12
	}
});
