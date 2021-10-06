import React from "react";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";

const Home = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <Alert variant="info">
      Welcome to iDepartment, {auth.username}
    </Alert>
  );
};

export default Home;
