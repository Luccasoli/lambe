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
	ScrollView,
	Alert
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class AddPhoto extends Component {
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
		Alert.alert('Image adicionada!', this.state.comment);
	};

	render() {
		return (
			<ScrollView>
				<View style={styles.container}>
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
						style={styles.input}
						placeholder="Faça um comentário.. "
						value={this.state.comment}
						onChangeText={comment => this.setState({ comment })}
					/>
					<TouchableOpacity onPress={this.save} style={styles.button}>
						<Text style={styles.buttomText}>Salvar</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}
}

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
		width: '90%'
	}
});
