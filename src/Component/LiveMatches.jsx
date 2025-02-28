import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/liveMatches.css";
import Navbar from "./Navbar";

const LiveMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMatches();
    const interval = setInterval(fetchMatches, 30000); // Refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const fetchMatches = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://www.thesportsdb.com/api/v1/json/1/events.php?l=English%20Premier%20League"
      );
      setMatches(response.data.events || []);
    } catch (err) {
      setError("Failed to fetch live matches. Please try again later.");
      console.error("Error fetching live matches:", err);
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="live-matches-container">
        <h2>Live Matches</h2>
        <button className="refresh-button" onClick={fetchMatches}>
          Refresh
        </button>

        {loading ? (
          <div className="loading-spinner"></div>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : matches.length > 0 ? (
          <div className="matches-grid">
            {matches.map((match) => (
              <div key={match.idEvent} className="match-card">
                <div className="match-header">
                  <p className="match-date">
                    {match.dateEvent} | {match.strTime}
                  </p>
                </div>
                <div className="match-teams">
                  <div className="team">
                    <img
                      src={match.strThumb || "default_home_logo.png"}
                      alt={match.strHomeTeam}
                    />
                    <p>{match.strHomeTeam}</p>
                  </div>
                  <p className="score">
                    {match.intHomeScore || "?"} - {match.intAwayScore || "?"}
                  </p>
                  <div className="team">
                    <img
                      src={match.strThumb || "default_away_logo.png"}
                      alt={match.strAwayTeam}
                    />
                    <p>{match.strAwayTeam}</p>
                  </div>
                </div>
                <p className="venue">Venue: {match.strVenue || "Unknown"}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No live matches at the moment.</p>
        )}
      </div>
    </>
  );
};

export default LiveMatches;
