import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogContext } from "../context/blogContext";

const Article = () => {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const blog = blogs[id];
  const navigate = useNavigate();

  const handleAddArticle = () => {
    navigate("/add-article");
  };
  const handlehome = () => {
    navigate("/");
  };

  console.log(blog);

  if (!blog) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container">
      <header>
        <h1 onClick={handlehome}>NORDIC ROSE</h1>
        <button onClick={handleAddArticle} className="add-article-btn">
          Add Article
        </button>
      </header>
      <div className="article-page">
        <h1 className="title">{blog.title}</h1>
        <div className="authorname">{blog.authorname} </div>
        <div className="date">{blog.date}</div>
        <p className="content">{blog.textbeforeimg}</p>
        <img src={blog.img} alt={blog.title} />
        <p className="content">{blog.textafterimg}</p>
      </div>
    </div>
  );
};

export default Article;
