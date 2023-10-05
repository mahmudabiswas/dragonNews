import React from "react";
import LeftSideNav from "./LeftSideNav";
import RightSideNav from "./RightSideNav";
import Header from "./Header";
import NavBar from "./NavBar";
import BrakingNews from "./BrakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();

  return (
    <div>
      <Header />
      <BrakingNews />
      <NavBar />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <LeftSideNav />
        </div>
        <div className="space-y-3">
          {news.map((aNews) => (
            <NewsCard key={aNews.id} aNews={aNews} />
          ))}
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
