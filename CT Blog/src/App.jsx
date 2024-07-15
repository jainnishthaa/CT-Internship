import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlogProvider from './context/blogContext'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Article from './components/Article'
import AddArticle from './components/AddArticle'

function App() {
  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //     localStorage.setItem("blogs", JSON.stringify(blogs));
  //   }, []);

  return (
    <BlogProvider>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/article/:id' element={<Article />}/>
        <Route path='/add-article' element={<AddArticle />}/>
      </Routes>
    </BlogProvider>
  )
}

export default App
