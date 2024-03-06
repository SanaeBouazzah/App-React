import React from 'react'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import { Box, Button, Stack } from '@mui/material'
import { DownloadOutlined } from '@mui/icons-material'
import Header from '../../components/Header'
import { useTheme } from '@emotion/react'

export default function Dashboard() {
  const theme = useTheme();
  return (
    <div>
      <Stack direction={"row"} justifyContent={'space-between'}
      alignItems={'center'} marginBottom={'30px'}>
        <Header title={"Dashboard"} subtitle={"All Inforamtions Activated"} />
        <Box sx={{ textAlign: 'right' }}>
          <Button variant="contained" color='info'>
            <DownloadOutlined />
            Download Reports</Button>
        </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  )
}
