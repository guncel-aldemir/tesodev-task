import React, { useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainContext } from "./Context/MainContext";
import MockData from "./mockData.json";
import "./App.scss";
import Main from "./Components/Main/Main";
import AddNewRecord from "./Pages/AddNewRecord/AddNewRecord";
import SearchMoreList from "./Pages/SearchMoreList/SearchMoreList";

function App() {
  const [datas, setDatas] = useState(MockData.data);
  const [isShown, setIsShown] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [isSearch, setIsSearch] = useState(true);
  const [isDisplay, setDisplay] = useState(false);
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const[errorOpen,setErrorOpen]= useState(false);
  const[disabled,setDisabled] = useState(true);
  const[showMore,setShowMore]= useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [list, setList] = useState([]);
  const [sortedValue, setSortedValue] = useState("");
  const [errorStyle,setErrorStyle]= useState(false);
  const ContextData = {
    datas,
    setDatas,
    isShown,
    setIsShown,
    pageNumber,
    setPageNumber,
    isSearch,
    setIsSearch,
    isDisplay,
    setDisplay,
    query,
    setQuery,
    name,
    setName,
    country,
    setCountry,
    city,
    setCity,
    email,
    setEmail,
    errorOpen,setErrorOpen,
    disabled,setDisabled,
    showMore,setShowMore,setDropdown,list,dropdown, setList,sortedValue, setSortedValue,errorStyle,setErrorStyle
  };
  return (
    <div className="App">
      <MainContext.Provider value={ContextData}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/AddNewRecord" element={<AddNewRecord />} />
            <Route path="/SearchMoreList" element={<SearchMoreList />} />
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </div>
  );
}

export default App;
