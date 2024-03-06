import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useTheme } from '@emotion/react';
import { Box, Typography } from "@mui/material";
import React, { useState } from 'react'
import Header from "../../components/Header";


const rows = [
  { id: 1, Register: 569388904, Name: 'World', Email: "example@gmail.com", Age: '13', Phone: 212894849, Address: '54 Lot HKHEI', City: 'London', Zip: '98999' },
  { id: 3, Register: 569388904, Name: 'is Amazing', Email: "example@gmail.com", Age: '43', Phone: 212894849, Address: '54 Lot HKHEI', City: 'London', Zip: '98999' },
  { id: 4, Register: 569388904, Name: 'is Awesome', Email: "example@gmail.com", Age: '14', Phone: 212894849, Address: '54 Lot HKHEI', City: 'London', Zip: '98999' },
  { id: 2, Register: 569388904, Name: 'is Amazing', Email: "example@gmail.com", Age: '28', Phone: 212894849, Address: '54 Lot HKHEI', City: 'London', Zip: '98999' },
  { id: 5, Register: 569388904, Name: 'is Amazing', Email: "example@gmail.com", Age: '25', Phone: 212894849, Address: '54 Lot HKHEI', City: 'London', Zip: '98999' },
  { id: 6, Register: 569388904, Name: 'is Amazing', Email: "example@gmail.com", Age: '50', Phone: 212894849, Address: '54 Lot HKHEI', City: 'London', Zip: '98999' }
];
const columns = [
  { field: 'id', headerName: 'ID', width: 33 },
  { field: 'Register', headerName: 'Register ID', flex: 1 },
  { field: 'Name', headerName: 'Name' },
  { field: 'Email', headerName: 'Email', flex: 1 },
  { field: 'Age', headerName: 'Age', width: 33 },
  { field: 'Phone', headerName: 'Phone', flex: 1 },
  { field: 'Address', headerName: 'Address', flex: 1 },
  { field: 'City', headerName: 'City', flex: 1 },
  { field: 'Zip', headerName: 'Zip Code', flex: 1 },
];
export default function Contacts() {
  const theme = useTheme();
  const [mohamed, setMohamed] = useState(0);
  return (
    <div>
      <Header title={"Contacts"} subtitle={"List of Contacts for Future Reference"}/>
      <Box style={{ height: 650, width: '98%', margin: "auto", marginTop: "30px" }}>
        <DataGrid slots={{ toolbar: GridToolbar, }} rows={rows} columns={columns} />
      </Box>
    </div>
  )
}
