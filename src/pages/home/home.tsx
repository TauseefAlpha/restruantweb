import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Layout from "../../components/layouts/layout";
import Banner from "../../images/banner.jpeg"
import "../../styles/homestyle.css"
import { Link } from "react-router-dom";


const Home = () => (
  <>
    <Layout>
      <Box className="home" sx={{ backgroundImage: `url(${Banner})` }}>
        <Box className="header-Container">
          <Typography variant="h4" component={"h1"}>Home page</Typography>
          <Typography>Resturant website home page</Typography>
          <Link to="/menu">
            <Button
              variant="contained"
              sx={{ bgcolor: "white", color: "black" }}
            >
              Oder Now
            </Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  </>
);
export default Home;
