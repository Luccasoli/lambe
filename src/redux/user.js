export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

export const login = user => ({
	type: USER_LOGGED_IN,
	payload: user
});

export const logout = () => ({
	type: USER_LOGGED_OUT
});

const initialState = {
	name: null,
	email: null
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOGGED_IN:
			return {
				...state,
				name: action.payload.name,
				email: action.payload.email
			};

		case USER_LOGGED_OUT:
			return {
				...state,
				name: null,
				email: null
			};

		default:
			return state;
	}
};

export default userReducer;
