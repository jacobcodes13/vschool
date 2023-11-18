import React, { useState, useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom"
import { MovieContext } from "../context/MovieProvider";

export default function Home() {
  const navigate = useNavigate();
  
  const { user, getMovies, allMovies, comments, likeMovie, removeLikedMovie } = useContext(MovieContext);

  const [ toggle, setToggle ] = useState(false)

  useEffect(() => {
    getMovies()
  }, [])
  
  const homePageOfMovies = useMemo(() => {
    return allMovies.map(movie => {
      // console.log(movie)
      const totalComments = comments.filter(comment => comment.movie === movie._id).length

      const totalLikes = movie.like.length - movie.removelike.length

      return (
        <div className="home-movie" key={movie._id}>
          <div className="home-movie-header">
            <h1>Title: { movie.title }</h1>
          </div>
          <div className="home-movie-image">
            <img onClick={() => navigate(`/details/${ movie._id }`)} className="movie-image" src={ movie.image } alt="Cover Image" />
          </div>
          <div>
            Total Comments: { totalComments }
          </div>
            Likes: { totalLikes }
          { !movie.like.includes(user._id) ? <button onClick={() => {
            // console.log("likeMovie", movie._id)
            likeMovie(movie._id)
            setToggle(prev => !prev)
          }}>Like</button> 
          : 
          <button onClick={() => {
            // console.log("removeLikedMovie", movie._id)
            removeLikedMovie(movie._id)
            setToggle(prev => !prev)
          }}>Remove Like</button> }
        </div>
      );
    });
  }, [ allMovies, comments ]);

  return (
    <div className="home-page">
      { homePageOfMovies }
    </div>
  );
}