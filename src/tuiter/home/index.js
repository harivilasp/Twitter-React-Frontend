import React from "react";
import posts from "./posts.json";
import HomeItem from "./home-item";

const HomeComponent = () => {
  return (
      <div className="row">
        <ul className="list-group list-group-flush p-0">
          {posts.map(post => <HomeItem key={post._id} post={post}/>)}
        </ul>
      </div>
  );
};
export default HomeComponent;