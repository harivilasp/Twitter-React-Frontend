import React from "react";

const PostSummaryItem = (
    {
      post = {
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "image": "tesla.png"
      }
    }
) => {
  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-9">
            {post.topic ? <div className="text-dark">
              {post.topic}
            </div> : null}

            <div className="d-flex">
              <div className="fw-semibold">
                {post.username}
              </div>
              {post.time ? <>
                <div className="ms-1">
                  <i className="fa-solid fa-check-circle"></i>
                </div>
                <div className="text-dark ms-2">
                  - {post.time}
                </div>
              </> : null}

            </div>
            <div className="fw-semibold">
              {post.title}
            </div>
            {post.tweets ? <div className="text-dark">
              {post.tweets}
            </div> : null}

          </div>
          <div className="col-3 d-flex justify-content-end">
            <img className="rounded-4"
                 src={`/images/${post.avatar}`}
                 alt=""
                 width="auto"
                 height={100}/>
          </div>
        </div>
      </li>
  );
};
export default PostSummaryItem;