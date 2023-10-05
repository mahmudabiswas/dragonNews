import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import RightSideNav from "./RightSideNav";
import { useParams } from "react-router-dom";

const News = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Header />
      <NavBar />

      <div className="grid grid-cols-2">
        <div>This is home</div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default News;
