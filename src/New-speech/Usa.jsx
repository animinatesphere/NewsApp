import axios from "axios";
import React, { useEffect, useState } from "react";
import "../CSS/new.css";
import Navbar from "../component/Navbar";
import { Navbar2 } from "../component/Navbar2";
const Usa = () => {
  const [news, getNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res1 = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=854f16bf1e2148789bbb2740d127db07`
        );
        const res2 = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=854f16bf1e2148789bbb2740d127db07`
        );
        const res3 = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=854f16bf1e2148789bbb2740d127db07`
        );
        const res4 = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=854f16bf1e2148789bbb2740d127db07`
        );
        const res5 = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=854f16bf1e2148789bbb2740d127db07`
        );
        const res6 = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=854f16bf1e2148789bbb2740d127db07`
        );
        getNews([
          ...res1.data.articles,
          ...res2.data.articles,
          ...res3.data.articles,
          ...res4.data.articles,
          ...res5.data.articles,
          ...res6.data.articles,
        ]);
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

export default Usa;
