import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, ListItemButton } from "@mui/material";
import { Switch, useRouteMatch, NavLink } from "react-router-dom";
import MyOrders from "../User/MyOrders/MyOrders";
import Payment from "../User/Payment/Payment";
import GiveReview from "../User/GiveReview/GiveReview";
import AddProduct from "../Admin/AddProduct/AddProduct";
import ManageProducts from "../Admin/ManageProducts/ManageProducts";
import ManageAllOrders from "../Admin/ManageAllOrders/ManageAllOrders";
import MakeAdmin from "../Admin/MakeAdmin/MakeAdmin";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import CustomerRoute from "../../Login/CustomerRoute/CustomerRoute";
import review from "../../../images/review.jpg";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const { admin, logOut } = useAuth();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const bgImg = {
    backgroundImage: `url(${review})`,
    height: "168vh",
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navStyleDrawer = {
    textDecoration: "none",
    marginLeft: "20px",
    fontWeight: "bold",
    color: "black",
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {!admin ? (
          <List>
            <ListItem disablePadding>
              <NavLink to={`${url}/myorders`} style={navStyleDrawer}>
                <ListItemButton
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0)}
                >
                  <ListItemText primary="My Orders" />
                </ListItemButton>
              </NavLink>
            </ListItem>

            <ListItem disablePadding>
              <NavLink to={`${url}/payment`} style={navStyleDrawer}>
                <ListItemButton
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}
                >
                  <ListItemText primary="Payment" />
                </ListItemButton>
              </NavLink>
            </ListItem>

            <ListItem disablePadding>
              <NavLink to={`${url}/givereview`} style={navStyleDrawer}>
                <ListItemButton
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)}
                >
                  <ListItemText primary="Review" />
                </ListItemButton>
              </NavLink>
            </ListItem>
          </List>
        ) : (
          <List>
            <ListItem disablePadding>
              <NavLink to={`${url}/manageallorders`} style={navStyleDrawer}>
                <ListItemButton
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0)}
                >
                  <ListItemText primary="Manage All Orders" />
                </ListItemButton>
              </NavLink>
            </ListItem>

            <ListItem disablePadding>
              <NavLink to={`${url}/addproduct`} style={navStyleDrawer}>
                <ListItemButton
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}
                >
                  <ListItemText primary="Add A Product" />
                </ListItemButton>
              </NavLink>
            </ListItem>

            <ListItem disablePadding>
              <NavLink to={`${url}/manageproducts`} style={navStyleDrawer}>
                <ListItemButton
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)}
                >
                  <ListItemText primary="Manage Products" />
                </ListItemButton>
              </NavLink>
            </ListItem>

            <ListItem disablePadding>
              <NavLink to={`${url}/makeadmin`} style={navStyleDrawer}>
                <ListItemButton
                  selected={selectedIndex === 3}
                  onClick={(event) => handleListItemClick(event, 3)}
                >
                  <ListItemText primary="Make Admin" />
                </ListItemButton>
              </NavLink>
            </ListItem>
          </List>
        )}

        <ListItem disablePadding>
          <NavLink to="/home" style={navStyleDrawer}>
            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemText primary="Home" />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding>
          <NavLink
            to={`${url}/logout`}
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "black",
            }}
          >
            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <Button
                className="btn-style"
                variant="contained"
                onClick={logOut}
                sx={{ color: "#191919", fontWeight: "bold", ml: 1 }}
              >
                Log Out
              </Button>
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} style={bgImg}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#191919",
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color:"black",mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="p"
            noWrap
            component="div"
            className="custom-font"
            sx={{ color: "#f0ea4c" }}
          >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <CustomerRoute path={`${path}/myorders`}>
            <MyOrders></MyOrders>
          </CustomerRoute>
          <CustomerRoute path={`${path}/payment`}>
            <Payment></Payment>
          </CustomerRoute>
          <CustomerRoute path={`${path}/givereview`}>
            <GiveReview></GiveReview>
          </CustomerRoute>
          <AdminRoute path={`${path}/addproduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageallorders`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/manageproducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
