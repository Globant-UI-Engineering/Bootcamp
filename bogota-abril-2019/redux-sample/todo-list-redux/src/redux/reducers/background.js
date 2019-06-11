import { type as changeBackgroundType } from '../actions/changeBackground';

const cssStyles = ["red","blue","yellow"];
const defaultState = cssStyles[0];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case changeBackgroundType: {
            // console.log(payload)
            const rand = Math.floor(0 + Math.random() * (3));
            // console.log(cssStyles[rand])
            return cssStyles[rand];
        }

        default:
            return state;
    }
}

export default reducer;