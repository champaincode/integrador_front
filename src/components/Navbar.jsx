import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LogoCoffeels from "../Utils/LogoCoffeels";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import Shopcar from "../Utils/Shopcar";
import Search from "./Search"

const pages = [
  { productName: "Products", routes: "/products" },
  { productName: "coffee", routes: "/coffee" },
  { productName: "location", routes: "/location" },
  { productName: "featured", routes: "/featured" },
  
];


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const matches = useMediaQuery("(max-width:900px)");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#795548" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoCoffeels
            className={matches ? "LogoCoffeCelu" : "LogoCoffePc"}
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Link to="/" style={{textDecoration:"none"}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
       
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Lobster",
              fontSize: 40,
              fontWeight: 200,
              color: "white",
              textDecoration: "none",
            }}
          >
            Coffeels 
          </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <LogoCoffeels
              className="LogoCoffe"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            />
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.productName} onClick={handleCloseNavMenu}>
                  <Link to={page.routes} style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{ color: "black", fontFamily: "Roboto" }}
                      textAlign="center"
                    >
                      {page.productName}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link to="/" style={{textDecoration:"none"}}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Lobster",
              fontWeight: 200,
              fontSize: 40,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Coffeels
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={page.routes} style={{ textDecoration: "none" }}>
                <Button
                  key={page.productName}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.productName}
                </Button>
              </Link>
            ))}
          </Box>
       
          <Box>
              <Link to="/shop">
              <Shopcar />
              </Link>
           
          </Box>
       <Search/>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0,  }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography textAlign="center">Login</Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography textAlign="center">Register</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
