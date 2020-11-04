import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from "@material-ui/icons/Star";
import './SearchResult.css';

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total
}) {
    return (
        <div className="searchResult">
            <img src={img} alt="img"/>
            <FavoriteBorderIcon className="searchResult-heart"/>

            <div className="searchResult-info">
                <div className="searchResult-infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult-infoBottom">
                    <div className="searchResult-stars">
                        <StarIcon className="searchResult-star"/>
                        <p><strong>{star}</strong></p>
                    </div>
                    <div className="searchResult-price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;