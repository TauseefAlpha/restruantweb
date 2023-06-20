import React from "react";
import Layout from "../../components/layouts/layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 8,
          textAlign: "center",
          p: 4,
          "& h5": { my: 5, fontSize: "2rem" },
          "& p": { fontSize: "16px" },
          "@media (max-width:600px)": {
            my: 2,
            "& h5": { my: 2, fontSize: "1.5rem" },
            "& p": { textAlign: "justify" },
          },
        }}
      >
        <Typography variant="h5" component={"h5"}>
          About Resturant
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          cupiditate. Quisquam, numquam optio. Harum delectus illo, corrupti
          nesciunt mollitia ipsam! Velit tenetur, in officiis ipsa aliquam
          cumque qui corporis, nostrum deserunt officia asperiores. Distinctio
          assumenda, error repudiandae obcaecati ducimus vero nihil? Nemo
          doloribus, nobis quas odio sit ratione rem consequuntur doloremque
          ipsum quidem eius, aliquid vitae cupiditate a. In optio distinctio
          asperiores, soluta provident iure. Saepe ipsa temporibus velit
          consequuntur odio nesciunt deserunt! Quo at, fugit quibusdam minima
          adipisci, rerum beatae voluptate eligendi, excepturi iste quaerat
          neque atque. Iste maiores vitae ipsum commodi iure dolorum ipsam
          inventore, quo explicabo esse!
        </Typography>
        <br />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          numquam omnis aut impedit culpa sint fuga dolore placeat, est
          asperiores itaque porro dolor repellat quaerat facere ut illo possimus
          delectus nostrum reiciendis ipsam unde. Repudiandae soluta nisi fuga
          explicabo aperiam sapiente possimus quae modi qui, perferendis hic
          quos. Soluta ducimus doloremque minus repudiandae earum necessitatibus
          nostrum placeat cupiditate, aperiam, consectetur assumenda dolores
          labore voluptatem consequuntur non? Dignissimos tempore delectus
          consequuntur! Quaerat necessitatibus, neque nobis odio maiores veniam
          maxime rerum dolores facilis consequuntur quod unde error nam
          repellendus enim sapiente minima blanditiis illum odit tempore
          voluptatem? Molestiae expedita dolore a eligendi!
        </Typography>
      </Box>
    </Layout>
  );
};

export default About;
