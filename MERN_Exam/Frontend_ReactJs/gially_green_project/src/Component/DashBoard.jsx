import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DataGrid } from '@mui/x-data-grid';

export default function DashBoard() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },

  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },

  ];


  return (
    <>

      <div className='p-4'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
            <DatePicker label={'"month" and "year"'} views={['month', 'year']} />
          </DemoContainer>
        </LocalizationProvider>

      </div>

      <>


        const rows = [
        {state?.usersData?.map((data, index) => (
          { id: index, lastName: data, firstName: data, age: data }
          // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
          // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
            ))}
        ]



      </>





      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
        />
      </div>


    </>
  )
}
