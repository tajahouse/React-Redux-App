import axios from 'axios';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';


// Now is when you get to use thunk. Here, you will use thunk to dispatch the actions
export const getCharacters = () =>dispatch => {
  dispatch({
      type: FETCH_CHARACTERS
      //Here we are telling our app that we are going into a fetching state
  });
  axios
  .get("https://breakingbadapi.com/api/characters")
  .then( res => {
      dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data})
  })
.catch(err =>{ 
    console.log(err);
    dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: `${err.response.status} ${err.response.status}`});
});
}
