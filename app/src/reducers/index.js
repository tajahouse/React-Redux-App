import { FETCH_CHARACTERS, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE } from "../actions";

const initialState = {
    character:[],
    isFetching: false,
    error:'',
}

function reducer( state = initialState, action) {
    console.log('reducer', action);
    switch (action.type){
        case FETCH_CHARACTERS:
            return{
                ...state,
                isFetching: true,
                error:'',
                //When we are wanting to transition from an error state, we want to clear out that error.
            };
            case FETCH_CHARACTERS_SUCCESS:
                return{
                    ...state,
                    error:'',
                    isFetching:false,
                    character: action.payload
                }
            case FETCH_CHARACTERS_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                    isFetching: false,
                }
            default:
                return state;
    }
}

export default reducer;