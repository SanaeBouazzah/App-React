import { Stack } from '@mui/material'
import React from 'react'
import Card from './Card'
import EmailIcon from '@mui/icons-material/Email'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from '@mui/icons-material/Traffic'
import { useTheme } from '@emotion/react'
import { data1 } from './data'
import { data2 } from './data'
import { data3 } from './data'
import { data4 } from './data'

export default function Row1() {
  const theme = useTheme();
  return (
    <div>
      <Stack direction={'row'} flexWrap={'wrap'}
       gap={2} justifyContent={{xs:"center",
       sm: "space-between"}}>
        <Card icon={<EmailIcon sx={{ color: theme.palette.secondary.dark }} />} title={"12,361"}
        subTitle={"Emails Sent"} data={data1}
        increase={"+14%"} scheme={'nivo'}/>
        <Card icon={<PointOfSaleIcon sx={{ color: theme.palette.secondary.dark }} />} title={"431,225"}
        subTitle={"Sales Obtained"} data={data2}
        increase={"+21%"} scheme={'dark2'}/>
        <Card icon={<PersonAddIcon sx={{ color: theme.palette.secondary.dark }} />} title={"32,441"}
        subTitle={"New Clients"} data={data3}
        increase={"+5%"} scheme={'pastel1'}/>
        <Card icon={<TrafficIcon sx={{ color: theme.palette.secondary.dark }} />} title={"1,325,134"}
        subTitle={"Traffic Received"} data={data4}
        increase={"+43%"} scheme={'set1'}/>
      </Stack>
    </div>
  )
}
