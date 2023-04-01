import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuitHandler = () => {
    dispatch(updateTuitThunk(
        {
          ...tuit,
          like: tuit.like + 1,
          liked: true
        })
    )
  }

  const dislikeHandler = () => {
    dispatch(updateTuitThunk(
        {
          ...tuit,
          dislike: tuit.dislike + 1
        }
    ))
  }
  return (
      <div
          className="mt-2 text-dark nav nav-tabs border-0 d-flex justify-content-between me-5">
        <div className="nav-link border-0 rounded-0 text-dark">
          <i className="fa-regular fa-comment me-2"></i>
          {tuit.reply}
        </div>
        <div className="nav-link border-0 rounded-0 text-dark">
          <i className="fa-solid fa-retweet me-2"></i>
          {tuit.retuit}
        </div>
        <div className="nav-link border-0 rounded-0 text-dark"
             onClick={likeTuitHandler}>
          {tuit.liked ?
              <i className="fa-solid fa-heart me-2 text-danger"></i> :
              <i className="fa-regular fa-heart me-2"></i>}
          {tuit.like}
        </div>
        <div className="nav-link border-0 rounded-0 text-dark"
             onClick={dislikeHandler}>
          <i className="fa-regular fa-thumbs-down me-2"></i>
          {tuit.dislike}
        </div>
        <div className="nav-link border-0 rounded-0 text-dark">
          <i className="fa-solid fa-arrow-up-from-bracket"></i>
        </div>
      </div>
  );
};

export default TuitStats;