import React from "react";

const TuitStats = ({reply, retuit, liked, like}) => {
  return (
      <div className="row mt-2 text-dark nav nav-tabs border-0">
        <div className="col-3 nav-link border-0 rounded-0 text-dark">
          <i className="fa-regular fa-comment me-2"></i>
          {reply}
        </div>
        <div className="col-3 nav-link border-0 rounded-0 text-dark">
          <i className="fa-solid fa-retweet me-2"></i>
          {retuit}
        </div>
        <div className="col-3 nav-link border-0 rounded-0 text-dark">
          {liked ?
              <i className="fa-solid fa-heart me-2 text-danger"></i> :
              <i className="fa-regular fa-heart me-2"></i>}
          {like}
        </div>
        <div className="col-3 nav-link border-0 rounded-0 text-dark">
          <i className="fa-solid fa-arrow-up-from-bracket"></i>
        </div>
      </div>
  );
};

export default TuitStats;