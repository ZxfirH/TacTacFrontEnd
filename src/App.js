import './App.css';
import Menu from './components/Menu';
import PostFeed from './components/PostFeed';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from './components/pages/feed';
import Home from './components/pages/home';

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 'post001',
      text: 'First post',
      likes: 15,
      image_url: 'https://plus.unsplash.com/premium_photo-1687203673190-d39c3719123a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80'
    },
    {
      id: 'post002',
      text: 'Second post',
      likes: 1,
      image_url: 'https://plus.unsplash.com/premium_photo-1687203673190-d39c3719123a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80'
    },
    {
      id: 'post003',
      text: 'Third post',
      likes: 5,
      image_url: 'https://plus.unsplash.com/premium_photo-1687203673190-d39c3719123a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80'
    },
    {
      id: 'post004',
      text: 'Fourth post',
      likes: 0,
      image_url: 'https://plus.unsplash.com/premium_photo-1687203673190-d39c3719123a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80'
    }
  ]);

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="app">
      <h1>TACTAC</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/feed' component={Feed} />
        </Routes>
      </Router>
      <header>
        
        <h1>Your Posts</h1>
      </header>
      <div className="userPosts">
      <PostFeed posts={posts} handleLike={handleLike} />
      </div>
      
    </div>
  );
}

export default App;
