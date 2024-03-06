import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import React from 'react'

export default function NotFound() {
  const theme = useTheme();
  return (
    <div>
      <Box textAlign={'center'} marginTop={4}>
        <Typography color={theme.palette.secondary.main} 
        variant="h4">404 Not Found Go Back To Home Page</Typography>
        <br />
        Please Try again later
      </Box>
    </div>
  )
}
