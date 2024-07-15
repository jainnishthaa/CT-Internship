import React, { useContext } from 'react'
import { BlogContext } from '../context/blogContext'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
    const {blogs}=useContext(BlogContext);
    const navigate=useNavigate();

    const handleAddArticle=()=>{
        navigate('/add-article');
    }

    const handleNavigate=(id)=>{
        navigate(`/article/${id}`);
    }

    const handlehome=()=>{
        navigate('/');
    }

    console.log(blogs);
    return (
        <div className="container">
            <header>
                <h1 onClick={handlehome}>NORDIC ROSE</h1>
                <button onClick={handleAddArticle} className='add-article-btn'>Add Article</button>
            </header>
            <h2 className="heading">All Articles</h2>
            <div className="articles">
                {blogs.map((blog,index)=>(
                    <NavLink to={`/article/${index}`}>
                        <div className="article">
                            <img src={blog.img} alt={blog.title}/>
                            <h3>{blog.title}</h3>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Home