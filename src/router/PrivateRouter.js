import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

const PrivateRouter = (props) => {
    // console.log(props)
    // console.log( "Private ROUTER props-path :" + props.path);
    // console.log( "Private ROUTER props-component :" + props.component);

  let { currentUser } = useAuth();

  //just for testing purpose
  currentUser= {
      email:"a@gmail.com"
  }
  return currentUser ? (
    <Route path={props.path} component={props.component} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRouter;
