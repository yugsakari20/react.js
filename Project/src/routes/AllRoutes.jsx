import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Private from "./private";
import { Ability } from "../role/Ability";
import PageNotFound from "../pages/PageNotFound";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Private>
              <Home />
            </Private>
          }
        />
        {Ability(["admin"]) ? (
          <Route
            path="/assign"
            element={
              <Private>
                <Assign />
              </Private>
            }
          />
        ) : null}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;