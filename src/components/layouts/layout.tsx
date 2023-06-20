import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface Iprops {
  children: ReactNode | string;
}

const Layout: React.FC<Iprops> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Typography>{children}</Typography>
      <Footer/>
    </Box>
  );
};

export default Layout;
