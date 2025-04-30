import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'

import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const App = () => {
return(
  <div className="App">
    <Header />
    <Nav />
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/post" element={<PostPage />} />
      <Route path="/newpost" element={<NewPost />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Missing />} />
    </Routes>
    <Footer />
  </div>
);
}


export default App;
