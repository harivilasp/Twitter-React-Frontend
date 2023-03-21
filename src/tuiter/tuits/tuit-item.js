import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import TuitStats from "./tuit-stats";

const TuitItem = ({tuit}) => {

  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }
  return (
      <li className="list-group-item pt-3">
        <div className="row">
          <div className="col-auto d-flex justify-content-center">
            <img src={`/images/${tuit.avatar}`}
                 alt=""
                 width="48px"
                 height="48px"
                 className="rounded-circle"/>
          </div>

          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="fw-bolder">
                  {tuit.username}
                </div>
                <i className="fa-solid fa-check-circle text-primary ms-2 me-2"></i>
                <div className="text-dark">{tuit.handle}</div>
                <div className="ms-2 text-dark">- {tuit.time}</div>
              </div>
              <div
                  className="col-1"
                  onClick={() => {
                    deleteTuitHandler(tuit._id)
                  }}>
                <i className="fa-regular fa-circle-xmark float-end"></i>
              </div>

            </div>
            <div className="text-white">
              {tuit.content}
            </div>
            <div>
              {tuit.tuit}
            </div>
            <TuitStats reply={tuit.reply}
                       retuit={tuit.retuit}
                       liked={tuit.liked}
                       like={tuit.like}/>
          </div>
        </div>
      </li>
  );
};

export default TuitItem;