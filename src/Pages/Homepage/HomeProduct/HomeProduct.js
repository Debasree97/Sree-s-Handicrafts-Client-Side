import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import SingleProduct from "../../Shared/SingleProduct/SingleProduct";
import { Box } from "@mui/system";

const HomeProduct = () => {
  const [homeProducts, setHomeProducts] = useState([]);
  useEffect(() => {
    fetch(`https://sreescraft.onrender.com/allproduct`)
      .then((res) => res.json())
      .then((data) => setHomeProducts(data.homeProducts));
  }, []);

  return (
    <Box>
      <Box sx={{ textAlign: "center", marginTop: "100px", mb: 5 }}>
        <Typography
          className="custom-font"
          variant="p"
          sx={{ textAlign: "center", fontWeight: "bold", color: "#191919" }}
        >
          This Month's Hit
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
          {homeProducts?.map((homeProduct) => (
            <Grid item sm={12} md={6} lg={4} key={homeProduct._id}>
              <SingleProduct
                key={homeProduct._id}
                product={homeProduct}
              ></SingleProduct>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeProduct;
