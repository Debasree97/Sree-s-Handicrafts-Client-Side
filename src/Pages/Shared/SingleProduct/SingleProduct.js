import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useHistory } from "react-router";
import { Box } from "@mui/system";

const SingleProduct = (props) => {
  const history = useHistory();

  const { name, price, _id, description, img } = props.product;

  const handleOrderBtn = (id) => {
    history.push(`/orderproduct/${id}`);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
      }}
    >
      <Grid>
        <Card
          sx={{ maxWidth: 345, backgroundColor: "#808080", color: "#f2f3f4" }}
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
          <CardActions sx={{ display: "grid" }}>
            <Button
              className="btn-style"
              variant="contained"
              sx={{ color: "#191919", fontWeight: "bold" }}
              onClick={() => {
                handleOrderBtn(_id);
              }}
            >
              Purchase Now
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Box>
  );
};

export default SingleProduct;
