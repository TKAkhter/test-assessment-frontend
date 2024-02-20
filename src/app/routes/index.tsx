import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import AuthMiddleware from "../middlewares";
import CreateUser from "../components/CreateUser";

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/create-user" component={CreateUser} />
      <Route path="/dashboard">
        <AuthMiddleware>
          <Dashboard />
        </AuthMiddleware>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
};

export default AppRoutes;
