import React, { useEffect } from "react";
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
import Search from "./Search";
import StarIcon from "@mui/icons-material/Star";
import RoomIcon from "@mui/icons-material/Room";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useDispatch } from "react-redux";
import { setLogout } from "../store/user";
import { setPersistencia } from "../store/user";
import { useSelector } from "react-redux";
import { Divider } from "@mui/material";
import TemporaryDrawer from "./Login/AdminDashboard/Sidebar"
import axios from "axios";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const matches = useMediaQuery("(max-width:900px)");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const pages = [
    {
      buttonName: "Menu",
      routes: "/menu",
      icons: <MenuBookIcon sx={{ ml: "2px" }} />,
    },
    { 
      buttonName: "Featured",
      routes: "/featured",
      icons: <StarIcon sx={{ color: "yellow", ml: "2px" }} />,
    },
    {
      buttonName: "Location",
      routes: "/location",
      icons: <RoomIcon sx={{ ml: "2px" }} />,
    },
   
  

  ];




  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    dispatch(setPersistencia());
  }, []);

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
  const logout = () => {
    axios.post("http://localhost:5000/api/users/logout", {}).then((res) => {
      dispatch(setLogout(res.data));
    });
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
            
             
              {pages.map((page) => (
                <MenuItem key={page.buttonName} onClick={handleCloseNavMenu}>
                  <Link to={page.routes} style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{ color: "black", fontFamily: "Roboto" }}
                      textAlign="center"
                    >
                      {page.buttonName} 
                    </Typography>
                  </Link>
                </MenuItem>
                
              ))}
              {user.id && user.isAdmin && <Link to="/favorites" style={{ textDecoration: "none" }}>
            <Button
                  key="favorites"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 1.6, color: "white", display: "block" }}
                >
            favorites <FavoriteIcon sx={{ color: "red", ml: "2px" }} />
                </Button>
              </Link>}
            {user.id && <Link to="/bookings" style={{ textDecoration: "none" }}>
            <Button
                  key="bookings"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 1.6, color: "white", display: "block" }}
                >
             bookings<CalendarTodayIcon sx={{ ml: "2px" }} />
                </Button>
              </Link>}
            </Menu>
          </Box>
          <Link to="/" style={{ textDecoration: "none",color:"white" }}>
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
                  key={page.buttonName}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 1.6, color: "white", display: "block" }}
                >
                  {page.buttonName}
                  {page.icons}
                </Button>
              </Link>
            ))}
                  {user.id && <Link to="/favorites" style={{ textDecoration: "none" }}>
            <Button
                  key="favorites"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 1.6, color: "white", display: "block" }}
                >
            favorites <FavoriteIcon sx={{ color: "red", ml: "2px" }} />
                </Button>
              </Link>}
            {user.id && <Link to="/bookings" style={{ textDecoration: "none" }}>
            <Button
                  key="bookings"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 1.6, color: "white", display: "block" }}
                >
             bookings<CalendarTodayIcon sx={{ ml: "2px" }} />
                </Button>
              </Link>}
        


            {user.isAdmin && <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{color:"green"}}
            >Dashboard</Button> }  
               <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       <Link to="/admin/users"><MenuItem onClick={handleClose}>Users</MenuItem></Link> 
       <Link to="/admin/products"><MenuItem onClick={handleClose}>Products</MenuItem></Link> 
 
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
          </Box>
          
          <Box>
            <Link to="/shop">
              <Shopcar />
            </Link>
          </Box>
          <Search />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGv0ZIrLidHrXmxdSY38qwW3_FyQZhJo-sFQ&usqp=CAU"
                />
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
              {!user.id ? (
                <>
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
                </>
              ) : (
                <>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link
                      to="/profile"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography textAlign="center">
                        {user.firstname} {user.lastname}
                      </Typography>
                    </Link>
                  </MenuItem>

                  <MenuItem onClick={handleCloseUserMenu}>
                
                      {user.isAdmin && (
                        <Typography textAlign="center" sx={{ color: "green" }}>
                          Admin
                        </Typography>
                      )}
                 
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link
                      to="/login"
                      onClick={logout}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography textAlign="center">Logout</Typography>
                    </Link>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
