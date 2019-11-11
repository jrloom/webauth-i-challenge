import React from "react";
import { PrivateRoute } from "./PrivateRoute";

import Users from "../Users";

const Router = () => {
  return (
    <>
      <PrivateRoute path="/users" component={Users} />
    </>
  );
};

export default Router;
