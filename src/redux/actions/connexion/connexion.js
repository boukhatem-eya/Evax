import * as types from "../../types"
import setAuthToken from '../../../helpers/setAuthToken'
import axios from 'axios';

export const loadPharmacie = () => async (dispatch) => {
    if (localStorage.token ) {
        setAuthToken(localStorage.token)
       
    }

    try {
        const res = await axios.get(`http://localhost:4000/api/pharamcie/`);
        dispatch({
            type: types.PHARMACIE_LOADED,
            payload: res.data
        })
    } catch (error) {
        console.log(error.response)
        dispatch({
            type: types.CONNEXION_ERROR
        })
    }
}

export const login = ({
    email,
    uniqueString
}) => async (dispatch) => {
    // Config header for axios
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Set body
    const body = JSON.stringify({
        email,
        uniqueString
    });


    try {
        // Response 
        const res = await axios.post(`http://localhost:4000/api/pharamcie/login`, body, config)

        dispatch({
            type: types.CONNEXION_PHARMACIES_SUCCES,
            payload: res.data
        })
        dispatch(loadPharmacie())
    } catch (err) {
        const errors = err.response.data.errors
        if (errors) {
            //errors.forEach(error => toast.error(error.msg))
            console.log(errors)
        }

        dispatch({
            type: types.CONNEXION_PHARMACIES_ECHEC
        })
    }
};

export const logout = () => dispatch => {
    dispatch({
        type: types.LOGOUT
    })
}