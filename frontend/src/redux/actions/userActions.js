import axios from 'axios'
import {LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESSS} from '../constants/userConstants';


export const login = (email, password)=>{
    console.log(email, password);
    return async (dispatch)=>{
        try{
            dispatch({type: LOGIN_REQUEST})

            const {data} = await axios.post('/api/login', {email, password},{
                Headers : {
                    'Content-type' : "application/json"
                }
            })

            dispatch({type : LOGIN_SUCCESSS, payload : data.message})
        }
        catch(error){
            dispatch({type : LOGIN_FAILED, payload : error.response.data.message})
        }
    }
}