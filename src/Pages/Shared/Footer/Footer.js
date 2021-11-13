import { Box } from "@mui/system";
import React from "react";
import logo from "../../../images/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#191919",
        mt: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Box
        className="flex-direction"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: "80px", paddingRight: "5px" }}
          src={logo}
          alt=""
        />
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <h3 className="title-size" style={{ color: "#e0e2d5" }}>
          Follow Us:{" "}
        </h3>
        <Box sx={{ color: "#6db8bb" }}>
          <FacebookIcon sx={{ px: 1, color: "#3b5998" }} />
          <InstagramIcon sx={{ pr: 1, color: "#8a3ab9" }} />
          <TwitterIcon sx={{ color: "#1DA1F2" }} />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CopyrightIcon sx={{ color: "#f0ea4c", pr: 1 }} />
        <span style={{ color: "#e0e2d5" }}>
          <small>All Copyright Reserved by Sree's HandiCrafts,2021</small>
        </span>
      </Box>
    </Box>
  );
};

export default Footer;
