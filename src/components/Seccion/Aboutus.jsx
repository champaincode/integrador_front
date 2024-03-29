import Divider from "@mui/material/Divider";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import SeccionProduct from "../../Common/SeccionProduct";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Aboutus = () => {
  return (
    <>
      <Container sx={{ marginTop: "10px" }}>
        <SeccionProduct text={"About us"} />

        <Box sx={{ marginTop: "10px" }}>
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row-reverse",
            }}
          >
            <Box sx={{ width: "35%", height: "100%" }}>
              {" "}
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
                width={"100%"}
                height={"500px"}
              />
            </Box>
            <Box sx={{ width: "65%", height: "100%" }}>
              <Typography
                sx={{
                  fontFamily: "Lobster",
                  fontSize: "40px",
                  color: "white",
                  textAlign: "center",
                }}
                variant="h1"
              >
                Our Heritage
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "20px",
                  color: "black",
                  textAlign: "center",
                }}
                variant="p"
              >
                Our story begins in 1971 along the cobblestone streets of
                Seattle’s historic Pike Place Market. It was here where
                Starbucks opened its first store, offering fresh-roasted coffee
                beans, tea and spices from around the world for our customers to
                take home. Our name was inspired by the classic tale,
                “Moby-Dick,” evoking the seafaring tradition of the early coffee
                traders. Ten years later, a young New Yorker named Howard
                Schultz would walk through these doors and become captivated
                with Starbucks coffee from his first sip. After joining the
                company in 1982, a different cobblestone road would lead him to
                another discovery. It was on a trip to Milan in 1983 that Howard
                first experienced Italy’s coffeehouses, and he returned to
                Seattle inspired to bring the warmth and artistry of its coffee
                culture to Starbucks. By 1987, we swapped our brown aprons for
                green ones and embarked on our next chapter as a coffeehouse.
                Starbucks would soon expand to Chicago and Vancouver, Canada and
                then on to California, Washington, D.C. and New York. By 1996,
                we would cross the Pacific to open our first store in Japan,
                followed by Europe in 1998 and China in 1999. Over the next two
                decades, we would grow to welcome millions of customers each
                week and become a part of the fabric of tens of thousands of
                neighborhoods all around the world. In everything we do, we are
                always dedicated to Our Mission: to inspire and nurture the
                human spirit – one person, one cup, and one neighborhood at a
                time.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Container>
    </>
  );
};

export default Aboutus;
