import React from "react";
import { NavLink } from "react-router-dom";
import MainSearch from "./MainSearch/MainSearch"
import Logo from "../../Assets/Images/Tesodev-logo.svg";
import Footer from "../Footer/Footer"

import "./Main.scss";
import MainCard from "./MainCard/MainCard";
const Main = () => {
  return (
    <>
    <div className="mainSide">
    <div className="main">
      <div className="addButton">
        
        <NavLink to="/AddNewRecord" className="addNew">
          Add New Record
        </NavLink>
        
      </div>
      <div className=" tesodevImg">
        <img src={Logo} alt="tesodev svg"></img>
      </div>

      <div className="searchText">
        <p>Search app</p>
      </div>
      <div className="findText">
        <span>Find in records</span>
      </div>
    <MainSearch/>
    <MainCard/>
    
    </div>
    
  </div>
  <Footer/>
    </>
    
  )
};

export default Main;
