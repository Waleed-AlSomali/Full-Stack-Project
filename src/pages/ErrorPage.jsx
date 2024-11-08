import { Container, ToggleButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import Navbar from "../components/layout/Navbar";


export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoToHomePage = () => {
    navigate('/');
  }


  return (
    <div>
      <Navbar />
      <Container id="error-page">
        <Typography variant="h2">Page not found</Typography>
        <Typography variant="h2">{error.statusText || error.message}</Typography>
        <ToggleButton onClick={handleGoToHomePage}>Go to home page</ToggleButton>
      </Container>
    </div>
  )
};