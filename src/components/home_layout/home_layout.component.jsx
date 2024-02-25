import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../navbar/navbar.component";

export default function HomeLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
