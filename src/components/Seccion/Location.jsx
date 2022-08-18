import Divider from "@mui/material/Divider";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Box} from "@mui/material";
import Maps from "./Maps";

const Location = () => {
  return (
    <>
      <Container sx={{ marginTop: "100px" }}>
        <Divider variant="middle" />
          <Typography
            sx={{
              padding: "20px",
              fontFamily: "Lobster",
              fontSize: "25px",
              color: "white",
              textAlign: "center",
            }}
          >
            Location
          </Typography>
          <Divider variant="middle" />
          <Box sx={{display:"flex",justifyContent:"center"}}>
          <Box sx={{width:"50vw", marginTop:"20px"}}>
          <Maps/>
          </Box>
          </Box>
      
      </Container>
    </>
  );
};

export default Location;
