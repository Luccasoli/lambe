/* eslint-disable import/prefer-default-export */
export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT = 'ADD_COMMENT';

export const addPost = post => ({ type: ADD_POST, payload: post });
export const addComment = (postId, comment) => ({
	type: ADD_COMMENT,
	payload: { postId, comment }
});

/* eslint-disable global-require */
const initialState = {
	posts: [
		{
			id: Math.random(),
			nickname: 'Rafael Pereira',
			email: 'rafael12@gmail.com',
			image: require('../../assets/imgs/fence.jpg'),
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
			image: require('../../assets/imgs/bw.jpg'),
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

		case ADD_COMMENT:
			return {
				...state,
				posts: state.posts.map(post => {
					if (post.id === action.payload.postId) {
						if (post.comments) {
							return {
								...post,
								comments: [...post.comments, action.payload.comment]
							};
						}
						return { ...post, comments: [action.payload.comment] };
					}
					return post;
				})
			};

		default:
			return state;
	}
};

export default postsReducer;
