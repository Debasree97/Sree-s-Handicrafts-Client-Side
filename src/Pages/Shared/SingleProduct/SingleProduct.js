import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const SingleProduct = (props) => {
    const { name, price, _id, description, img } = props.product;
    return (
      <Grid>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Buy</Button>
          </CardActions>
        </Card>
      </Grid>
    );
};

export default SingleProduct;