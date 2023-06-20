import React from "react";
import Layout from "../../components/layouts/layout";
import somsa from "../../images/somsa.jpg";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Avatar,
  Typography,
  Grid,
} from "@mui/material";
import { MenuList } from "../../data/data";

const Menu = () => {
  return (
    <Layout>
      <Box>
        <Grid
          container
          spacing={2}
          padding={6}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {MenuList.map((menu) => (
            <Grid item xs={12} sm={6} md={4} alignSelf={"center"}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={<Avatar src={menu.image} aria-label="recipe" />}
                  title={menu.name}
                  subheader="September 14, 2016"
                />
                <CardMedia
                  sx={{ height: "300px", width: "400px" }}
                  component={"img"}
                  image={menu.image}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {menu.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default Menu;
