import {useEffect,useState} from 'react'
import { Container, Divider,Typography, Grid, Button,Box } from "@mui/material";
import { useSelector,useDispatch } from 'react-redux'
import {useParams } from "react-router-dom";
import { setSearch } from "../store/search";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import axios from "axios"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 550,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const ProductSearch = () => {
  const matchProduct = useSelector((state)=>state.setSearch)
  const [open, setOpen] = useState(false);
  const [drinkDetail, setDrinkDetail] = useState({});
  const {tittle} = useParams()
  const dispatch= useDispatch()
  useEffect(() => {
    dispatch(setSearch(tittle))
  }, [tittle])
 
  const handleOpen = (id) => {
    axios.get(`http://localhost:5000/api/producto/drinks/${id}`).then((res) => {
      setDrinkDetail(res.data);
      setOpen(true);
    });
  };



  return (
    <> 
    <Container sx={{ marginTop: "100px" }}>
          <Container>
          
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
            Search
          </Typography>
              <Divider variant="middle" /> 
         

              <Box sx={{ marginTop: "10px" }}>
          <Container maxWidth="lg">
            <Grid
              container
              spacing={{ xs: 8, md: 5 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {matchProduct.map((drink, index) => (
                <Grid item xs={2} sm={4} md={2} key={index}>
                  <Button onClick={() => handleOpen(drink.id)}>
                    <Item
                      sx={{
                        width: "90px",
                        borderRadius: "100px",
                        height: "90px",
                        backgroundColor: "#795548",
                        "&:hover": { backgroundColor: "#FFCC96" },
                      }}
                    >
                      <img className="img_adptable" src={drink.image} />
                    </Item>
                  </Button>

                  <Typography
                    id="modal-modal-title"
                    variant="h5"
                    component="h2"
                    sx={{ fontFamily: "lobster", marginLeft: "15px" }}
                  >
                    {drink.tittle}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
    
          
          </Container>
          </Container>
      </>
  )
}

export default ProductSearch