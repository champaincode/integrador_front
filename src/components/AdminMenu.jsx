import React from "react";
import { useSelector } from "react-redux";
import { Button,Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

export default  function AdminMenu(){
  const user = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      //DESDE ACA
      {user.isAdmin && (
        <Button
          id="basic-button"
          aria-controls={open.props ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open.props ? "true" : undefined}
          onClick={handleClick.props}
          sx={{ color: "#03fc35" }}
        >
          Admin
        </Button>
      )}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl.props}
        open={open.props}
        onClose={handleClose.props}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to="/admin/users">
          <MenuItem onClick={handleClose.props}>Users</MenuItem>
        </Link>
        <Link to="/admin/products">
          <MenuItem onClick={handleClose.props}>Products</MenuItem>
        </Link>
        //HASTA ACA
        <MenuItem onClick={handleClose.props}>Logout</MenuItem>
      </Menu>
    </>
  );
};
