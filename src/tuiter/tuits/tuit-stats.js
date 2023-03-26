import React from "react";
import {useDispatch} from "react-redux";
import {likeTuitToggle} from "../reducers/tuits-reducer";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
    const toggleTodoDone = (tuit) => {  
      dispatch(likeTuitToggle(tuit)) // send the todo to the reducer
  }
  return (
      <div className="row mt-2 text-dark nav nav-tabs border-0">
        <div className="col-3 nav-link border-0 rounded-0 text-dark">
          <i className="fa-regular fa-comment me-2"></i>
          {tuit.reply}
        </div>
        <div className="col-3 nav-link border-0 rounded-0 text-dark">
          <i className="fa-solid fa-retweet me-2"></i>
          {tuit.retuit}
        </div>
        <div className="col-3 nav-link border-0 rounded-0 text-dark">
        <button className="border-0 fg-color-white"  style={{backgroundColor: 'white'}} onClick={() => 
                toggleTodoDone(tuit)} >
          {tuit.liked ?
              <i className="fa-solid fa-heart me-2 text-danger"></i> :
              <i className="fa-regular fa-heart me-2"></i>}
          {tuit.like}
          </button>
        </div>
        <div className="col-3 nav-link border-0 rounded-0 text-dark">
          <i className="fa-solid fa-arrow-up-from-bracket"></i>
        </div>
      </div>
  );
};

export default TuitStats;