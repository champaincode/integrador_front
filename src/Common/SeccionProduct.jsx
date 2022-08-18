import { Container,Typography,Divider} from "@mui/material"

const SeccionProduct = ({text}) => {
  return (
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
    >{text}
    </Typography>
    <Divider variant="middle" />
  </Container>
  )
}

export default SeccionProduct