import { type as findTechnologys } from '../actions/findTechnologys';
import loading from '../../../src/images/loading.gif'

const defaultState = [{title:"Loading",id:1,image:loading},{title:"Loading",id:2,image:loading}];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findTechnologys: {
            let {userInput,technologys} = payload;
            let results = technologys.filter((element) =>{
              return element.title.toLowerCase().includes(userInput)?element.title:"";
            })
            return results;
        }

        default:
            return state;
    }
}

export default reducer;