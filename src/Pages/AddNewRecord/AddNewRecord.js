import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/jpg 1.svg";
import { BiArrowBack } from "react-icons/bi";
import "./AddNewRecord.scss";
import { MainContext } from "../../Context/MainContext";
import {AiFillCloseCircle} from "react-icons/ai";
import Error from "../../Assets/Icons/ErrorIcons/Buttons.svg";
import "./AddNewRecord.scss";
const AddNewRecord = () => {
  const [errorStyle,setErrorStyle]= useState(false);
  
  const {
    name,
    setName,
    country,
    setCountry,
    city,
    setCity,
    email,
    setEmail,
    errorOpen,
    setErrorOpen,
 
  } = useContext(MainContext);
  console.log("name length=",name.length);
  console.log("city length=",city.length);
  console.log("country length=",country.length);
  console.log("email length=",email.length);

  const isEnabled = name.split("").length >2 && country.toString().length > 0 &&
  city.toString().length > 0 &&
  email.toString().length >2 ;

  const handleSubmit = (e) => {
    console.log("deneme");
    e.preventDefault();
    if(name.split(" ").length <2){
      setErrorOpen(true)
     setErrorStyle(true)
    
     
    } else{
      console.log("oldu");
    }
 
  };


console.log("erroropen",errorOpen);

  console.log("name split",name.split(" ").length);
  console.log("isEnabled",isEnabled);
  // useEffect(()=>{
  //   handleDisabled()

  // },[])
  // useEffect(()=>{
  //   handleErrorMessage()
  // },[disabled])

  return (
    <div className="addNewRecordSide">
      <div className="addNewRecord">
        <div className="navbar">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="return">
            <BiArrowBack color="#484848" size={26} />
            <Link to="/SearchMoreList">Return to List Page</Link>
          </div>
        </div>
        <div className="formSides">
          <form className="formSide" onSubmit={handleSubmit}>
          <label className={errorStyle ? "labelError" :"nameLabel" }>Name Surname</label>
          <input
            type="text"
            maxLength={60}
            placeholder="Enter name and surname"
            value={name}
             className={errorStyle ? "errorInput" : "input"}
          
            onChange={(e) =>
              setName(e.target.value.replace(/[^a-zA-Z ]/gi, ""))
            }

          />
          {/* {handleErrorInput(name) } */}
          <label className="countrySide">Country</label>
          <input
            type="text"
            maxLength={40}
            placeholder="Enter a country"
            value={country}
            onChange={(e) =>
              setCountry(e.target.value.replace(/[^a-zA-Z ]/gi, ""))
            }
          />
          <label className="citySide">City</label>
          <input
            type="text"
            maxLength={40}
            placeholder="Enter a city"
            value={city}
            onChange={(e) =>
              setCity(e.target.value.replace(/[^a-zA-Z ]/gi, ""))
            }
          />
          <label className="emailSide">Email</label>
          <input type="text" value={email} placeholder="Enter a e-mail (abc@xyz.com)" onChange={(e) =>
              setEmail(e.target.value)
            } />
            <div className="buttonSide">
          <button type="submit" disabled={!isEnabled} className={!isEnabled ? "btnDisabled":"btnActive"} >Add</button>
        </div>
          </form>
        </div>
        
        {errorOpen && <div className="errorName">
            <div className="exit">
            <AiFillCloseCircle onClick={()=>setErrorOpen(false)}/>
            </div>
            <div className="errorMessage">
              <div className="errorText">
                <h4>Error while adding link element</h4>
                <p>Name and surname should contain at least 2 words</p>
              </div>
              <div className="errorIcon" >
                <img src={Error} alt="" />
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default AddNewRecord;
