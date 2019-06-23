import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Gravatar } from 'react-native-gravatar';

export default class Profile extends Component {
	logout = () => {};

	render() {
		const options = {
			email: '',
			secure: true
		};
		return (
			<View style={styles.container}>
				<Gravatar style={styles.avatar} options={options} />
				<Text style={styles.nickname}>dfdf</Text>
				<Text style={styles.email}>dfdf</Text>
				<TouchableOpacity onPress={this.logout} style={styles.button}>
					<Text style={styles.buttomText}>Sair</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	avatar: {
		width: 150,
		height: 150,
		borderRadius: 75,
		marginTop: 50
	},
	nickname: {
		fontSize: 30,
		marginTop: 30,
		fontWeight: 'bold'
	},
	email: {
		fontSize: 25,
		marginTop: 20
	},
	button: {
		marginTop: 30,
		padding: 10,
		backgroundColor: '#4286f4'
	},
	buttomText: {
		fontSize: 20,
		color: 'white'
	}
});
