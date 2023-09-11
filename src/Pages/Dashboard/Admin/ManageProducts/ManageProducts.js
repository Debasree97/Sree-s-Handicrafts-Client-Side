import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, Divider, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CancelIcon from "@mui/icons-material/Cancel";

export default function ManageProducts() {
  const [products, setProducts] = React.useState();

  React.useEffect(() => {
    fetch(`https://sreescraft.onrender.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteBtn = (id) => {
    const proceed = window.confirm("Do You Want to Remove This Item?");
    if (proceed) {
      fetch(`https://sreescraft.onrender.com/deleteproduct/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Item Has Been Removed");
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };

  return (
    <Container sx={{ my: 5 }}>
      <h1 style={{ textAlign: "center" }}>All Products</h1>
      <Box>
        {products?.length === 0 ? (
          <Box>No product Yet</Box>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Item</TableCell>
                  <TableCell align="center">Product Details</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products?.map((product) => (
                  <TableRow key={product._id}>
                    <TableCell>
                      <img
                        alt=""
                        src={product.img}
                        width="200rem"
                        style={{ bproductRadius: "5px" }}
                      />
                    </TableCell>

                    <TableCell>
                      <Typography variant="p">
                        <span>Product: </span>
                        {product.name}
                      </Typography>
                      <Divider />
                      <Typography variant="p">
                        <span>Price: </span>
                        {product.price}
                      </Typography>
                      <Divider />
                      <Typography variant="p">
                        <span>Description: </span>
                        {product.description}
                      </Typography>
                    </TableCell>

                    <TableCell align="center">
                      <IconButton
                        onClick={() => {
                          handleDeleteBtn(product._id);
                        }}
                        aria-label="delete"
                        size="large"
                      >
                        <CancelIcon sx={{ color: "red" }} fontSize="inherit" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Container>
  );
}
