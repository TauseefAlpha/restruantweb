import { useRouteError } from "react-router-dom";
import React from "react";
import { Typography } from "@mui/material";
import Layout from "../../components/layouts/layout";
const ErrorPage: React.FC = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Layout>
      <Typography variant="h1">Oops!</Typography>
      <Typography>Sorry, an unexpected error has occurred.</Typography>
    </Layout>
  );
};

export default ErrorPage;
