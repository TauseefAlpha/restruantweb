import React from "react";
import Layout from "../../components/layouts/layout";
import {
  Typography,
  ImageList,
  ImageListItem,
  Box,
  Stack,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import { GallaryList } from "../../data/gallaryimages";
import InfoIcon from "@mui/icons-material/Info";

const Gallary = () => {
  return (
    <Layout>
      <Box sx={{ my: 2 }}>
        <Stack spacing={2}>
          <Typography textAlign={"center"} variant="h5">
            Gallary Photo
          </Typography>
          <Box sx={{ width:"99vw", height: 450, overflowY: "scroll" }}>
            <ImageList
              cols={3}
              rowHeight={300}
            >
              {GallaryList.map((item: any) => (
                <ImageListItem key={item.image} sx={{ m: 1 }}>
                  <img src={item.image} loading="lazy" alt={item.title} />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.title}
                    // position="below"
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.title}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Gallary;
