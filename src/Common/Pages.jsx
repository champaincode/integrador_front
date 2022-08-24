import React from 'react'
import StarIcon from "@mui/icons-material/Star";
import RoomIcon from "@mui/icons-material/Room";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link } from 'react-router-dom';
import { Button, MenuItem,Typography} from '@mui/material';


const Pages = ({handleCloseNavMenu}) => {
    const pages = [
        {
          buttonName: "Menu",
          routes: "/menu",
          icons: <MenuBookIcon sx={{ ml: "2px",fontSize:"22px",color:"white"}} />,
        },
        {
          buttonName: "Featured",
          routes: "/featured",
          icons: <StarIcon sx={{ color: "yellow", ml: "2px",fontSize:"22px" }} />,
        },
        {
          buttonName: "Location",
          routes: "/location",
          icons: <RoomIcon sx={{ ml: "2px",fontSize:"22px",color:"white" }} />,
        },
      ];
  return (<>
    {pages.map((page) => (
       <MenuItem key={page.buttonName} onClick={handleCloseNavMenu}>
       <Link to={page.routes} style={{ textDecoration: "none", display:"flex" }}>
         <Typography
           sx={{ color: "white", fontFamily: "Roboto"}}
        
         >
           {page.buttonName}
         
         </Typography>
         <Typography
           sx={{ color: "black", fontFamily: "Roboto"}}
        
         >{page.icons}      </Typography>
       </Link>
     </MenuItem>
      ))}
 </> )
}

export default Pages