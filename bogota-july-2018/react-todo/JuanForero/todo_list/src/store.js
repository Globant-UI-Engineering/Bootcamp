import {createStore} from 'redux';

const reducer=(state,action)=>{
    if(action.type==="ADD_TO_LIST"){
        return{
            ...state,
            task:state.task.concat(action.input)
        };
        
    }
   
    return state;
}


export default createStore(reducer,{task:[]})


