import React from "react";
import './HomePage.css';
import JobOriented from "./JobOriented";
import JobObjectives from "./JobObjectives/JobObjectives";
import ExpandCarrier from "./Expandcarrier/ExpandCarrier";
import Blogs from "./Blogs/Blogs";
import Worldopportunites from "./Worldopportunities/Worldopportunites";
import Carousels from "./Carousals/Carousals";

function HomePage() {
  return (
    <div>
      <JobOriented/>
      <JobObjectives/>
      <ExpandCarrier />
      <Carousels/>
      <Blogs/>
      <Worldopportunites/>
    </div>
  );
}

export default HomePage;
