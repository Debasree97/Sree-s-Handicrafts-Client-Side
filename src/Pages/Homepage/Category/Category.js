import React from "react";
import babyDress from "../../../images/category/babyDress.jpg";
import curtain from "../../../images/category/curtain.jpg";
import cushionCover from "../../../images/category/cushionCover.jpg";
import mat from "../../../images/category/mat.jpg";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";

const Category = () => {
    const categoryStyle = {
        backgroundRepeat: "no-repeat",
        height:"150px"
    };
  return (
    <Grid container spacing={1}>
      <Grid
        style={categoryStyle}
        sx={{
          backgroundImage: `url(${babyDress})`,
        }}
        item
        xs={12}
        sm={6}
        md={3}
      >
        <Box>
          <h1>Baby Dress</h1>
        </Box>
      </Grid>
      <Grid
        style={categoryStyle}
        sx={{
          backgroundImage: `url(${curtain})`,
        }}
        item
        xs={12}
        sm={6}
        md={3}
      >
        <Box>
          <h1>Baby Dress</h1>
        </Box>
      </Grid>
      <Grid
        style={categoryStyle}
        sx={{
          backgroundImage: `url(${cushionCover})`,
        }}
        item
        xs={12}
        sm={6}
        md={3}
      >
        <Box>
          <h1>Baby Dress</h1>
        </Box>
      </Grid>
      <Grid
        style={categoryStyle}
        sx={{
          backgroundImage: `url(${mat})`,
        }}
        item
        xs={12}
        sm={6}
        md={3}
      >
        <Box>
          <h1>Baby Dress</h1>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Category;
