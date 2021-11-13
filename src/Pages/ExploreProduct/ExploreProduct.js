import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SingleProduct from "../Shared/SingleProduct/SingleProduct";

const ExploreProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://whispering-bayou-91525.herokuapp.com/allproduct`)
      .then((res) => res.json())
      .then((data) => setProducts(data.allProducts));
  }, []);

  return (
    <Box>
      <Box sx={{ textAlign: "center", marginTop: "30px", mb: 5 }}>
        <Typography
          className="custom-font"
          variant="p"
          sx={{ textAlign: "center", fontWeight: "bold", color: "#191919" }}
        >
          Explore Our Creations
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
          {products?.map((product) => (
            <Grid item sm={12} md={6} lg={4} key={product._id}>
              <SingleProduct
               key={product._id} product={product}
              ></SingleProduct>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExploreProduct;
