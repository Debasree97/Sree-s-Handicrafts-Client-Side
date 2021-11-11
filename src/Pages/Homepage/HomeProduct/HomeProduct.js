import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import SingleProduct from "../../Shared/SingleProduct/SingleProduct";

const HomeProduct = () => {
  const [homeProducts, setHomeProducts] = useState([]);
  useEffect(() => {
    fetch(`https://whispering-bayou-91525.herokuapp.com/allproduct`)
      .then((res) => res.json())
      .then((data) => setHomeProducts(data.homeProducts));
  }, []);

  return (
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
  );
};

export default HomeProduct;
