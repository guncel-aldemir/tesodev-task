import React, { useContext, useEffect } from "react";
import { MainContext } from "../../../Context/MainContext";
import { BsSearch } from "react-icons/bs";
import "./MainSearch.scss";
import { NavLink } from "react-router-dom";
import Vector from "../../../Assets/Icons/VectorIcon/Vector.svg";
const MainSearch = () => {
  const { setQuery, query, isShown, setIsShown, datas, showMore, setShowMore } =
    useContext(MainContext);


  const handleSearch = () => {
   
    if(query !== ""){
    
      setIsShown(true)
    
    }else{
      setIsShown(false);
      
    }
   
    
    if (
      datas.filter((item) => item[0].toLocaleLowerCase().includes(query))
        .length > 3
    ) {
      setShowMore(true);
    }else{
      setShowMore(false);
    }
  };
  
useEffect(()=>{
  setTimeout(()=>{
    handleSearch()
  },1100)
  
},[query])
  return (
    <div className="mainSearch">
      <div className="input">
        <div className="inputSide">
          <BsSearch size={18} className="iconSearch" />
          <input
            type="text"
            onChange={(e) =>
              setQuery(e.target.value.slice(0).toLocaleLowerCase())
            }
            className="inputClass"
          />
        </div>

        <button className="searchButton" onClick={handleSearch}>
          Search
        </button>
      </div>
      {isShown && (
        <div className="searchResults">
          {datas
            .filter((item) => item[0].toLocaleLowerCase().includes(query))
            .map((item, index) => (
              <div className=" results" key={index}>
                <img src={Vector} alt="" />
                <div className="result">
                  <span className="name">{item[0]}</span>
                  <p className="email">{item[2]}</p>
                </div>
              </div>
            ))
            .slice(0, 3)}
         
          {showMore && (
            <NavLink to="/SearchMoreList" className="mainSearchList">
              Load More
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
};

export default MainSearch;
