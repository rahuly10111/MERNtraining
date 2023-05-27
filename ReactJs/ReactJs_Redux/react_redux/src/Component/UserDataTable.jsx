import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, Typography } from '@mui/material';
import React from "react";
import { useSelector } from 'react-redux';

export default function UserDataTable() {
    const state = useSelector((state) => state.userData)
    console.log("user data table state value", state)
    console.log("User Data Table Value ", state.userData)
    return (
        <>
            {state?.userData?.map((data, index) =>
                <Card key={index} sx={{ maxWidth: 345, m: 4, mx: 'auto', boxShadow: 12, border: 4, borderColor: 'primary.main', borderRadius: '16px' }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="h4" component="h1"> User {index + 1} Details </Typography>
                            <p><strong>   ID : </strong>{data?.id}  </p>
                            <p><strong>   Name :  </strong>{data?.name}</p>
                            <p> <strong>   Gender :  </strong>{data?.gender}  </p>
                            <p>  <strong>   Age :  </strong>{data?.age}</p>
                            <p>  <strong>   No Of Posts :  </strong>{data?._count?.post}</p>
                            <span> <strong>  Post :  </strong>{data?.post?.map((postdata, index) => <p key={index}> <b> Post no {index + 1} -  </b>  {postdata.title}</p>)} </span>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )}



        </>

    )


}