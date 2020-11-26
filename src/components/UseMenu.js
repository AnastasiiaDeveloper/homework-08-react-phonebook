import React from "react";
const UseMenu = ({ data, logout }) => {
  return (
    <div style={{ display: "flex", marginTop: "5px", marginLeft: "10px" }}>
      {" "}
      <button type="button" className="btn btn-danger" onClick={logout}>
        logout
      </button>
      <p style={{ marginTop: "5px", marginLeft: "10px" }}>
        You are logged in as: {data.name}
      </p>
    </div>
  );
};
export default UseMenu;
