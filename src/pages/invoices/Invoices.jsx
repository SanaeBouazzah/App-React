import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { columns, rows } from './data'
import Header from "../../components/Header";
import React from 'react'


export default function Invoices() {
  return (
    <div>
      <Header title={"Invoices"} subtitle={"List of Invoice Balances"} />
      <Box style={{ height: 650, width: '98%', margin: "auto", marginTop:"30px" }}>
        <DataGrid checkboxSelection slots={{ toolbar: GridToolbar, }} rows={rows} columns={columns} />
      </Box>
    </div>
  )
}
