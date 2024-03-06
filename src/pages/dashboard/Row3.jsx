import { Box, Paper, Stack, Typography } from '@mui/material'
import Pie from '../pie/Pie'
import React from 'react'
import Geography from '../geopgraphy/Geography'
import BarChart from '../bar/BarChart'
import { useTheme } from '@emotion/react'

export default function Row3() {
  const theme = useTheme();
  return (
    <Stack direction={'row'} mt={3} flexWrap={'wrap'} gap={2} alignItems={'center'}>
      <Paper sx={{flexGrow: 1, minWidth:'300px', width: '28%' }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: '30px 30px 0 30px' }}
          variant='h6' fontWeight={600}>
          Campain
        </Typography>
        <Pie isDashboard={true} />
        <Typography sx={{ mt: '15px' }}
          variant='h6' fontWeight={600} align='center'>
          %48,352 revenue generated
        </Typography>
        <Typography px={0.7} pb={3}
          variant='body2' align='center'>
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper sx={{flexGrow: 1, minWidth:'300px', width: '33%' }}>
       <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: '30px 30px 0 30px' }}
          variant='h6' fontWeight={600}>
          Sales Quantity
        </Typography>
        <BarChart isDashboard={true} />
      </Paper>
      <Paper sx={{flexGrow: 1, minWidth:'300px', width: '33%' }}>
        <Geography isDashboard={true} />
      </Paper>
    </Stack>
  )
}
