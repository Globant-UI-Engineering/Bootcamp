import CHANGE_TAB from '../Const';

//Action
let changeTab = function(actualTab) { 
    return {
      type: CHANGE_TAB,
      payload: actualTab
    }
}

export default changeTab;