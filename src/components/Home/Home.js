import "./Home.css";

import React from "react";
import About from "../About/About";
import TopCompanies from "../TopCompanies/TopCompanies";
import Resources from "../Resources/Resources";
import Cover from "../Cover/Cover";
import Filteredjobs from "../Filteredjobs/Filteredjobs";
import AddJob from "../AddJob/AddJob";

const Home = () => {
  return (
    <div>
      <Cover></Cover>
      <main className="main-container">
        <Filteredjobs></Filteredjobs>
        <TopCompanies></TopCompanies>
        {/* <About></About> */}
        <Resources></Resources>
      </main>
    </div>
  );
};

export default Home;
