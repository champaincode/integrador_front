import Divider from "@mui/material/Divider";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Box} from "@mui/material";
import Maps from "./Maps";
import SeccionProduct from "../../Common/SeccionProduct";
const Location = () => {
  return (
    <>
      <Container sx={{ marginTop: "10px" }}>
      <SeccionProduct text={"Location"} />

          <Box sx={{display:"flex", justifyContent:"center", marginTop:"10px"}}>
          <Maps/>
          </Box>
     
      
      </Container>
    </>
  );
};

export default Location;

