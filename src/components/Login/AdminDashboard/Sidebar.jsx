import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from "@mui/icons-material/Star";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import "./sidebar.css"
import { Link, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";


const buttonsDash = [
  {
    buttonsName: "Home",
    routes: "/admin",
    icons: <HomeIcon />,
  },
  {
    buttonsName: "Users",
    routes: "/admin/users",
    icons: <PersonOutlineIcon />,
  },
  {
    buttonsName: "Products",
    routes: "/admin/products",
    icons: <StorefrontIcon />,
  },
  { buttonsName: "Featureds",
   routes: "/admin/featureds", 
   icons: <StarIcon /> },
  {
    buttonsName: "Bookings",
    routes: "/admin/bookings",
    icons: <CalendarTodayIcon />,
  },
];

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });
  const user = useSelector(state=> state.user)

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "left" ? "auto" : 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
        <ListItem >
          <AdminPanelSettingsIcon sx={{color:"green",fontSize:"30px"}}/>
          <ListItemText >ADMIN: {user.firstname} {user.lastname}</ListItemText>
        </ListItem>
        <Divider />
        
        {buttonsDash.map((buttons) => (
          <ListItem key={buttons.buttonsName} disablePadding>
            <Link to={buttons.routes} className="link-buttons-admin" >
              <ListItemButton >
                {buttons.icons}
                <ListItemText sx={{marginLeft:"10px"}} primary={buttons.buttonsName} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const hola = "dashboard"

  return (
  
    <div style={{height:"80px"}}>
      { [hola].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button sx={{color:"white",mt:"70px",}} onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor="left"
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment >
      ))}
    </div>
  );
}
