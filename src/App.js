import React from 'react';
import './App.css';
import CreatePost from './components/CreatePost'
import ListPost from './components/ListPost'

function App() {
    
  return (
    <div className="App">
      <CreatePost />
      <ListPost />
    </div>
  );
}

export default App;
