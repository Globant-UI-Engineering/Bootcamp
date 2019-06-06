import CHANGE_TAB from '../Const';

//Reducer
let tabReducer = function(state={}, action) {
    switch(action.type) {
      case CHANGE_TAB:

            let booleanTabs = {
                home: false,
                eventsMap: false,
                yourEvents: false,
                createEvent: false
            }
        
            switch (action.payload) {
                case 'Home':
                    booleanTabs.home = true;
                  break;
                case 'EventsMap':
                    booleanTabs.eventsMap = true;
                  break;
                case 'YourEvents':
                    booleanTabs.yourEvents = true;
                  break;
                case 'CreateEvent':
                    booleanTabs.createEvent = true;
                  break;
            }
            return booleanTabs;
      default:
        return state;
    }
}

export default tabReducer;