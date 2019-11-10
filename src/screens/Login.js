/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../store/actions/user';
import Input from '../components/Input';

class Login extends Component {
	state = {
		name: 'Temporário',
		email: '',
		password: ''
	};

	login = () => {
		this.props.onLogin(this.state);
		this.props.navigation.navigate('Profile');
	};

	render() {
		return (
			<View style={styles.container}>
				<Input
					placeholder="Email"
					style={styles.input}
					autoFocus
					keyboardType="email-address"
					value={this.state.email}
					onChangeText={email => this.setState({ email })}
				/>
				<Input
					placeholder="Senha"
					style={styles.input}
					secureTextEntry
					keyboardType="email-address"
					value={this.state.password}
					onChangeText={password => this.setState({ password })}
				/>
				<TouchableOpacity onPress={this.login} style={styles.button}>
					<Text style={styles.buttomText}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('Register')}
					style={styles.button}
				>
					<Text style={styles.buttomText}>Criar nova conta...</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

Login.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired
	}).isRequired,
	onLogin: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
	return {
		onLogin: user => dispatch(login(user))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Login);

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
