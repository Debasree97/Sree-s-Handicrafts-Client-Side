import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import banner from "../../../images/banner.JPG";
import "animate.css";
import { useHistory } from "react-router";

const HomeBanner = () => {
  const history = useHistory();

  const handleExploreBtn = () => {
    history.push("/exploreproduct")
  }
    const bgImg = {
        backgroundImage: `url(${banner})`,
      height: "100vh",
    }
  return (
    <Grid container>
      <Grid
        container
        sx={{ alignItems: "center", justifyContent: "center" }}
        item
        style={bgImg}
        xs
      >
        <Box>
          <Button
            className="animate__animated animate__zoomIn btn-style"
            variant="contained"
            onClick={handleExploreBtn}
          >
            Explore
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomeBanner;
