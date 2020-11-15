import React from "react";
import { Route, Redirect } from "react-router-dom";
function PrivateRoute({ component: Component, ...rest }) {
  const isAuthnticated = localStorage.getItem("isAuthnticated") && localStorage.getItem('userID');
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthnticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/Login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}
export default PrivateRoute ;
