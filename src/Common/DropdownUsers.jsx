import { Menu,MenuItem,Typography,Box,Tooltip,IconButton,Avatar } from "@mui/material"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DropdownUsers = ({anchorElUser,handleCloseUserMenu,logout,handleOpenUserMenu}) => {
    const user = useSelector((state) => state.user);
  return (
    <Box sx={{ flexGrow: 0 }}>
    <Tooltip title="Profile">
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

        <MenuItem onClick={handleCloseUserMenu}></MenuItem>
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
  )
}

export default DropdownUsers