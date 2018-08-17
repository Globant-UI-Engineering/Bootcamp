import data from '../../src/reducers/data';

describe ('Request Reducer', () => {

      it('should handle ADD_TODO', () => {
        expect (data (undefined, {
            type: ADD_TODO,
            payload: {
                text: 'Dormir'
            }
        })).toEqual([
            {
                text: 'Dormir'
            }
        ]);
      });      


    // it('should handle DELETE_TODO', () => {
    //   expect (request (undefined, {
    //       type: ADD_TODO,
    //       payload: {
    //           sendingRequest: true
    //       }
    //   })).toEqual({
    //     sendingRequest: true
    //   });
    // });
});