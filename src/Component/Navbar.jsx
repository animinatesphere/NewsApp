import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/Navbar.css";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Fetch suggestions from an API when the user types
  useEffect(() => {
    if (query.length > 2) {
      const fetchSuggestions = async () => {
        try {
          const res = await axios.get(
            `https://newsapi.org/v2/everything?q=${query}&apiKey=YOUR_API_KEY`
          );
          setSuggestions(res.data.articles.slice(0, 5)); // Limit to 5 suggestions
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        }
      };
      fetchSuggestions();
    } else {
      setSuggestions([]); // Clear suggestions when query is too short
    }
  }, [query]);

  return (
    <nav className="navbar">
      <div className="logo">LiveLens👀</div>

      <div className="search-container">
        <ul className="nav-links">
          <li>
            <a href="/Homes">Home</a>
          </li>
          <li>
            <a href="/Usa-News">News</a>
          </li>
          <li>
            <a href="/Apple-News">Apple</a>
          </li>
          <li>
            <a href="/Tesla-News">Tesla</a>
          </li>
          <li>
            <a href="/TechCrunch-News"> TechCrunch</a>
          </li>
        </ul>

        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((article, index) => (
              <li key={index}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <input
        type="text"
        placeholder="Search news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
    </nav>
  );
};

export default Navbar;
