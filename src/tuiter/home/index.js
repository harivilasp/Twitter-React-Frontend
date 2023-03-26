import React from "react";
// import posts from "./posts.json";
// import HomeItem from "./home-item";
import TuitsList from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening";

// const HomeComponent = () => {
//   return (
//       <div className="row">
//         <ul className="list-group list-group-flush p-0">
//           {posts.map(post => <HomeItem key={post._id} post={post}/>)}
//         </ul>
//       </div>
//   );
// };

const HomeComponent = () => {
  return(
    <>
      <h4>Home</h4>
      <WhatsHappening/>
      <TuitsList/>
    </>
  );
};
export default HomeComponent;