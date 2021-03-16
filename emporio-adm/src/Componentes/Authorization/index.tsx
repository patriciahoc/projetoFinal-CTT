import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

interface AuthorizationProps {
  permissions: string[];
}

const Authorization = (props: AuthorizationProps) => {
  const user = useSelector((state: any) => state.usersReducer);
  const hasPermission = () => {
    if (!user.id) {
      return false;
    }

    return props.permissions.includes(user.role);
  };

  return <>{!hasPermission() && <Redirect to="/" />}</>;
};

export default Authorization;
