import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const Authorization = () => {
  const user = useSelector((state: any) => state.usersReducer);

  return <>{!user.id && <Redirect to="/login" />}</>;
};

export default Authorization;
