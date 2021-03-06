import  axios from 'axios'
import {returnErrors}from './erroAction'
import {
    USER_LOADED, 
    USER_LOADING,
     AUTH_ERROR, 
     LOGIN_FAIL, 
     LOGIN_SUCCESS, 
     LOGOUT_SUCCESS,
     REGISTER_FAIL, 
     REGISTER_SUCCESS
 } from './types' 

 const URL = 'http://localhost:5000/api/auth/user'
 const USER_URL=  'http://localhost:5000/api/user'



 //check token & load user 

export const loadUser = () => (dispatch, getState) => {
  //User loading
  dispatch({type: USER_LOADING})

  
  axios.get(URL, tokenConfig(getState))
  .then(res => dispatch({
      type: USER_LOADED,
      payload: res.data
  }))
  .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
          type: AUTH_ERROR
      })
  })
}

//register User 
export const register = ({name,email,password}) => dispatch => {
    //Headers
    const config = {
        header: {
            "Content-type": "application/json"
        }
    }
    //Request Body
    const body = JSON.stringify({name, email,password})
    axios.post(USER_URL,body,config)
    .then(res => dispatch({
        type:REGISTER_SUCCESS,
        payload:res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
        dispatch({
            type:REGISTER_FAIL
        })
    })
}

export const logout = () => {
    return{
        type:LOGOUT_SUCCESS
    }
}

//setup config/config/header and token

export const tokenConfig = getState => {
    //Get token from localstorage
  const token = getState().auth.token
  //Headers
  const config = {
      header: {
          "Content-type": "application/json"
      }
  }
//  if token, add to header
if (token) {
    config.header['x-auth-token'] = token
}
return config
}
