import React from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import LogoCoffeels from "../Utils/LogoCoffeels";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/api/users/login", data)
      .then((res) => {
        navigate("/")
        return res.data;
      })
     
      .catch((error) => {
        alert("Usuario o contraseña no encontrado");
      });
  };

  return (
    <Container className="login_and_register_container" fixed maxWidth="xs">
      <h2
        style={{
          fontFamily: "Lobster",
          fontWeight: 200,
          fontSize: 35,
          color: "#000000",
          marginRight: "2",
        }}
      >
        Sign in to your account <LogoCoffeels className="LogoCoffePc" />
      </h2>

      <form className="form-column" onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          alignItems="center"
        >
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            {...register("email", { required: true })}
            error={!!errors?.email}
            helperText={!!errors?.email ? errors.email.message : null}
            fullWidth
          />
          {errors.email?.type === "pattern" ? (
            <p className="p_color_error">*Invalid format*</p>
          ) : (
            errors.email && <p className="p_color_error">*Email Require*</p>
          )}

          <TextField
            id="standard-basic 
        "
            label="Password"
            type="password"
            variant="standard"
            {...register("password", { required: true })}
            error={!!errors?.password}
            helperText={!!errors?.password ? errors.password.message : null}
            fullWidth
          />
          {errors.password && <span>*Password Require*</span>}
          <hr />
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            className="Button_Login_Register"
            style={{
              color: "black",
              borderColor: "black",
              fontFamily: "Roboto",
              fontWeight: "bold",
              borderRadius: "200px",
              display: "flex",
              justifyContent: "center !important",
            }}
            type="submit"
            variant="text"
            size="medium"
            color="error"
          >
            login
          </Button>
        </Box>
      </form>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <p
          style={{
            color: "black",
            borderColor: "black",
            fontFamily: "Roboto",
            fontWeight: "bold",
          }}
        >
          Don't have an account?{" "}
          <Link style={{ textDecoration: "none" }} to="/register">
            Create account
          </Link>
        </p>
      </Box>
    </Container>
  );
};

export default Login;
