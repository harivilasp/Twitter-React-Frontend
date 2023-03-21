import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {changeInfo} from "../reducers/user-info-reducer";

const EditProfileComponent = () => {
  const dispatch = useDispatch();
  const info = useSelector(state => state.user);
  const [username, setUsername] = useState(info.userName);
  const [bio, setBio] = useState(info.bio);
  const [location, setLocation] = useState(info.location);
  const [website, setWebsite] = useState(info.website);
  const [dateOfBirth, setDateOfBirth] = useState(info.dateOfBirth);

  const saveProfile = () => {
    dispatch(changeInfo({username, bio, location, website, dateOfBirth}));
  }

  return (
      <div className="row">
        <div className="d-flex justify-content-between align-content-center">
          <div className="d-flex">
            <Link className="me-4 d-flex align-items-center"
                  to="/tuiter/profile"
            >
              <i className="bi bi-x-lg fs-6"></i>
            </Link>

            <div
                className=" d-flex align-items-center text-white fw-bolder">
              <div>
                Edit Profile
              </div>
            </div>
          </div>

          <Link
              className="btn btn-light rounded-pill fw-bolder border border-1 border-dark"
              to="/tuiter/profile"
              onClick={saveProfile}
          >
            Save
          </Link>
        </div>

        <div className="mt-2 position-relative">
          <img className="w-100"
               src={"/images/banner.jpeg"}
               alt=""/>
          <div
              className="position-absolute top-50 start-50 translate-middle d-flex">
            <div className="me-5">
              <i className="bi bi-camera fs-4"></i>
            </div>
            <div>
              <i className="bi bi-x-lg fs-4"></i>
            </div>
          </div>
        </div>

        <div className="d-flex position-relative ps-4 mb-5">
          <img
              className="col-3 border border-dark border-3 rounded-circle position-absolute top-0 translate-middle-y"
              src={"/images/react.png"}
              alt=""/>
        </div>

        <div className="mt-5 ps-3 pe-3">
          <div className="position-relative">
            <label className="position-absolute ps-3">Name</label>
            <input className="form-control bg-black text-white pt-4" type="text"
                   value={username}
                   onChange={e => {
                     setUsername(e.target.value)
                   }}>
            </input>
          </div>

          <div className="position-relative mt-3">
            <label className="position-absolute ps-3">Bio</label>
            <textarea className="form-control bg-black text-white pt-4"
                      rows={3}
                      value={bio}
                      onChange={e => {
                        setBio(e.target.value)
                      }}></textarea>
          </div>

          <div className="position-relative mt-3">
            <label className="position-absolute ps-3">Location</label>
            <input className="form-control bg-black text-white pt-4" type="text"
                   value={location}
                   onChange={e => {
                     setLocation(e.target.value)
                   }}></input>
          </div>

          <div className="position-relative mt-3">
            <label className="position-absolute ps-3">Website</label>
            <input className="form-control bg-black text-white pt-4" type="text"
                   value={website}
                   onChange={e => {
                     setWebsite(e.target.value)
                   }}></input>
          </div>

          <div className="position-relative mt-3 pb-5">
            <label className="position-absolute ps-3">Birth date</label>
            <input className="form-control bg-black text-white pt-4" type="date"
                   value={dateOfBirth}
                   onChange={e => {
                     setDateOfBirth(e.target.value)
                   }}></input>
          </div>
        </div>

      </div>
  );
};

export default EditProfileComponent;