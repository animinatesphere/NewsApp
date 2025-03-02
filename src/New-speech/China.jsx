// import React from "react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { Navbar2 } from "../component/Navbar2";

const China = () => {
  const [news, getNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=cn&apiKey=854f16bf1e2148789bbb2740d127db07`
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
        <Navbar2 />
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

export default China;
