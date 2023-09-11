import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import OrderForm from "../OrderForm/OrderForm";

const ProductDetails = () => {
  const { id } = useParams();
  const [orderProduct, setOrderProduct] = useState({});

  useEffect(() => {
    const url = `https://sreescraft.onrender.com/orderproduct/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrderProduct(data);
      });
  }, [id]);

  const { name, price, img, description } = orderProduct;
  return (
    <Container>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          marginTop: "40px",
        }}
      >
        Please Fill Up the Form below to Submit Your Order
      </h1>
      <Box style={{ display: "flex" }} className="flex-direction">
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="custom-width-1"
        >
          <Grid>
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "#808080",
                color: "#f2f3f4",
                marginBottom: "40px",
              }}
            >
              <CardMedia component="img" alt="" height="240" image={img} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#f0ea4c", fontWeight: "bold" }}
                >
                  {name}
                </Typography>
                <p style={{ textAlign: "justify" }}>{description}</p>
                <Typography gutterBottom variant="h5" component="div">
                  <span style={{ marginRight: "5px" }}>৳</span>
                  {price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Container>

        <Box className="custom-width-2">
          <OrderForm orderProduct={orderProduct}></OrderForm>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetails;
