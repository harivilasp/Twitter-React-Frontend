import React from "react";

const HomeItem = ({post}) => {
  return (
      <li className="list-group-item bg-black">
        <div className="row">
          <div className="col-1 d-flex justify-content-center">
            <img src={`/images/${post.avatar}`}
                 alt=""
                 width="48px"
                 height="48px"
                 className="rounded-circle"/>
          </div>

          <div className="col-11">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div>
                  {post.username}
                </div>
                <i className="fa-solid fa-check-circle text-white ms-2 me-2"></i>
                <div className="text-dark">@{post.handle}</div>
                <div className="ms-2 text-dark">- {post.time}</div>
              </div>

              <i className="fa-solid fa-ellipsis fs-5"></i>
            </div>
            <div className="text-white">
              {post.content}
            </div>

            <div
                className="rounded-4 border border-1 border-dark overflow-hidden mt-3">
              <img
                  src={`/images/${post.image}`}
                  alt=""
                  width="100%"
                  height="auto"/>
              {!!post.imageTitle || !!post.imageContent || !!post.imageUrl
                  ?
                  <div
                      className="border-top border-1 border-dark text-dark p-3">
                    {!!post.imageTitle ? <div className="text-white">
                      {post.imageTitle}
                    </div> : null}
                    {!!post.imageContent ? <div>
                      {post.imageContent}
                    </div> : null}
                    {!!post.imageUrl
                        ? <a className="text-decoration-none text-dark"
                             href={`https://www.${post.imageUrl}`}>
                          <i className="fa-solid fa-link"></i>
                          {post.imageUrl}
                        </a> : null}
                  </div> : null}
            </div>

            <div className="row mt-3 text-dark nav nav-tabs border-0">
              <div className="col-3 nav-link border-0 rounded-0 text-dark">
                <i className="fa-regular fa-comment me-2"></i>
                {post.reply}
              </div>
              <div className="col-3 nav-link border-0 rounded-0 text-dark">
                <i className="fa-solid fa-retweet me-2"></i>
                {post.retuit}
              </div>
              <div className="col-3 nav-link border-0 rounded-0 text-dark">
                <i className="fa-regular fa-heart me-2"></i>
                {post.like}
              </div>
              <div className="col-3 nav-link border-0 rounded-0 text-dark">
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
              </div>
            </div>
          </div>
        </div>
      </li>
  )
};

export default HomeItem;