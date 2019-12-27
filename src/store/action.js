import { getData } from '../service/fetch';

export const fetchData = () => async dispatch => {   // dispatch the action for fetching data from API
  const res = await getData();
  return dispatch({type:"FETCH",payload:res})
}

export const flagUpdation = (ind) => dispatch => {  // dispatch the action for the flag which decide which td should be editable
  return dispatch({type:"UPDATEFLAG",payload:ind});
}

export const updateUserDetail = (userdetail) => dispatch => {  // dispatch the action for updation for user detail except id of the user
  return dispatch({type:"UPDATEDETAIL",payload:userdetail});
}

export const setText = (text) => dispatch => {   // dispatch the action for the text which enter in search box
  return dispatch({type:"SETTEXT",payload:text})
}

export const deletedUsers = (deleteuser) => dispatch => { //  dispatch the action for deleting user from table
  return dispatch({type:"DELETE",payload:deleteuser})
}