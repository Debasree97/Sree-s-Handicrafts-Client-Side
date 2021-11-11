import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import useAuth from "../../../../hooks/useAuth";
import DeleteIcon from "@mui/icons-material/Delete";

export default function MyOrders() {
  const { user } = useAuth();

  const [orders, setOrders] = React.useState();

  React.useEffect(() => {
    fetch(`https://whispering-bayou-91525.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => {
        const myBooking = data.filter((order) => order.email === user.email);
        setOrders(myBooking);
      });
  }, [user.email]);

  const handleDeleteBtn = (id) => {
    const proceed = window.confirm("Do You Want to Remove This Item?");
    if (proceed) {
      fetch(`http://localhost:5000/delete/${id}`, {
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
          <Box>No Order Yet</Box>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" colSpan={2}>
                    User Logged in :
                  </TableCell>
                  <TableCell colSpan={2} align="right">
                    {user?.email}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="left">Product</TableCell>
                  <TableCell align="left">Unit Price</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders?.map((order) => (
                  <TableRow key={order._id}>
                    <TableCell>
                      <Container>
                        <img
                          alt=""
                          src={order.img}
                          width="150rem"
                          style={{ borderRadius: "5px" }}
                        />
                      </Container>
                    </TableCell>
                    <TableCell align="left">{order.proName}</TableCell>
                    <TableCell align="left">{order.price}</TableCell>
                    <TableCell align="left">
                      <IconButton
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
                <TableRow>
                  <TableCell />
                  <TableCell colSpan={1}>Total</TableCell>
                  <TableCell align="left">
                    {orders
                      ?.map(({ price }) => price)
                      .reduce((sum, i) => sum + i, 0)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Container>
  );
}
