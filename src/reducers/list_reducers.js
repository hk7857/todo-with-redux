import types from '../actions/types';

const DEFAUlT_STATE = {
    items: []
};

export default function(state = DEFAUlT_STATE, action){
    switch(action.type){
        default: 
            return state;
    }
}