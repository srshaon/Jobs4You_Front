import "./Home.css";

import React from "react";
import About from "../About/About";
import TopCompanies from "../TopCompanies/TopCompanies";
import Resources from "../Resources/Resources";
import Cover from "../Cover/Cover";
import Filteredjobs from "../Filteredjobs/Filteredjobs";

const Home = () => {
  return (
    <div>
      <Cover></Cover>
      <TopCompanies></TopCompanies>
      <About></About>
      <Resources></Resources>
      <Filteredjobs></Filteredjobs>
    </div>
  );
};

export default Home;
