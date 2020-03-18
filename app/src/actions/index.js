import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_POKEMON_FAIL = 'FETCH_DATA_FAIL';

export const getPokemon = () => dispatch => {
  dispatch({ type: FETCH_POKEMON_START });
  axios
    .get('https://financialmodelingprep.com/api/v3/company/profile/BA')
    .then(res =>
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.results })
    )
    .catch(err => dispatch({ type: FETCH_DATA_FAIL, payload: err }));
};
