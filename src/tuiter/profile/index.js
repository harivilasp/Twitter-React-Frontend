import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
  const info = useSelector(state => state.user);
  return (
      <div className="row">
        <div className="d-flex">
          <div className="col-1">
            <i className="bi bi-arrow-left fs-5"></i>
          </div>

          <div
              className="col-5 d-flex align-items-center fw-bolder">
            <div>
              {info.userName}
            </div>
          </div>
        </div>

        <div className="mt-2">
          <img className="w-100"
               src={"/images/banner.jpeg"}
               alt=""/>
        </div>

        <div className="d-flex position-relative ps-4 mb-5">
          <img
              className="col-3 border border-dark border-3 rounded-circle position-absolute top-0 translate-middle-y"
              src={"/images/elonmusk.jpg"}
              alt=""/>

          <div className="position-absolute me-2 end-0">
            <Link
                to={"/tuiter/edit-profile"}
                className="btn btn-light rounded-pill fw-bolder mt-3 border border-1 border-dark">
              Edit Profile
            </Link>
          </div>
        </div>

        <div className="mt-5 ps-4 pe-3">
          <div className="fw-bolder fs-5">
            {info.userName}
          </div>

          <div>
            {info.handle}
          </div>

          <div className="mt-3">
            {info.bio}
          </div>

          <div className="mt-3 d-flex">
            <div className="me-4">
              <i className="bi bi-geo-alt me-2"></i>
              {info.location}
            </div>
            <div className="me-4">
              <i className="bi bi-balloon me-2"></i>
              Born {info.dateOfBirth}
            </div>
            <div>
              <i className="bi bi-calendar3 me-2"></i>
              Joined {info.dateJoined}
            </div>
          </div>

          {info.website &&
              <div>
                <i className="fa-solid fa-link me-2"></i>
                {info.website}
              </div>}

          <div className="mt-3 d-flex">
            <div className="me-4 d-flex">
              <div className="fw-bolder me-2">
                {info.followingCount}
              </div>
              Following
            </div>

            <div className="d-flex">
              <div className="fw-bolder me-2">
                {info.followersCount}
              </div>
              Followers
            </div>
          </div>
        </div>

      </div>
  );
};

export default ProfileComponent;