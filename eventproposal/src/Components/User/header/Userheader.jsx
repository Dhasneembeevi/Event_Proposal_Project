import React, { useContext } from "react";
import UserContext from "../../UserContext";

function UserHeader() {
  const { username } = useContext(UserContext);

  return <span style={{marginRight:"5rem", marginTop:"14px"}}>Welcome, {username}!</span>;
}

export default UserHeader;

