import {
  Card,
  CardContent,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://sreescraft.onrender.com/homereview`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <Box sx={{ backgroundColor: "#808080", pb: 5, marginBottom: "100px" }}>
      <Box sx={{ textAlign: "center", marginTop: "80px", mb: 5 }}>
        <Typography
          className="custom-font"
          variant="p"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#f0ea4c",
            pt: 5,
          }}
        >
          People Who Loves Us!
        </Typography>
      </Box>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2}>
          {reviews?.map((review) => (
            <Grid item sm={12} md={6} lg={4} key={review._id}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {review.custname} <span> Says,</span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {review.review}
                    </Typography>
                    <Rating name="read-only" value={review.rating} readOnly />
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Review;
