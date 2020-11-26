import React, { useState, useEffect } from "react";
import AddComp from "./add-comp/add-comp";
import Filter from "./filter-comp/filter";
import { useSelector } from "react-redux";
import "./mainAdd.css";
const MainBlockInp = () => {
  const [ph, setPh] = useState({
    marginLeft: "-400px",
  });
  const [filS, setFilS] = useState(false);
  const contacts = useSelector((state) => state.toolkit.contacts.items);
  let test = "";
  useEffect(() => {
    if (contacts.length > 0) {
      setFilS(true);
    } else {
      setFilS(false);
    }
  }, [contacts]);
  useEffect(() => {
    if (contacts.length > 0) {
      setFilS(true);
    }
    setPh({ marginLeft: "0px", transition: "1s" });
  }, []);
  return (
    <div>
      <div className="phone">
        <p style={ph}>PhoneBook</p>
      </div>
      <div className="mainAdd">
        <AddComp />
      </div>
      {filS ? <Filter /> : null}
    </div>
  );
};
export default MainBlockInp;
