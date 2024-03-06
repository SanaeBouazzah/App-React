import React from 'react'
import { Box, Paper, Stack, Typography } from '@mui/material'
import { ResponsivePie } from '@nivo/pie'

export default function Card({ icon, title, scheme, subTitle, data, increase }) {
  return (
    <div>
      <Paper sx={{
        minWidth: "333px", p: 2.5,
        display: 'flex', justifyContent: 'space-between', flexGrow:1, alignItems: 'center'
      }}>
        <Stack direction={'column'} gap={2}>
          {icon}
          <Typography>{title}</Typography>
          <Typography>{subTitle}</Typography>
        </Stack>
        <Stack direction={'column'} gap={2}
        alignItems={'center'}>
          <Box height={"80px"} width={'80px'}
          >
            <ResponsivePie
              data={data}
              margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={1}
              activeOuterRadiusOffset={8}
              colors={{ scheme: scheme }}
              borderWidth={1}
              borderColor={{
                from: 'color',
                modifiers: [
                  [
                    'darker',
                    0.2
                  ]
                ]
              }}
              enableArcLabels={false}
              enableArcLinkLabels={false}
              defs={[
                {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  size: 4,
                  padding: 1,
                  stagger: true
                },
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10
                }
              ]}
            />
          </Box>
          <Typography>{increase}</Typography>
        </Stack>
      </Paper>
    </div>
  )
}
