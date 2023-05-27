import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 18,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
}));

export default function UserDataTable(props) {
    console.log("Table Data ", props.data)

    return (
        <Paper sx={{ overflow: 'hidden' }}>
            <TableContainer >
                <Table stickyHeader className='tablestyle' sx={{ border: 1, borderRadius: 4, borderColor: 'secondary.main' }}>

                    <TableHead>
                        <TableRow>
                            <StyledTableCell> Input Field   </StyledTableCell>
                            <StyledTableCell>  Input Value </StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody sx={{ border: 1 }}>
                        {props.data?.map((row, index) => (
                            <>
                                <StyledTableRow key={index}>
                                    <StyledTableCell>{"Text Field " + (index + 1)}</StyledTableCell>
                                    <StyledTableCell scope="row">
                                        {row}
                                    </StyledTableCell>
                                </StyledTableRow>
                            </>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>

    );
}























