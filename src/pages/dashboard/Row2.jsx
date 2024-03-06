import { useTheme } from '@emotion/react'
import { Box, IconButton, Paper, Stack, Typography } from '@mui/material'
import Line from '../line/Line';
import React from 'react'
import { DownloadOutlined } from '@mui/icons-material';
import { mockTransactions } from './data';

export default function Row2() {
  const theme = useTheme();
  return (
    <div>
      <Stack direction={'row'} flexWrap={'wrap'}
        sx={{
          display: "flex",
          justifyContent: 'space-between', mt: 2,
          gap: 1
        }}>
        <Paper sx={{ maxWidth: 900, flexGrow: 1 }}>
          <Stack direction={'row'} flexWrap={'wrap'}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Box>
              <Typography
                color={theme.palette.secondary.main}
                fontWeight={'bold'} mb={1} mt={1}
                ml={4}
                variant='h6'>
                Revenue Generated
              </Typography>
              <Typography variant='body2' ml={4}>
                $59,342.42
              </Typography>
            </Box>
            <Box>
              <IconButton sx={{ mr: 3 }}>
                <DownloadOutlined />
              </IconButton>
            </Box>
          </Stack>
          <Line isDashboard={true} />
        </Paper>


        <Box sx={{
          flexGrow: 1, maxHeight: "480px",
          minWidth: '200px', overflow: 'auto'
        }}>
          <Paper>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={'bold'} p={1.2} variant='h6'>
              Recent Transactions
            </Typography>
          </Paper>
          {mockTransactions.map((item) => {
            return (
              <Paper sx={{
                mt: 1, display: "flex",
                justifyContent: "space-between", alignItems: 'center'
              }}>
                <Box p={1.2}>
                  <Typography variant='body1' fontWeight={600}>{item.txtId}</Typography>
                  <Typography variant='body1'>{item.user}</Typography>
                </Box>
                <Typography variant='body1' fontWeight={600}>{item.date}</Typography>
                <Typography variant='body1'
                  borderRadius={1.4} p={1}
                  bgcolor={theme.palette.error.main}
                  color={theme.palette.getContrastText(theme.palette.error.main)}>
                  {item.cost}</Typography>
              </Paper>
            )
          }
          )}
        </Box>

      </Stack>
    </div>
  )
}
