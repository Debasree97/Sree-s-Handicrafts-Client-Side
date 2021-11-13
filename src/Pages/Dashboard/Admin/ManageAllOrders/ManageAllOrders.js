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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

export default function ManageAllorders() {
  const [orders, setOrders] = React.useState();

  React.useEffect(() => {
    fetch(`https://whispering-bayou-91525.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders?.status]);

  const handleDeleteBtn = (id) => {
    const proceed = window.confirm("Do You Want to Remove This Item?");
    if (proceed) {
      fetch(`https://whispering-bayou-91525.herokuapp.com/delete/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Item Has Been Removed");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleUpdateBtn = (id) => {
    const user = { id };
    fetch("https://whispering-bayou-91525.herokuapp.com/status", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          //  setOrders(orders.status);
        }
      });
  };

  return (
    <Container>
      <Box>
        {orders?.length === 0 ? (
          <Box>No Order Yet</Box>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Item</TableCell>
                  <TableCell align="left">Product Details</TableCell>
                  <TableCell align="left">Customer Details</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders?.map((order) => (
                  <TableRow key={order._id}>
                    <TableCell>
                      <img
                        alt=""
                        src={order.img}
                        width="100rem"
                        style={{ borderRadius: "5px" }}
                      />
                    </TableCell>

                    <TableCell>
                      <Typography variant="p">
                        <span>Product: </span>
                        {order.proName}
                      </Typography>
                      <Divider />
                      <Typography variant="p">
                        <span>Price: </span>
                        {order.price}
                      </Typography>
                      <Divider />
                      <Typography variant="p">
                        <span>Unit: </span>1
                      </Typography>
                    </TableCell>

                    <TableCell align="left">
                      <Typography variant="p">
                        <span>Email: </span>
                        {order?.email}
                      </Typography>
                      <Divider />
                      <Typography variant="p">
                        <span>Name: </span>
                        {order?.custName}
                      </Typography>
                      <Divider />
                      <Typography variant="p">
                        <span>Address: </span>
                        {order.address}
                      </Typography>
                      <Divider />
                      <Typography variant="p">
                        <span>Phone Number: </span>
                        {order.phNumber}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="p">{order.status}</Typography>
                    </TableCell>

                    <TableCell align="center">
                      <IconButton
                        aria-label="Confirm"
                        style={{ color: "green" }}
                        size="large"
                        onClick={() => {
                          handleUpdateBtn(order._id);
                        }}
                      >
                        <CheckCircleIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          handleDeleteBtn(order._id);
                        }}
                        style={{ color: "red" }}
                        aria-label="delete"
                        size="large"
                      >
                        <CancelIcon fontSize="inherit" />
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
