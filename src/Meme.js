import React from 'react';
// import './Meme.css';

/** Meme - a single meme
 *  topText - top text for meme
 *  bottomText - bottom text for meme
 *  url - url for background image of meme
 *  removeMeme - passed from MemeList, will remove this specific meme from store
 *  id - same as key, used as reference for deleting a meme
 */ 
function Meme({ topText, bottomText, url, removeMeme, id }) {

  const style = {
    backgroundImage: `url("${url}")`,
    backgroundSize: 'contain',
    width: "200px",
    height: "200px",

  }

  return (
    <div className="memeContainer" style={style}>
      <div className="topText" >{topText}</div>
      <div className="bottomText" >{bottomText}</div>
      <p className="closeBtn" id={id} onClick={evt => removeMeme(evt)}> X </p>
    </div>
  )
}

export default Meme;