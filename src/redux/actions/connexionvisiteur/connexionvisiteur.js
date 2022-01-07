import * as types from "../../types"
import setAuthToken from '../../../helpers/setAuthToken'
import axios from 'axios';

export const loadVisiteur = () => async (dispatch) => {
    if (localStorage.token ) {
        setAuthToken(localStorage.token)
       
    }

    try {
        const res = await axios.get(`http://localhost:4000/api/visiteur/`);
        dispatch({
            type: types.VISITEUR_LOADED,
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
        const res = await axios.post(`http://localhost:4000/api/visiteur/login`, body, config)

        dispatch({
            type: types.CONNEXION_VISITEURS_SUCCES,
            payload: res.data
        })
        dispatch(loadVisiteur())
    } catch (err) {
        const errors = err.response.data.errors
        if (errors) {
            console.log(errors)
        }

        dispatch({
            type: types.CONNEXION_VISITEURS_ECHEC
        })
    }
};

export const logout = () => dispatch => {
    dispatch({
        type: types.LOGOUT_VISITEUR
    })
}