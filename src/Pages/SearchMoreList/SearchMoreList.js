import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../Context/MainContext";
import { NavLink } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Logo from "../../Assets/Images/jpg 1.svg";
import Vector from "../../Assets/Icons/VectorIcon/Vector.svg";
import { BsArrowDownUp } from "react-icons/bs";
import "./SearchMoreList.scss";


const SearchMoreList = () => {
  const { query, setQuery, datas, pageNumber, setPageNumber,dropdown, setDropdown,list, setList,sortedValue, setSortedValue, } =
    useContext(MainContext);


  const handleClick = () => {
    



  };
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  const perPage = 5;
  const pagesVisited = pageNumber * perPage;
  const handleDisplaySearch = () => {
    const display = datas.filter((item) =>
      item[0].toLocaleLowerCase().includes(query)
    );
    setList(display);
    
  };
  const variable=list
  .slice(pagesVisited, pagesVisited + perPage)
  .map((data) => {
    return (
      <div className="resultAll">
        <div className="result">
          <div className="informationSide">
            <div className="information">
              <div className="vector">
                <img src={Vector} alt="" />
              </div>
              <div className="companySide">
                <span className="company">{data[1]}</span>
                <span className="email">{data[2]}</span>
              </div>
            </div>
            <div className="textSide">
              <div className="nameSide">
                <span className="name">{data[0]}</span>
              </div>
              <div className="dateSide">
                <span className="date">{data[3]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const pageCount = Math.ceil(list.length / perPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    handleClick();
    handleDisplaySearch();
    
  }, [query]);

  const handleSort = () => {
 
    const copylist = [...list];
    if (sortedValue === "asc") {
      const sortItems = copylist.sort((a, b) => a[0].localeCompare(b[0]));
      setList(sortItems);
    } else if (sortedValue === "desc") {
      const sortItems = copylist.sort((a, b) => b[0].localeCompare(a[0]));
      setList(sortItems);
    }
  };
  useEffect(() => {
    handleSort();
    
  }, [sortedValue]);
  console.log("sortedValue", sortedValue);
  console.log("list", list);
  return (
    <div className="searchMoreLists" style={{ "margin-top": "27px" }}>
      <div className="searchMore">
        <div className="searchSide">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="searchInput">
            <input
              type="text"
              placeholder={query}
              className="inputClass"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="searchButton">
            <button className="button" onClick={handleClick}>
              Search
            </button>
          </div>
          <div className="addNewRecord">
            <NavLink to="/AddNewRecord" className="addNew">
              Add New Record
            </NavLink>
          </div>
        </div>
      
        <div className="resultSide">
           
            <div className="searchLists">
              {variable}
              
                <div className="paginationSide">
                <ReactPaginate
                  className="pagination"
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                />
              </div>
              
              
            </div>
          

          <div className="dropdownList">
            <div className="orderBy">
              <BsArrowDownUp size={26} />
              <button onClick={handleDropdown} className="dropdownButton">
                order by
              </button>
            </div>

            {dropdown && (
              <div className="dropdownSide">
                <div className="nameAscend">
                  <button
                    onClick={() => {
                      setSortedValue("asc");
                    }}
                  >
                    name ascending
                  </button>
                </div>
                <div className="nameDescend">
                  <button
                    onClick={() => {
                      setSortedValue("desc");
                    }}
                  >
                    name descending
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
      </div>
    
    </div>
  );
};

export default SearchMoreList;
