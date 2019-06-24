import React, { Component } from 'react';
import {
	Text,
	StyleSheet,
	View,
	TouchableOpacity,
	TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { login } from '../store/actions/user';

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
				<TextInput
					placeholder="Email"
					style={styles.input}
					autoFocus
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
