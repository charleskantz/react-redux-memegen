const INITIAL_STATE = { memes: []};

/** rootReducer handles our redux changes
 *  NEW_MEME = adding a new meme to store.memes
 *  DELETE_MEME = removing a specific meme from store.memes
 */
function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "NEW_MEME":
      return { ...state, memes: [ ...state.memes, action.payload]};

    case "DELETE_MEME":
      const filteredMemes = state.memes.filter(meme => meme.key !== action.payload.id)
      return { ...state, memes: [...filteredMemes]}
    
    default:
      return state;
  }
}

export default rootReducer;