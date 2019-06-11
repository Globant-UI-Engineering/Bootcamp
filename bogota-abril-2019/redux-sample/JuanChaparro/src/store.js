import { createStore } from "redux";

const initialState = {
    data: []
};

const reducer = (state = initialState, action) => {
    const newState = {...state};

    if (action.type === "UPDATE") {
        newState.data = action.element;
    }
    else if (action.type === "TOGGLE") {
        for (let i = 0; i < newState.data.length; i++) {
            if (newState.data[i].name === action.element) {
                let value = newState.data[i].done;
                newState.data[i].done = !value;
            }
        }
    }
    return newState;
} 

export default createStore(reducer);

