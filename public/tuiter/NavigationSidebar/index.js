const NavigationSidebar = () => {
    return(`
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i></a>
          <!-- continue rest of list, e.g.,
               Home, Explore, Notifications,  Messages, etc. -->
      </div>
      <li class="list-group-item">
          <a class="d-flex align-items-center text-decoration-none text-white" href="#">
              <i class="fa-solid fa-house col-12 col-xl-2 col-xxl-2 "></i>
              <div class="col-10 d-none d-xl-block d-xxl-block ps-2">
                  Home
              </div>
          </a>
      </li>
      <li class="list-group-item active">
          <a class="list-group-item active d-flex align-items-center text-decoration-none fw-bold text-white"
              href="#">
              <i class="fa-solid fa-hashtag col-12 col-xl-2 col-xxl-2 active-list-item"></i>
              <div class="col-10 d-none d-xl-block d-xxl-block active-list-item ps-2">
              Explore
              </div>
          </a>
      </li>
      <li class="list-group-item">
          <a class="d-flex align-items-center text-decoration-none text-white" href="#">
              <i class="fa-regular fa-bell col-12 col-xl-2 col-xxl-2"></i>
              <div class="col-10 d-none d-xl-block d-xxl-block ps-2">
              Notifications
              </div>
          </a>
      </li>
      <li class="list-group-item">
          <a class="d-flex align-items-center text-decoration-none text-white" href="#">
              <i class="fa-regular fa-envelope col-12 col-xl-2 col-xxl-2"></i>
              <div class="col-10 d-none d-xl-block d-xxl-block ps-2">
              Messages
              </div>
          </a>
      </li>
      <li class="list-group-item">
          <a class="d-flex align-items-center text-decoration-none text-white" href="#">
              <i class="fa-regular fa-bookmark col-12 col-xl-2 col-xxl-2"></i>
              <div class="col-10 d-none d-xl-block d-xxl-block ps-2">
              Bookmarks
              </div>
          </a>
      </li>
      <li class="list-group-item">
          <a class="d-flex align-items-center text-decoration-none text-white" href="#">
              <i class="fa-solid fa-list col-12 col-xl-2 col-xxl-2"></i>
              <div class="col-10 d-none d-xl-block d-xxl-block ps-2">
              Lists
              </div>
          </a>
      </li>
      <li class="list-group-item">
          <a class="d-flex align-items-center text-decoration-none text-white" href="#">
              <i class="fa-regular fa-user col-12 col-xl-2 col-xxl-2"></i>
              <div class="col-10 d-none d-xl-block d-xxl-block ps-2">
              Profile
              </div>
          </a>
      </li>
      <li class="list-group-item">
          <a class="d-flex align-items-center text-decoration-none text-white" href="#">
              <i class="fa-solid fa-ellipsis col-12 col-xl-2 col-xxl-2"></i>
              <div class="col-10 d-none d-xl-block d-xxl-block ps-2">
              More
              </div>
          </a>
      </li>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
   }
   export default NavigationSidebar;

   $('#wd-explore').append(NavigationSidebar());