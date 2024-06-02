import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../Store/movieDetailsSlice";

const MovieDetails = () => {
  let { movieDetails } = useSelector((state) => state.movieDetails);
  let dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, []);

  return (
    <div className="row py-5">
      <div className="col-md-3 pb-3">
        <img
          src={"https://image.tmdb.org/t/p/w500" + movieDetails.poster_path}
          className="w-100 rounded"
          alt=""
        />
      </div>
      <div className="col-md-9">
        <h4 className="pb-4">
          {" "}
          <span className="text-danger"> Name : </span>{" "}
          <span className="fw-bolder">{movieDetails.original_title}</span>{" "}
        </h4>
        <h5 className="pb-2">
          {" "}
          <span className="text-danger"> Type : </span>{" "}
          {movieDetails.genres?.map((gen) => gen.name).join(" , ")}
        </h5>
        <h5 className="pb-2">
          {" "}
          <span className="text-danger"> Budget : </span>{" "}
          {movieDetails.budget ? movieDetails.budget : "---"} $
        </h5>
        <h5 className="pb-2">
          {" "}
          <span className="text-danger"> Revenue : </span>{" "}
          {movieDetails.revenue ? movieDetails.revenue : "---"} $
        </h5>
        <h5 className="pb-2">
          {" "}
          <span className="text-danger"> Rating : </span>{" "}
          {movieDetails.vote_average}
        </h5>
        <h5 className="pb-2">
          {" "}
          <span className="text-danger"> Release Date : </span>{" "}
          {movieDetails.release_date}
        </h5>
        <p className="pb-2">
          {" "}
          <span className="fs-5 fw-bold text-danger"> Overview : </span>{" "}
          {movieDetails.overview ? movieDetails.overview : "---"}
        </p>
        <a
          href={movieDetails.homepage}
          target="_blank"
          className="btn btn-outline-warning"
        >
          See More
        </a>
      </div>
    </div>
  );
};

export default MovieDetails;
