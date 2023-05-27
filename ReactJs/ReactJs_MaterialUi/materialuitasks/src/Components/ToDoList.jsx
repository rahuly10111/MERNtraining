import * as React from "react";

import Box from "@mui/material/Box";
import { Typography, Grid, TextField, Button } from "@mui/material";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from '@mui/icons-material/Delete';

export default function ToDoList() {
    const [data, setadata] = useState("");
    const [newdata, setnewdata] = useState([]);

    const itemEvent = (event) => {
        setadata(event.target.value);
    };

    const listofItem = () => {
        setnewdata((prevValue) => {
            return [...prevValue, data];
        });
        setadata("");
    };

    return (
        <Grid container align="center" className="todostyle">
            <Box
                sx={{
                    //  bgcolor: "light-grey",
                    boxShadow: 12,
                    width: "100%",
                    height: "80%",
                    // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                    // color: (theme) =>
                    //     theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                    p: 1,
                    m: 1,
                    borderRadius: 2,
                    textAlign: "center",
                    fontSize: "0.875rem",
                    fontWeight: "700",
                }}
            >
                <Typography gutterBottom variant="h4">
                    {" "}
                    To Do List{" "}
                </Typography>
                <TextField
                    label="Standard warning"
                    variant="standard"
                    color="warning"
                    focused
                    onChange={itemEvent}
                    value={data}
                />
                <Button onClick={listofItem}>
                    <AddCircleOutlineIcon />
                </Button>

                <br></br>

                <ul>
                    {newdata.map((val, index) => {
                        return (
                            <>
                                <li> <span> <DeleteIcon /> </span>{val}</li>
                            </>
                        );
                    })}
                </ul>
                {/* 
                <List
                    aria-labelledby="decorated-list-demo"
                    sx={{ '--ListItemDecorator-size': '32px' }}
                >
                    <ListItem>
                        <ListItemDecorator>🧅</ListItemDecorator> 1 red onion
                    </ListItem>
                </List> */}
            </Box>
        </Grid>
    );
}
