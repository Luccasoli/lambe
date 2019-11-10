/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Input from '../components/Input';

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
				<Input
					placeholder="Nome"
					autoFocus
					value={this.state.name}
					onChangeText={name => this.setState({ name })}
				/>
				<Input
					placeholder="Email"
					keyboardType="email-address"
					value={this.state.email}
					onChangeText={email => this.setState({ email })}
				/>
				<Input
					placeholder="Senha"
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

Register.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired
	}).isRequired
};

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
	}
});
