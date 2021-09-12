import React, { useState } from "react";
import "./home.style.css";
import { TextField, Button } from "@material-ui/core";

export const Home = () => {

  return (
    <div className="homepage">
      <div className="homepage-container">
        <h1> Please Fill the details to continue </h1>
        <TextField
          style={{ marginBottom: "40" }}
          label="Enter your name"
          variant="outlined"
        />
        <Button variant="contained" color="secondary">
            Start Quiz
        </Button>
      </div>
    </div>
  );
};
