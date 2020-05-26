import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCharacters } from "../actions"
import { useDispatch } from "react-redux";
import Character from './Character'



const Characters = props =>{

const dispatch= useDispatch();
    const fetchCharacters = e =>{
        e.preventDefault();
        dispatch(getCharacters())
    }
    console.log(props.character)
    return (
        <div>
            
            <Character character={props.character} />
            <button className="fetch_button" onClick={ fetchCharacters }>Characters</button>
            
            {/* {props.character.map(char =>{console.log(char)
                return <h4 key={char.char_id}>{char.name}</h4>
            })} */}
        </div>
    )
}

const mapStateToProps = state =>
    {
    console.log("State", " ", state.character)
        return(
            {
        character: state.character,
        error: state.error
            }
              )
      
    }
;

export default connect( mapStateToProps, { getCharacters }) (Characters);
// export default Characters;