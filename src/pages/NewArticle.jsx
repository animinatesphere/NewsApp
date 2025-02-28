import axios from "axios";
import React, { useEffect, useState } from "react";
import "../CSS/new.css";
import Navbar from "../Component/Navbar";
// import Navbar from "../Component/Navbar";

const NewArticle = () => {
  const [news, getNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=854f16bf1e2148789bbb2740d127db07`
        );
        getNews(res.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="news-list">
          {news.map((article, index) => (
            <div key={index} className="news-item">
              <img src={article.urlToImage} alt="News" className="thumbnail" />
              <div>
                <h3>{article.title}</h3>
                <p>
                  {article.description
                    ? article.description.slice(0, 100) + "..." // Slicing to 100 characters
                    : "No description available"}
                </p>

                <a href={article.url} target="_blank" className="ne">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewArticle;
