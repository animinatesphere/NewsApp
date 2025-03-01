import React, { useEffect, useState } from "react";
import "../CSS/liveMatches.css";
import Navbar from "../Component/Navbar";

const LiveMatches = () => {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY =
    "ae94c4b7def46459fe9e182bc9107504297e7199fac028bebed4da155a0ec3c3"; // Replace with your API key
  const SOCKET_URL = `wss://wss.apifootball.com/livescore?WidgetKey=${API_KEY}&timezone=+03:00`;

  useEffect(() => {
    let socket = new WebSocket(SOCKET_URL);

    socket.onopen = () => {
      console.log("WebSocket Connected!");
    };

    socket.onmessage = (event) => {
      try {
        if (event.data.startsWith("{") || event.data.startsWith("[")) {
          // Only parse if the message is JSON
          const data = JSON.parse(event.data);
          if (data && data.length > 0) {
            setMatches(data.filter((match) => match.match_live === "1")); // Filter live matches
          }
        } else {
          console.log("Non-JSON message received:", event.data);
        }
      } catch (err) {
        console.error("Error parsing WebSocket message:", err);
        setError("Error receiving live match data.");
      }
    };

    socket.onerror = (err) => {
      console.error("WebSocket Error:", err);
      setError("WebSocket connection error.");
    };

    socket.onclose = () => {
      console.log("WebSocket Disconnected.");
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="live-matches-container">
        <h2>Live Matches</h2>
        {error && <p className="error-message">{error}</p>}
        {matches.length > 0 ? (
          <div className="matches-grid">
            {matches.map((match) => (
              <div key={match.match_id} className="match-card">
                <div className="match-header">
                  <p className="match-date">
                    {match.match_date} | {match.match_time}
                  </p>
                  <p className="league-name">{match.league_name}</p>
                </div>
                <div className="match-teams">
                  <div className="team">
                    <img
                      src={match.team_home_badge || "default_home_logo.png"}
                      alt={match.match_hometeam_name}
                    />
                    <p>{match.match_hometeam_name}</p>
                  </div>
                  <p className="score">
                    {match.match_hometeam_score ?? "?"} -{" "}
                    {match.match_awayteam_score ?? "?"}
                  </p>
                  <div className="team">
                    <img
                      src={match.team_away_badge || "default_away_logo.png"}
                      alt={match.match_awayteam_name}
                    />
                    <p>{match.match_awayteam_name}</p>
                  </div>
                </div>
                <p className="venue">Venue: {match.venue_name || "Unknown"}</p>
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
