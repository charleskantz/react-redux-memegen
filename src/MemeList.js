import React from 'react';
import Meme from './Meme';
import { useSelector, useDispatch } from "react-redux";

/** MemeList - renders the list of memes in store.memes.
 *  MemeList is rendered by App componenet.
 *     - store.memes = array of meme objects
 *     - removeMeme will invoke a dispatch to remove a specific meme
 * 
 */
function MemeList() {
  const memes = useSelector(st => st.memes);
  const dispatch = useDispatch();

  const removeMeme = evt => {
    const { id }= evt.target;
    dispatch({
      type: "DELETE_MEME",
      payload: {
        id
      }
    });
  }
  
  const allMemes = memes.map(({topText, bottomText, url, key}) => (
    <Meme
      topText={topText}
      bottomText={bottomText} 
      url={url}
      key={key}
      id={key}
      removeMeme={removeMeme}
    />
  ));


  return (
    <div>
      {allMemes}
    </div>
  )
}

export default MemeList;