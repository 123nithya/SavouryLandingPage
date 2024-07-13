import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import img1 from "../Images/b2.jpg";
import img2 from "../Images/b1.jpg";
import img3 from "../Images/b3.jpg";
import img4 from "../Images/b4.jpg";

const Item = styled(Paper)(({ theme }) => ({
  
}));

const BlogSection = () => {
  return (
    <div className="blogSection-container">
      <div className="blogFlex">
        <h2>Blogs</h2>
        <button className="view">View All</button>
      </div>
      <Box sx={{ flexGrow: 1 }} className="blogBox">
        <Grid container spacing={2} className="gCont">
          <Grid item xs={4} className="grid">
            <Item>
              <Card elevation={5} className="gridBlogCard1">
                <CardMedia
                  sx={{ height: 180 }}
                  image={img1}
                  title="green iguana"
                />
                <CardContent className="cardContent">
                  <h2>Blog 1</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officiis asperiores ipsum voluptatibus natus provident
                    aliquid.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officiis asperiores.
                  </p>
                </CardContent>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={7} className="grid">
            <Item>
              <Card sx={{ Width: 500 }} elevation={5} className="gridBlogCard2">
                <CardMedia
                  sx={{ height: 220 }}
                  image={img2}
                  title="green iguana"
                />
                <CardContent className="cardContent">
                  <h2>Blog 2</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, nesciunt doloremque? Incidunt labore voluptates
                    qui corrupti sed excepturi error quas est! Veniam
                    consequuntur error sequi autem officia id rerum omnis!
                  </p>
                </CardContent>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={7} className="grid">
            <Item>
              <Card sx={{ Width: 500 }} elevation={5} className="gridBlogCard3">
                <CardMedia
                  sx={{ height: 220 }}
                  image={img3}
                  title="green iguana"
                />
                <CardContent className="cardContent">
                  <h2>Blog 3</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, nesciunt doloremque? Incidunt labore voluptates
                    qui corrupti sed excepturi error quas est! Veniam
                    consequuntur error sequi autem officia id rerum omnis!
                  </p>
                </CardContent>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={4} className="grid">
            <Item>
              <Card elevation={5} className="gridBlogCard4">
                <CardMedia
                  sx={{ height: 175 }}
                  image={img4}
                  title="green iguana"
                />
                <CardContent className="cardContent">
                  <h2>Blog 4</h2>
                  <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officiis asperiores ipsum voluptatibus natus provident
                    aliquid.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officiis asperiores.
                  </p>
                </CardContent>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default BlogSection;
