import React, { createContext, useReducer } from 'react';

export const AppContext = createContext();

const initialState = {
    user: null,
    posts: []
};

const reducer = (state, action ) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'SET_POSTS':
            return { ...state, posts: action.payload };
        default:
            return state;
    }
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}