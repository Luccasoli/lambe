/* eslint-disable import/prefer-default-export */
import { ADD_POST } from '../actions/actionTypes';

/* eslint-disable global-require */
const initialState = {
	posts: [
		{
			id: Math.random(),
			nickname: 'Rafael Pereira',
			email: 'rafael12@gmail.com',
			image: require('../../../assets/imgs/fence.jpg'),
			comments: [
				{
					nickname: 'Joaozinho Carvalho',
					comment: 'Aí sim, papai!'
				},
				{
					nickname: 'Marcos Aurélio',
					comment: 'Cuidam man'
				}
			]
		},
		{
			id: Math.random(),
			nickname: 'Bruno de Sousa',
			email: 'brunin@gmail.com',
			image: require('../../../assets/imgs/bw.jpg'),
			comments: []
		}
	]
};

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, action.payload]
			};

		default:
			return state;
	}
};

export default postsReducer;
