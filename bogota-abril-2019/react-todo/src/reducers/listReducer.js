function listReducer(state={},action){
    switch (action.type) {
        case 'ADD_TASK':{
            return{
                ...state,
                list: state.list.concat(action.payload)
            };
        }
        case 'CHANGE_CHECKED':{
            return{
                list: action.payload.listUpdated
            };
        }
        default:
            return state;
    }
}

export default listReducer;