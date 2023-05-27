import React from 'react'
import { useDispatch } from 'react-redux';
import { GetData, GetUserData, } from '../Redux/Action/DataAction';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import FolderSharedSharpIcon from '@mui/icons-material/FolderSharedSharp';
import ApiDataTable from './ApiDataTable';
import UserDataTable from './UserDataTable';


export default function UserData() {

    const dispatch = useDispatch();
    return (
        <>
            <Grid item xs={8}>
                <Button variant="contained" sx={{ m: 4 }} endIcon={<FolderSharedSharpIcon />} onClick={() => {
                    dispatch(GetUserData());
                }}>Get User Data</Button>

                <Button variant="contained" sx={{ m: 4 }} endIcon={<AdsClickIcon />} onClick={() => {
                    dispatch(GetData());
                }}>Get Data</Button>

            </Grid>

            <ApiDataTable />

            <UserDataTable />
        </>
    )
}
