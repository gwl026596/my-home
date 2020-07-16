import React from 'react'
import * as myConstants from '../constants'
export function initCity(data){
    return{
       type:myConstants.INIT_CITY,
       data
    }
}


export function updateCity(data){
    return{
       type:myConstants.UPDATE_CITY,
       data
    }
}