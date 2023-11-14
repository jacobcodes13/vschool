import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
import { MovieContext } from "../context/MovieProvider";

export default function Details() {

  const { movieId } = useParams()

  const { comments, addComment, allMovies } = useContext(MovieContext);

  const foundMovie = allMovies.find(movie => movie._id === movieId)

  // console.log(foundMovie)

  const filteredComments = comments.filter(comment => comment.movie === movieId);

  // console.log("filteredComments", filteredComments)

  return (
    <div className="details-page">
      <CommentList filteredComments={ filteredComments } movieInfo={ foundMovie } addComment={ addComment } />
    </div>
  );
}