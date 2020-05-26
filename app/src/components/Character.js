import React from 'react';


const Character = (props) =>{
    return (
        <div className = "character_wrapper">
             {props.character.map(char =>{console.log(char)
                return <div className="character" >
                  <h4 key={char.char_id}>{char.name}</h4>  
                  <img key={char.nickname} src={char.img} alt="Character" width="200" height="200" className="char_img" />
                  <div className="character_info">
             <h5 key={(Date.now())}>Protrayed as: {char.portrayed}</h5>
             <h5 key={(Math.floor(Math.random() * 100))}>Birthday: {char.birthday}</h5>
             <h5 key={(Math.floor(Math.random() * 100))}>Nickname: {char.nickname}</h5>
             <h5 key={(Math.floor(Math.random() * 100))}>Living or Dead: {char.status}</h5>
                  </div>
                </div>
            })} 
        </div>
    )
}

export default Character;