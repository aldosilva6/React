import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      <body>
        {/*<PostList />*/}
        <PostForm />
      </body>
    </div>
  );
}

export default App;
