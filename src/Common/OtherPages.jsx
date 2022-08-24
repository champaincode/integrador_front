import { CalendarToday, Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { MenuItem, Typography, Button, Menu } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useSelector } from "react-redux";

//pages with user login
const OtherPages = ({
  handleCloseNavMenu,
  handleClose,
  handleClick,
  anchorEl,
  open,
}) => {
  const user = useSelector((state) => state.user);
  const pagesWithlogin = [
    {
      buttonName: "Favorite",
      routes: "/favorites",
      icons: <Favorite sx={{ ml: "2px", fontSize: "22px", color: "white" }} />,
    },
    {
      buttonName: "Bookings",
      routes: "/bookings",
      icons: (
        <CalendarToday sx={{ ml: "2px", fontSize: "22px", color: "white" }} />
      ),
    },
  ];

  return (
    <>
      {pagesWithlogin.map((page, i) => (
        <MenuItem key={page.buttonName} onClick={handleCloseNavMenu}>
          <Link
            to={page.routes}
            style={{ textDecoration: "none", display: "flex" }}
          >
            <Typography
              sx={{ color: "white", fontFamily: "Roboto" }}
              textAlign="center"
            >
              {page.buttonName}
            </Typography>
            <Typography
              sx={{ color: "black", fontFamily: "Roboto" }}
              textAlign="center"
            >
              {page.icons}{" "}
            </Typography>
          </Link>
        </MenuItem>
      ))}
      {user.isAdmin && (
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ color: "#03fc35" }}
        >
          Admin <AdminPanelSettingsIcon sx={{ fontSize: "22px", mb: "5px" }} />
        </Button>
      )}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to="/admin/users" className="link-admin-menu">
          <MenuItem onClick={handleClose}>Users</MenuItem>
        </Link>
        <Link to="/admin/products" className="link-admin-menu">
          <MenuItem onClick={handleClose}>Products</MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default OtherPages;
