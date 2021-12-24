import * as types from "../../types"
import setAuthToken from '../../../helpers/setAuthToken'
import axios from 'axios';

export const loadAdmin = () => async (dispatch) => {
    if (localStorage.token ) {
        setAuthToken(localStorage.token)
       
    }

    try {
        const res = await axios.get(`http://localhost:4000/api/administrateur/`);
        dispatch({
            type: types.ADMIN_LOADED,
            payload: res.data
        })
    } catch (error) {
        console.log(error.response)
        dispatch({
            type: types.ADMIN_CONNEXION_ERROR
        })
    }
}

export const login = ({
    email,
    mot_de_passe
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
        mot_de_passe
    });


    try {
        // Response 
        const res = await axios.post(`http://localhost:4000/api/administrateur/login`, body, config)

        dispatch({
            type: types.ADMIN_SUCCES,
            payload: res.data
        })
        dispatch(loadAdmin())
    } catch (err) {
        const errors = err.response.data.errors
        if (errors) {
            //errors.forEach(error => toast.error(error.msg))
            console.log(errors)
        }

        dispatch({
            type: types.ADMIN_ECHEC
        })
    }
};

export const logout = () => dispatch => {
    dispatch({
        type: types.ADMIN_LOGOUT
    })
}