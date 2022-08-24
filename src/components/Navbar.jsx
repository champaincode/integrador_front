import React, { useEffect, useState } from "react";
import { AppBar, Box,Typography,Toolbar,Menu,Container,Button,MenuItem } from "@mui/material";
import LogoCoffeels from "../Utils/LogoCoffeels";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import Shopcar from "../Utils/Shopcar";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { setLogout } from "../store/user";
import { setPersistencia } from "../store/user";
import { useSelector } from "react-redux";
import Pages from "../Common/Pages";
import OtherPages from "../Common/OtherPages";
import DropdownUsers from "../Common/DropdownUsers";


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const matches = useMediaQuery("(max-width:900px)");
  const user = useSelector((state) => state.user);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPersistencia());
  }, []);

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget);
  const handleOpenUserMenu = (e) => setAnchorElUser(e.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () =>  setAnchorElUser(null);
  
  const logout = () => {
  dispatch(setLogout());
  localStorage.removeItem("user");
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#795548" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoCoffeels
            className={matches ? "LogoCoffeCelu" : "LogoCoffePc"}
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Link to="/" style={{ textDecoration: "none" }}>
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
              <Pages handleOpenNavMenu={handleOpenNavMenu} />
              {user.id && (
                <OtherPages handleCloseNavMenu={handleCloseNavMenu} />
              )}
            </Menu>
          </Box>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
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
            <Pages handleOpenNavMenu={handleOpenNavMenu} />
            {user.id && <OtherPages handleCloseNavMenu={handleCloseNavMenu} handleClose={handleClose} handleClick={handleClick} anchorEl={anchorEl} open={open}/>}
      
          </Box>

          <Box display={"flex"}>
         
            <Link to="/shop">
           
              <Shopcar />
            </Link>
            <Search />
    
          </Box>
    {/* DROPDOWN LOGIN AND REGISTER */}
            <DropdownUsers
              handleOpenUserMenu={handleOpenUserMenu}
              anchorElUser={anchorElUser}
              handleCloseUserMenu={handleCloseUserMenu}
              logout={logout}
            />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
