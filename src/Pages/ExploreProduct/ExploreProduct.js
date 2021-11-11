import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleProduct from "../Shared/SingleProduct/SingleProduct";

const ExploreProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allproduct`)
      .then((res) => res.json())
      .then((data) => setProducts(data.allProducts));
  }, []);

  return (
    <Grid container spacing={2}>
      {products?.map((product) => (
        <Grid item sm={12} md={6} lg={4} key={product._id}>
          <SingleProduct key={product._id} product={product}></SingleProduct>
        </Grid>
      ))}
    </Grid>
  );
};

export default ExploreProduct;
