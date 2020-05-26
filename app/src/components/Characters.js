import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCharacters } from "../actions"
import { useDispatch } from "react-redux";
import Character from './Character'
import { styles } from "@material-ui/core"


const Characters = props =>{

    const dispatch= useDispatch();
        const fetchCharacters = e =>{
            e.preventDefault();
            dispatch(getCharacters())
        }
        console.log(props.character)

        return (
            <div>
                <h1 className="heading_name">Breaking Bad</h1>
                <Character character={props.character} />
                <button className="fetch_button" onClick={ fetchCharacters }>Characters</button>
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