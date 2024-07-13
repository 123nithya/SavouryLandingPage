import * as React from "react";
import { duration, experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import img1 from "../Images/i1.jpg";
import img2 from "../Images/i2.jpg";
import img3 from "../Images/i3.jpg";
import img4 from "../Images/i5.jpg";
import img5 from "../Images/shreyak-singh-gFB1IPmH6RE-unsplash.jpg";
import img6 from "../Images/i7.jpg";
import img7 from "../Images/i6.webp";
import img8 from "../Images/i4.jpg";
import { easeIn, easeOut, motion } from "framer-motion";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
}));

export default function ResponsiveMenu() {
  return (
    <div className="food-section">
      <div className="flexBox">
        <h2>Menu</h2>
        <button className="view">View All</button>
      </div>
      <Box
        sx={{ flexGrow: 1 }}
        className="boxContainer"
        style={{ borderRadius: "20px" }}
      >
        <Grid container className="grid">
          <motion.Grid initial={{x:-200}} animate={{ x:0 }} transition={{easeOut,duration:2}} item>
            <Item>
              <Card elevation={5} className="gridCard">
                <CardMedia
                  sx={{ height: 220 }}
                  image={img1}
                  title="green iguana"
                />
                <CardContent className="cardContent">
                  <h2>Recipe 1</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officiis asperiores ipsum voluptatibus natus provident
                    aliquid.
                  </p>
                </CardContent>
                <CardActions>
                  <Button className="btn">Add Item</Button>
                </CardActions>
              </Card>
            </Item>
          </motion.Grid>
          <motion.Grid initial={{x:-100}} animate={{ x:0 }} transition={{easeOut,duration:2}} item>
            <Item>
              <Card elevation={5} className="gridCard">
                <CardMedia
                  sx={{ height: 220 }}
                  image={img2}
                  title="green iguana"
                />
                <CardContent className="cardContent">
                  <h2>Recipe 2</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officiis asperiores ipsum voluptatibus natus provident
                    aliquid.
                  </p>
                </CardContent>
                <CardActions>
                  <Button className="btn">Add Item</Button>
                </CardActions>
              </Card>
            </Item>
          </motion.Grid>
          <motion.Grid initial={{x:-200}} animate={{ x:0 }} transition={{easeOut,duration:2}} item>
            <Item>
              <Card elevation={5} className="gridCard">
                <CardMedia
                  sx={{ height: 220 }}
                  image={img3}
                  title="green iguana"
                />
                <CardContent className="cardContent">
                  <h2>Recipe 5</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officiis asperiores ipsum voluptatibus natus provident
                    aliquid.
                  </p>
                </CardContent>
                <CardActions>
                  <Button className="btn">Add Item</Button>
                </CardActions>
              </Card>
            </Item>
          </motion.Grid>
          <motion.Grid initial={{x:-100}} animate={{ x:0 }} transition={{easeOut,duration:2}} item>
            <Item>
              <Card elevation={5} className="gridCard">
                <CardMedia
                  sx={{ height: 220 }}
                  image={img4}
                  title="green iguana"
                />
                <CardContent className="cardContent">
                  <h2>Recipe 6</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officiis asperiores ipsum voluptatibus natus provident
                    aliquid.
                  </p>
                </CardContent>
                <CardActions>
                  <Button className="btn">Add Item</Button>
                </CardActions>
              </Card>
            </Item>
          </motion.Grid>
          <motion.Grid initial={{x:-100}} animate={{ x:0 }} transition={{easeOut,duration:2}} item>
            <Item>
              <Card elevation={5} className="gridCard">
                <CardMedia
                  sx={{ height: 220 }}
                  image={img4}
                  title="green iguana"
                />
                <CardContent className="cardContent">
                  <h2>Recipe 6</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officiis asperiores ipsum voluptatibus natus provident
                    aliquid.
                  </p>
                </CardContent>
                <CardActions>
                  <Button className="btn">Add Item</Button>
                </CardActions>
              </Card>
            </Item>
          </motion.Grid>
          <motion.Grid initial={{x:-100}} animate={{ x:0 }} transition={{easeOut,duration:2}} item>
            <Item>
              <Card elevation={5} className="gridCard">
                <CardMedia
                  sx={{ height: 220 }}
                  image={img4}
                  title="green iguana"
                />
                <CardContent className="cardContent">
                  <h2>Recipe 6</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officiis asperiores ipsum voluptatibus natus provident
                    aliquid.
                  </p>
                </CardContent>
                <CardActions>
                  <Button className="btn">Add Item</Button>
                </CardActions>
              </Card>
            </Item>
          </motion.Grid>
          <motion.Grid initial={{x:-100}} animate={{ x:0 }} transition={{easeOut,duration:2}} item>
            <Item>
              <Card elevation={5} className="gridCard">
                <CardMedia
                  sx={{ height: 220 }}
                  image={img4}
                  title="green iguana"
                />
                <CardContent className="cardContent">
                  <h2>Recipe 6</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officiis asperiores ipsum voluptatibus natus provident
                    aliquid.
                  </p>
                </CardContent>
                <CardActions>
                  <Button className="btn">Add Item</Button>
                </CardActions>
              </Card>
            </Item>
          </motion.Grid>
          <motion.Grid initial={{x:-100}} animate={{ x:0 }} transition={{easeOut,duration:2}} item>
            <Item>
              <Card elevation={5} className="gridCard">
                <CardMedia
                  sx={{ height: 220 }}
                  image={img4}
                  title="green iguana"
                />
                <CardContent className="cardContent">
                  <h2>Recipe 6</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officiis asperiores ipsum voluptatibus natus provident
                    aliquid.
                  </p>
                </CardContent>
                <CardActions>
                  <Button className="btn">Add Item</Button>
                </CardActions>
              </Card>
            </Item>
          </motion.Grid>
        </Grid>
      </Box>
    </div>
  );
}
