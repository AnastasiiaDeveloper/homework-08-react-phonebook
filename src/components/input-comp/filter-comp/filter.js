import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { findContact } from "./../../../toolkitRedux/toolkitReducer";

const Filter = () => {
  const [filterName, setFilterName] = useState("");

  const dispatch = useDispatch();
  const reducerFilter = useCallback((p1) => {
    dispatch(findContact(p1));
  }, []);

  const actionFilter = (ev) => {
    setFilterName(ev.target.value);
  };
  useEffect(() => {
    reducerFilter(filterName);
  }, [filterName]);
  return (
    <div className="form-group filtDiv">
      <label>Find contacts by name</label>
      <input
        type="text"
        className="form-control"
        onChange={actionFilter}
        value={filterName}
        aria-describedby="emailHelp"
      />
    </div>
  );
};
export default Filter;
