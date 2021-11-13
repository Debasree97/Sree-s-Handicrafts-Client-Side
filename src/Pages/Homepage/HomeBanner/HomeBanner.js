import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import banner from "../../../images/banner.JPG";
import "animate.css";
import { useHistory } from "react-router";

const HomeBanner = () => {
  const history = useHistory();

  const handleExploreBtn = () => {
    history.push("/exploreproduct");
  };
  const bgImg = {
    backgroundImage: `url(${banner})`,
    height: "100vh",
  };
  return (
    <Grid container>
      <Grid container sx={{ justifyContent: "center" }} item style={bgImg} xs>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="p"
            className="banner-title"
            sx={{
              textAlign: "center",
              color: "#f2f3f4",
              fontWeight: "bold",
              mb: 5,
              pb: 5,
            }}
          >
            Where All Creations Are Made With Love
          </Typography>
          <Box>
            <Button
              className="animate__animated animate__zoomIn btn-style"
              variant="contained"
              size="large"
              sx={{ color: "#191919", fontWeight: "bold" }}
              onClick={handleExploreBtn}
            >
              Explore
            </Button>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default HomeBanner;
