import React from 'react'
import * as cityActions from '../actions'
import * as myConstants from '../constants'
const initCity={}
export default function city(state=initCity,action){
switch(action.type){
    case myConstants.INIT_CITY:
        return state=action.data;
    case myConstants.UPDATE_CITY:
        return state=action.data;
    default:
        return state;
}
}