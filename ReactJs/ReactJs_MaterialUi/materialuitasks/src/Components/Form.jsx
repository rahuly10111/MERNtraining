import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import UserDataTable from "./UserDataTable";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function Form() {
  const [state, setstate] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneno: "",
    message: "",
  });

  const [userdata, setuserdata] = useState();

  function ChangeFormValue(e) {
    setstate({ ...state, [e.target.name]: e.target.value });
  }

  function GetUserData() {
    setuserdata((formdata) => {
      if (formdata) {
        return [...formdata, state];
      } else {
        return [state];
      }
    });
  }

  return (
    <>
      <Typography variant="h3" align="center">
        Form Using Material UI
      </Typography>

      <Card className="formstyle" sx={{ boxShadow: 9, bgcolor: "info.main" }}>
        <CardContent>
          <Typography gutterBottom variant="h4" align="center">
            {" "}
            User Form
          </Typography>

          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  variant="outlined"
                  label="First Name"
                  placeholder="Enter First Name"
                  fullWidth
                  required
                  value={state.firstname}
                  name="firstname"
                  onChange={ChangeFormValue}
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                ></TextField>
              </Grid>

              <Grid xs={12} sm={6} item>
                <TextField
                  variant="outlined"
                  label="Last Name"
                  placeholder="Enter Last Name"
                  fullWidth
                  required
                  value={state.lastname}
                  name="lastname"
                  onChange={ChangeFormValue}
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  variant="outlined"
                  label="Email"
                  placeholder="Enter Email"
                  fullWidth
                  required
                  value={state.email}
                  name="email"
                  onChange={ChangeFormValue}
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  type="number"
                  variant="outlined"
                  label="Phone Number "
                  placeholder="Enter Phone Number"
                  fullWidth
                  required
                  value={state.phoneno}
                  name="phoneno"
                  onChange={ChangeFormValue}
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  multiline
                  rows={4}
                  variant="outlined"
                  label="Message"
                  placeholder="Type Your Message "
                  fullWidth
                  required
                  value={state.message}
                  name="message"
                  onChange={ChangeFormValue}
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <Button
                  type="button"
                  variant="contained"
                  color="success"
                  fullWidth
                  onClick={GetUserData}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      <br />

      <UserDataTable data={userdata}></UserDataTable>
    </>
  );
}
