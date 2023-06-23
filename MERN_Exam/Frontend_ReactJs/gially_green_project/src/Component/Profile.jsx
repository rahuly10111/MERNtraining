import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetUsersIdData } from '../Redux/Action/UserAction';
import Button from '@mui/material/Button';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import Loader from './Loader';
import '../../src/Profile.css';

export default function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state?.profileDetails);
    useEffect(() => {
        dispatch(GetUsersIdData());
    }, []);

    return (
        <>
            {state?.loading ? (
                <Loader></Loader>
            ) : (



                <>
                    <h2 style={{ textAlign: "center", marginTop: "60px" }}>User Profile Card</h2>
                    <div className="card">
                        <div class="demo-wrap">
                            <div class="demo-content">
                                {state?.usersData?.map((data, index) => (
                                    <div key={index}>
                                        <div> <b>  Name :   </b>{data.name} </div>
                                        <br />
                                        <div> <b>  Email :   </b>{data.email} </div>
                                        <br />
                                        <div> <b>  Mobile :   </b>{data.mobile} </div>

                                        <div className=' profileButton'>
                                            <Button variant="contained" size="small" color="success" endIcon={<HomeIcon />} onClick={() => navigate("/dasboard")} > DashBoard </Button> &nbsp;
                                            <Button variant="contained" size="small" color="info" endIcon={<ModeEditOutlineIcon />} onClick={() => navigate(`/editprofile/${data.id}`)
                                            }  > Edit Profile </Button>
                                        </div>

                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
