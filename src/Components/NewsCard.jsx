import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
  const { title, image_url, details, _id } = aNews;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {details.length > 200 ? (
              <p>
                {" "}
                {details.slice(0, 200)}
                <Link className="text-red-600" to={`/news/${_id}`}>
                  Read more....
                </Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
