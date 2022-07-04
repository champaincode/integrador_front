import React from "react";
import {  useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import LogoCoffeels from "../../Utils/LogoCoffeels"
import axios from "axios"
import { useNavigate } from "react-router-dom";


const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()


const onSubmit = (data,e) => {
    e.preventDefault()
    axios.post("http://localhost:5000/api/users/register",data )
      .then((res) => res.data);
      alert("usuario creado")
      navigate("/login")
    };
 

  return (
    <Container className="login_and_register_container" maxWidth="xs">
     <h2 style={{ fontFamily: "Lobster", fontWeight: 200, fontSize: 35, color:"#000000" }}>
     Create account here <LogoCoffeels className="LogoCoffePc"/>
      </h2>
       
      <form className="form-column" onSubmit={handleSubmit(onSubmit)}>
       
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            id="standard-basic"
            label="First name"
            variant="standard"
            fullWidth
            {...register("firstname")}
          />
 
          <TextField
            id="standard-basic"
            label="Last name"
            variant="standard"
            fullWidth
            {...register("lastname")}
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            {...register("email", {
               required: true,
              pattern:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
              })}
            error={!!errors?.email}
            helperText={!!errors?.email ? errors.email.message : null}
            fullWidth
          />
          {
          errors.email?.type==='pattern'? <p className="p_color_error">*Invalid format*</p>: errors.email && <p className="p_color_error">*Email Require*</p>
          }
 

          <TextField
            id="standard-basic"
            label="Password"
            type="password"
            variant="standard"
            {...register("password", { required: true })}
            error={!!errors?.password}
            helperText={!!errors?.password ? errors.password.message : null}
            fullWidth
          />
             {errors.password && <p className="p_color_error" >*Password Require*</p>}
          <hr />
        </Grid>
        <Box sx={{display:"flex", justifyContent:"center"}}> 
        <Button className="Button_Login_Register"
          style={{
            color:"black",
            borderColor:"black",
            fontFamily: "Roboto",
            fontWeight: "bold",
            borderRadius:"200px",
          
             }}
          type="submit"
          variant="text"
          size="medium">
          Register
        </Button>
        </Box>

      

      </form>
   
    </Container>
  );
};

export default Register;
