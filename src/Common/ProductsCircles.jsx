import { Box, Container, Grid, Button, Typography,Paper } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const ProductsCircles = ({circle,handleOpen}) => {
  return (
<Box sx={{ marginTop: "10px" }}>
    <Container maxWidth="lg">
      <Grid
        container
        spacing={{ xs: 8, md: 5 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {circle.map((circles, index) => (
          <Grid item xs={2} sm={4} md={2} key={index}>
            <Button onClick={() => handleOpen(circles.id)}>
              <Item
                sx={{
                  width: "100px",
                  borderRadius: "100px",
                  height: "100px",
                  backgroundColor: "#795548",
                  padding: { xs: 2, md: 2 },
                  "&:hover": { backgroundColor: "#FFCC96" },
                }}
              >
                <img className="img_adptable" src={circles.image} />
              </Item>
            </Button>
            <h2 style={{ marginLeft: "10px" }}> {circles.tittle} </h2>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
  )
}

export default ProductsCircles