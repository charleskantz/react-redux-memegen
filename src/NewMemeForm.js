import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from "react-redux";


/** Form to add new memes. Rendered by App component
 *    - formData = state of form
 *    - formData is dispatched to store for adding a new meme
 */
function NewMemeForm() {
  const dispatch = useDispatch();
  const INITIAL_STATE = {
    topText: '',
    bottomText: '',
    url: ''
  }
  
  const [ formData, setFormData ] = useState({ ...INITIAL_STATE });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    const newFormData = {
      ...formData,
      key: uuid()
    }
    dispatch({
      type: "NEW_MEME",
      payload: newFormData
   })
    setFormData({ ...INITIAL_STATE });
  }

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="topText" >Top Text
        <input
          type="text"
          name="topText"
          value={formData.topText}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="bottomText" >Bottom Text
        <input
          type="text"
          name="bottomText"
          value={formData.bottomText}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="url" >Image URL
        <input
          type="text"
          name="url"
          value={formData.url}
          onChange={handleChange}
        />
      </label>
      <button>Make a Meme!</button>
    </form>
  )
}

export default NewMemeForm;