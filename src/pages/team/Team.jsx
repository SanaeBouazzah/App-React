import { DataGrid } from '@mui/x-data-grid';
import { rows } from './data';
import { useTheme } from '@emotion/react';
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined
} from '@mui/icons-material';
import Header from "../../components/Header";


export default function Team() {
  const theme = useTheme();

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'Name', headerName: 'Name', flex: 1 },
    { field: 'Email', headerName: 'Email', flex: 1 },
    { field: 'Age', headerName: 'Age', flex: 1 },
    { field: 'Phone', headerName: 'Phone', flex: 1 },
    {
      field: 'access', headerName: 'Access', flex: 1, renderCell: ({ row: { access } }) => {
        return (
          <Box sx={{
            bgcolor: theme.palette.secondary.dark,
            p: "5px", display: "flex",
            borderRadius: "3px", textAlign: "center",
            justifyContent: "space-evenly", gap: "2px"
          }}>
            {access === "admin" && <AdminPanelSettingsOutlined sx={{ color: "#fff" }} fontSize="small" />}
            {access === "manager" && <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />}
            {access === "user" && <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />}
            <Typography variant="body1" sx={{ color: "#fff", fontSize: "13px" }}>{access}</Typography>
          </Box>
        )
      }
    },
  ];

  return (
    <div>
      <Header title={"Team"} subtitle={"Managing The Team Members"}/>
      <div style={{ height: 600, width: '100%', margin: "auto", marginTop: "30px" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}
