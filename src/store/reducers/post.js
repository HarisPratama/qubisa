const initialState = {
	posts: []
};

export default function postReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_POSTS':
			return { ...state, posts: action.payload };
		default:
			return state;
	}
}
