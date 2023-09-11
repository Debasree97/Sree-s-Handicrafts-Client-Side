import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useAuth from "../../../../hooks/useAuth";
import DeleteIcon from "@mui/icons-material/Delete";

export default function MyOrders() {
  const { user } = useAuth();

  const [orders, setOrders] = React.useState();

  React.useEffect(() => {
    fetch(`https://sreescraft.onrender.com/orders`)
      .then((res) => res.json())
      .then((data) => {
        const myBooking = data.filter((order) => order.email === user.email);
        setOrders(myBooking);
      });
  }, [user.email]);

  const handleDeleteBtn = (id) => {
    const proceed = window.confirm("Do You Want to Remove This Item?");
    if (proceed) {
      fetch(`https://sreescraft.onrender.com/delete/${id}`, {
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

  return (
    <Container>
      <Box>
        {orders?.length === 0 ? (
          <Box></Box>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" colSpan={2}>
                    User Logged in :
                  </TableCell>
                  <TableCell colSpan={3} align="right">
                    {user?.email}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left"> Item</TableCell>
                  <TableCell align="left">Product</TableCell>
                  <TableCell align="left">Unit Price</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders?.map((order) => (
                  <TableRow key={order._id}>
                    <TableCell>
                      <Box>
                        <img
                          alt=""
                          src={order.img}
                          width="150rem"
                          style={{ borderRadius: "5px" }}
                        />
                      </Box>
                    </TableCell>
                    <TableCell align="left">{order.proName}</TableCell>
                    <TableCell align="left">{order.price}</TableCell>
                    <TableCell>
                      <Typography variant="p">{order.status}</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <IconButton
                        sx={{ color: "red" }}
                        onClick={() => {
                          handleDeleteBtn(order._id);
                        }}
                        aria-label="delete"
                        size="large"
                      >
                        <DeleteIcon fontSize="inherit" />
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
