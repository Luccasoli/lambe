import React, { Component } from 'react';
import {
	Text,
	StyleSheet,
	View,
	TextInput,
	TouchableWithoutFeedback as TWF,
	Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AddComment extends Component {
	state = {
		comment: '',
		editMode: false
	};

	handleAddComment = () => {
		const { comment } = this.state;
		Alert.alert('Adicionado', comment);
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

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		margin: 10
	},
	caption: {
		marginLeft: 10,
		fontSize: 12,
		color: '#ccc'
	},
	input: {
		flex: 1,
		borderBottomWidth: 0.4,
		fontSize: 12
	}
});
