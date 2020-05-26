import React from 'react';
import { connect } from 'react-redux';
import { getCharacters } from "../actions"
import Character from './Character'

const Characters = props =>{

    const fetchCharacters = e =>{
        e.preventDefault();
        props.getCharacters();
    }
    return (
        <div>
                {console.log(props)}

            <h4 key={props.character.char_id}>{props.character.portrayed}</h4>
            <button className="fetch_button" onClick={ fetchCharacters }>Characters</button>
        </div>
    )
}

const mapStateToProps = state =>(
    {
        character: state.character,
        error: state.error
    }
);

export default connect( mapStateToProps, { getCharacters }) (Characters);