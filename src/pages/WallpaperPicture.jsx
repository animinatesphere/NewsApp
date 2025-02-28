import axios from "axios";
import React, { useEffect, useState } from "react";
import "../CSS/wallpaper.css";

const WallpaperPicture = () => {
  // const [wall, setWall] = useState([]);
  const [video, setVideo] = useState([]);
  // const [page, setPage] = useState(1);
  // const API_KEY = import.meta.env.VITE_App_Base_Api_key;
  // useEffect(() => {
  //   const fetchWallpaper = async () => {
  //     try {
  //       const res = await axios.get(
  //         `https://pixabay.com/api/?key=49087211-a3c674ae4bc7a75abfb72f34c&q=yellow+flowers&image_type=photo${page}`
  //       );

  //       setWall(res.data.hits);
  //     } catch (error) {
  //       console.error("Error fetching wallpaper:", error);
  //     }
  //   };

  //   fetchWallpaper();
  // }, [page]);
  // fetch video
  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get(`https://dog.ceo/api/breed/hound/images`);
      setVideo(res.data.message);
    };
    fetchVideo();
  }, []);

  // end of video
  const loadMore = () => setPage((prev) => prev + 1);
  return (
    <>
      {" "}
      {/* <div className="wallpaper">
        {wall.map((walls) => (
          <div key={walls.id}>
            <img src={walls.webformatURL} alt="" />
          </div>
        ))}
      </div> */}
      <div className="video">
        {video.map((imageUrl, index) => (
          <div key={index}>
            <img
              src={imageUrl}
              alt="Dog"
              style={{
                width: "300px",
                height: "300px",
              }}
              className="image-item"
            />
          </div>
        ))}
      </div>
      <button onClick={loadMore}>More</button>
    </>
  );
};

export default WallpaperPicture;
