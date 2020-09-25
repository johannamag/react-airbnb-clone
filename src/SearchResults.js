import React from "react";
import "./SearchResults.css";
import StarIcon from "@material-ui/icons/Star";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function SearchResults({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="searchResults">
      <img src={img} alt="pic" />
      <FavoriteBorderIcon className="searchResults__heart" />
      <div className="searchResults__info">
        <div className="searchResults__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>
        <div className="searchResults__infoBottom">
          <div className="searchResults__stars">
            <StarIcon className="searchResults__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResults__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
