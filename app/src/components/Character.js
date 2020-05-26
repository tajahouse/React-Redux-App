import React from 'react';

const Character = (props) =>{
    return (
        <div>
            <h4 key={props.character.char_id}>{props.character.birthday}</h4>
        </div>
    )
}

export default Character;