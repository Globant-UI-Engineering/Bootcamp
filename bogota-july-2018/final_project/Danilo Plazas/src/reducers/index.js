import { combineReducers } from 'redux';

import dataReducer from './DataReducer';
import selectedDataReducer from './SelectedDataReducer';

const reducers = combineReducers({
    data: dataReducer,
    selectedData: selectedDataReducer
});

export default reducers;
