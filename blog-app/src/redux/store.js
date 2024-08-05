import { createStore } from 'redux';

const initialState = {
    user: null,
    posts: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'SET_POSTS':
            return { ...state, posts: action.payload };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;