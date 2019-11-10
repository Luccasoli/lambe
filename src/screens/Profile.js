import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Gravatar } from 'react-native-gravatar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../redux/user';

class Profile extends Component {
	logout = () => {
		const { onLogout, navigation } = this.props;
		onLogout();
		navigation.navigate('Auth');
	};

	render() {
		const { email, name } = this.props;
		const options = {
			email,
			secure: true
		};
		return (
			<View style={styles.container}>
				<Gravatar style={styles.avatar} options={options} />
				<Text style={styles.nickname}>{name}</Text>
				<Text style={styles.email}>{email}</Text>
				<TouchableOpacity onPress={this.logout} style={styles.button}>
					<Text style={styles.buttomText}>Sair</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

Profile.propTypes = {
	email: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired
	}).isRequired,
	onLogout: PropTypes.func.isRequired
};

const mapStateToProps = ({ user }) => {
	return user;
};

const mapDispatchToProps = dispatch => {
	return {
		onLogout: () => dispatch(logout())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Profile);

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
