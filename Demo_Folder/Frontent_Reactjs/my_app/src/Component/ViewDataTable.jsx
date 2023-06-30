
import React from 'react';
import DataTable from "react-data-table-component";

export default function ViewDataTable() {

  const customStyles = {
    rows: {
      style: {
        minHeight: '68px', // override the row height
      },
    },

    headCells: {
      style: {
        paddingLeft: '184px', // override the cell padding for head cells
        paddingRight: '8px',
        borderStyle: 'solid',
        borderWidth: '1px',
        backgroundColor: 'lightgrey',
        fontWeight: 'bold'
      },
    },

    cells: {
      style: {
        paddingLeft: '184px', // override the cell padding for data cells
        paddingRight: '8px',
        color: 'light grey',
        borderStyle: 'solid',
        borderWidth: '1px',
        align: 'center',
        borderColor: 'lightblue'

      },
    },

  };

  const column = [
    {
      name: "First_Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last_Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
  ];


  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jone', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];


  return (
    <>

      <div className="dataTable">
        <DataTable className='mainTable' columns={column} data={rows} pagination
          highlightOnHover pointerOnHover customStyles={customStyles}></DataTable>
      </div>

    </>
  )
}
