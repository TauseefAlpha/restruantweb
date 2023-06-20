import {
  Box,
  TableContainer,
  Typography,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
import React from "react";
import Layout from "../../components/layouts/layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";




const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 8, ml: 4, "&h4": { mb: 4 } }}>
        <Typography variant="h4" component={"h4"}>
          Contact My Resturant
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          consectetur tempora ut rerum dolor corporis numquam quo, dignissimos
          tenetur. Nam odio mollitia quaerat porro aspernatur iure incidunt
          obcaecati, quibusdam eaque omnis corrupti impedit maiores alias
          assumenda totam adipisci sequi autem nisi officiis saepe. Ab eum modi
          laborum esse, eaque ullam.
        </Typography>
      </Box>
      <Box sx={{mx:4, width:"600px","@media(max-width:600px)":{ mx:4,width:"350px"}}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow sx={{ fontFamily: "revert-layer" }}>
                <TableCell sx={{bgcolor:"black", color:"white" , fontSize: "20px" }}>My contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ pt: 1, color: "goldenrod" }} />
                  03145976605(freecall)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <AttachEmailIcon sx={{ pt: 1, color: "skyblue" }} />
                  ahmedtauseef98@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <LocalPhoneIcon sx={{ pt: 1, color: "green" }} />
                  03405998599(number 2)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
