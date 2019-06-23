import React, { Component } from 'react';
import {
	Text,
	StyleSheet,
	View,
	TouchableOpacity,
	TextInput
} from 'react-native';

export default class Register extends Component {
	state = {
		name: '',
		email: '',
		password: ''
	};

	login = () => {
		this.props.navigation.navigate('Profile');
	};

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					placeholder="Nome"
					style={styles.input}
					autoFocus
					value={this.state.name}
					onChangeText={name => this.setState({ name })}
				/>
				<TextInput
					placeholder="Email"
					style={styles.input}
					keyboardType="email-address"
					value={this.state.email}
					onChangeText={email => this.setState({ email })}
				/>
				<TextInput
					placeholder="Senha"
					style={styles.input}
					secureTextEntry
					keyboardType="email-address"
					value={this.state.password}
					onChangeText={password => this.setState({ password })}
				/>
				<TouchableOpacity onPress={this.login} style={styles.button}>
					<Text style={styles.buttomText}>Salvar</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	button: {
		marginTop: 30,
		padding: 10,
		backgroundColor: '#4286f4'
	},
	buttomText: {
		fontSize: 20,
		color: 'white'
	},
	input: {
		width: '90%',
		marginTop: 10,
		backgroundColor: '#eee',
		height: 40,
		borderWidth: 1,
		borderColor: '#333'
	}
});
