import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";


export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoToHomePage = () => {
    navigate('/');
  }
  

  return (
    <div id="error-page">
      <h1>Page not found</h1>
      <p>
        <em>{error.statusText || error.message}</em>
      </p>
      <button onClick={handleGoToHomePage}>Go to home page</button>
    </div>
  )
};