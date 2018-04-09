import types from '../actions/types';

const DEFAUlT_STATE = {
    items: []
};

export default function(state = DEFAUlT_STATE, action){
    switch(action.type){
        case types.GET_LIST_DATA:
            // console.log('LIST REDUCER - GET LIST', action.payload);
            return {...state, items: action.payload.data.todos};
            
        default: 
            return state;
    }
}