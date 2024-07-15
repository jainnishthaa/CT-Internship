import React, { useContext, useState } from "react";
import { BlogContext } from "../context/blogContext";
import { useNavigate } from "react-router-dom";

const AddArticle = () => {
  const { addArticle } = useContext(BlogContext);
  const navigate = useNavigate();
  const [article, setArticle] = useState({
    title: "",
    authorname: "",
    date: "",
    textbeforeimg: "",
    img: "",
    textafterimg: "",
  });

  const setDate = () => {
    const monthArr = {
      1: "Jan",
      2: "Feb",
      3: "Mar",
      4: "Apr",
      5: "May",
      6: "Jun",
      7: "Jul",
      8: "Aug",
      9: "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec",
    };
    const today = new Date();
    const month = monthArr[today.getMonth() + 1];
    const year = today.getFullYear();
    const date = today.getDate();
    month + " " + date + ", " + year;
    return `${month} ${date}, ${year}`
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalarticle=article;
    finalarticle.date = setDate();
    setArticle(finalarticle);
    // console.log(article);
    const id = addArticle(article);
    navigate(`/article/${id}`);
  };

  return (
    <div className="add-blog-page">
      <form onSubmit={handleSubmit}>
        <h1>Add New Blog</h1>

        {/* Title */}
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Title"
            value={article.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Author Name */}
        <div className="form-group">
          <label htmlFor="authorname">Author Name</label>
          <input
            type="text"
            name="authorname"
            id="authorname"
            placeholder="Enter Author Name"
            value={article.authorname}
            onChange={handleChange}
            required
          />
        </div>

        {/* Paragraph Before Image */}
        <div className="form-group">
          <label htmlFor="textbeforeimg">Paragraph Before Image</label>
          <textarea
            name="textbeforeimg"
            id="textbeforeimg"
            placeholder="Enter Paragraph before Image"
            value={article.textbeforeimg}
            onChange={handleChange}
            required
          />
        </div>

        {/* Image */}
        <div className="form-group">
          <label htmlFor="img">Image</label>
          <input
            type="text"
            name="img"
            id="img"
            placeholder="Enter Image URL"
            value={article.img}
            onChange={handleChange}
            required
          />
        </div>

        {/* Paragraph After Image */}
        <div className="form-group">
          <label htmlFor="textafterimg">Paragraph After Image</label>
          <textarea
            name="textafterimg"
            id="textafterimg"
            placeholder="Enter Paragraph after Image"
            value={article.textafterimg}
            onChange={handleChange}
            required
          />
        </div>

        {/* Button */}
        <div className="form-group">
          <button type="submit">Add Blog</button>
        </div>
      </form>
    </div>
  );
};

export default AddArticle;
