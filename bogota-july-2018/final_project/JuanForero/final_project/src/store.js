import {createStore} from 'redux';

const reducer=(state,action)=>{
    switch(action.type){
        case "SEND_INFO":
            return{
                ...state,
              info:action.data,
            }
        
        default:
        break;
    }
    return state;
};
export default createStore(reducer,{info:{}})


