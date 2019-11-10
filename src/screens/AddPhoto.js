/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
	Text,
	StyleSheet,
	View,
	TouchableOpacity,
	TextInput,
	Image,
	Dimensions,
	Platform,
	SafeAreaView,
	Alert,
	Button
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { addPost } from '../redux/posts';

class AddPhoto extends Component {
	state = {
		image: null,
		comment: ''
	};

	pickImage = () => {
		ImagePicker.showImagePicker(
			{
				title: 'Escolha a imagem',
				maxHeight: 600,
				maxWidth: 800
			},
			res => {
				if (!res.didCancel) {
					this.setState({
						image: { uri: res.uri, base64: res.data }
					});
				}
			}
		);
	};

	save = async () => {
		const { name, email, navigation } = this.props;
		const { image, comment } = this.state;
		this.props.onAddPost({
			id: Math.random(),
			nickname: name,
			email,
			image,
			comments: [
				{
					nickname: name,
					comment
				}
			]
		});
		Alert.alert('Seu Post foi adicionado com sucesso!');
		this.setState({ image: null, comment: '' });
		navigation.navigate('Feed');
	};

	render() {
		const { name, navigation } = this.props;
		return (
			<SafeAreaView style={styles.container}>
				<Text style={styles.title}> Compartilhe uma Imagem </Text>
				<View style={styles.imageContainer}>
					<Image
						resizeMode="center"
						style={styles.image}
						source={this.state.image}
					/>
				</View>
				<TouchableOpacity onPress={this.pickImage} style={styles.button}>
					<Text style={styles.buttomText}>Escolha a foto</Text>
				</TouchableOpacity>
				<TextInput
					placeholderTextColor="gray"
					style={styles.input}
					placeholder="Faça um comentário.. "
					value={this.state.comment}
					onChangeText={comment => this.setState({ comment })}
				/>
				<TouchableOpacity onPress={this.save} style={styles.button}>
					<Text style={styles.buttomText}>Salvar</Text>
				</TouchableOpacity>
				{!name && (
					<SafeAreaView
						style={{
							position: 'absolute',
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: 'rgba(0,0,0,0.5)',
							height: Dimensions.get('window').height,
							width: Dimensions.get('window').width
						}}
					>
						<View>
							<TouchableHighlight
								style={{
									borderRadius: 10
								}}
								onPress={() => navigation.navigate('Profile')}
							>
								<View
									style={{
										backgroundColor: 'white',
										overflow: 'hidden',
										padding: 20,
										borderRadius: 10
									}}
								>
									<Text style={{ fontSize: 20, color: '#4286f4' }}>
										Realizar Login
									</Text>
								</View>
							</TouchableHighlight>
						</View>
					</SafeAreaView>
				)}
			</SafeAreaView>
		);
	}
}

const mapStateToProps = ({ user }) => user;

const mapDispatchToProps = dispatch => ({
	onAddPost: post => dispatch(addPost(post))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddPhoto);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	title: {
		fontSize: 20,
		marginTop: Platform.os === 'ios' ? 30 : 10,
		fontWeight: 'bold'
	},
	imageContainer: {
		width: '90%',
		height: Dimensions.get('window').width / 2,
		backgroundColor: '#eee',
		marginTop: 10
	},
	image: {
		width: '100%',
		height: Dimensions.get('window').width / 2
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
		marginTop: 20,
		width: '90%',
		fontSize: 15
	}
});
