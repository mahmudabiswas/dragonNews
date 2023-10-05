import React from "react";
import Marquee from "react-fast-marquee";
const BrakingNews = () => {
  return (
    <div className="flex  cursor-pointer">
      <button className="btn btn-secondary">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        <p>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as..
        </p>
      </Marquee>
    </div>
  );
};

export default BrakingNews;
