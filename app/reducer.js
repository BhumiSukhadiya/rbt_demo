// Import Actions
import {STORE_PANEL_DATA  } from './actions';
import _ from 'lodash';
import { combineReducers } from 'redux';

// Initial State
const initialState = {
    panelData:{}
};

const TabComponentData = (state = initialState, action) => {
    switch (action.type) {
        case STORE_PANEL_DATA:
            let temp={};
            if(!_.isEmpty(state.panelData)){
                temp=state.panelData;
            }
            temp[action.tab_no]=action.panelData;
            //console.log(temp)
            return {...state,
                panelData:temp};
        default:
            return state;
    }
};

export default combineReducers({
    TabComponentData
});

