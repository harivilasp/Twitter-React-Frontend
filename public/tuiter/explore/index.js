import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

const explore = () => {
  $('#wd-explore').append(`
       <div class="row mt-2">
          <div class="col-2 col-lg-1 col-xl-2 col-xxl-2 pt-3">
            ${NavigationSidebar("explore")}
          </div>
          <div class="col-10 col-lg-7 col-xl-6 col-xxl-6 pt-1 ps-4 pe-4">
            ${ExploreComponent()}
          </div>
          <div class="col-4 d-none d-lg-block d-xl-block d-xxl-block pt-3">
            ${WhoToFollowList()}
          </div>
       </div>
   `);
}

$(explore);