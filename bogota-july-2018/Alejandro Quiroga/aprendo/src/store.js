import {createStore} from 'redux';

const reducer = (state,action)=>{
    state.user=[]
    if(action.type=="LOG_PROFESOR")
    {
        return{
            ...state,
            user:state.user.concat(action.usuario)
        }
    }

    if(action.type=="LOG_ALUMNO")
    {
        return{
            ...state,
            user:state.user.concat(action.usuario)
        }
    }

    if(action.type=="LOG_DIRECTOR")
    {
        return{
           
            ...state,
            user:state.user.concat(action.usuario)
        }
    }


    return state
}


export default createStore(reducer, {user:[]})