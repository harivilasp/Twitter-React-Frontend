import React, {useEffect} from "react";
import TuitItem from "./tuit-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitList = () => {
  const {tuits, loading} = useSelector(state => state.tuitsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, [dispatch])

  return (
      <div className="row">
        <ul className="list-group list-group-flush border border-1 border-dark p-0">
          {
              loading &&
              <li className="list-group-item">
                Loading...
              </li>
          }
          {tuits.map(tuit =>
              <TuitItem key={tuit._id} tuit={tuit}/>
          )}
        </ul>
      </div>
  );
};

export default TuitList;