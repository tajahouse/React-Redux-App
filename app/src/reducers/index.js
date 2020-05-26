import { FETCH_CHARACTERS } from "../actions";

const initialState = {
    character:[],
    error:'',
}

function reducer( state = initialState, action) {
    console.log('reducer', action);
    switch (action.type){
        case FETCH_CHARACTERS:
            return{
                ...state,
                error:'All wrong'
            };
            default:
                return state;
    }
}

export default reducer;