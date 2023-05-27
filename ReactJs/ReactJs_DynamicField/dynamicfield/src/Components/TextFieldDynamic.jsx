import React from 'react'
import { TextField, Button, Grid } from "@mui/material";
import PostAddIcon from '@mui/icons-material/PostAdd';
import SaveIcon from '@mui/icons-material/Save';
import { useState } from 'react';
import UserDataTable from './UserDataTable';
import Tooltip from '@mui/material/Tooltip';


export default function TextFieldDynamic() {
    const [count, setcount] = useState([]);
    const [userdata, setuserdata] = useState();

    function ChangeValue(e, index) {
        const inputData = count
        inputData[index] = e.target.value;
        setcount(inputData)
    }

    const GetUserData = () => {
        console.log("count data", count)
        setuserdata(count)

    }


    console.log("Input Data", count)
    return (
        <>

            <Grid item xs={4}>
                {count.map((val, index) => <TextField id="filled-basic" sx={{ m: 2 }} label={" Input Field " + (index + 1)} placeholder='Enter The Input' variant="filled" onChange={e => ChangeValue(e, index)} />)}
            </Grid>
            <br />
            <Grid item xs={8}>
                <Tooltip title="Add Field" arrow>
                    <Button variant="contained" sx={{ m: 2 }} endIcon={<PostAddIcon />} onClick={() => setcount([...count, ""])} > Add Field </Button>
                </Tooltip>
                <Tooltip title="Show Data In Table" arrow>
                    <Button variant="contained" sx={{ m: 2 }} endIcon={<SaveIcon />} onClick={GetUserData}> Save Data </Button>
                </Tooltip>
            </Grid>
            <br />
            <UserDataTable data={userdata}></UserDataTable>



        </>
    )
}
