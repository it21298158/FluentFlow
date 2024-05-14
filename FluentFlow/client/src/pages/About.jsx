import React from "react";
import UserTable from "../Table/UserTable";
import "bootstrap/dist/css/bootstrap.min.css"; // Corrected import path for Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Corrected import path for Bootstrap JS
import Toast from "react-hot-toast";

export default function About() {
  return (
    <>
      <UserTable />
      <Toast />
    </>
  );
}
