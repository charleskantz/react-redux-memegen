import React from 'react';
import './App.css';
import NewMemeForm from './NewMemeForm';
import MemeList from './MemeList';

// App renders the submission form and list of submitted memes
function App() {
  return (
    <div>
      <NewMemeForm />
      <MemeList />
    </div>
  );
}

export default App;



// App -> form (top/bottom Text, url) -> memeList -> meme