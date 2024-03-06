import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { Box } from '@mui/material'
import { useTheme } from '@emotion/react'
import Header from "../../components/Header";


const data = [
  {
    "id": "japan",
    "color": "hsl(91, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 53
      },
      {
        "x": "helicopter",
        "y": 0
      },
      {
        "x": "boat",
        "y": 243
      },
      {
        "x": "train",
        "y": 294
      },
      {
        "x": "subway",
        "y": 52
      },
      {
        "x": "bus",
        "y": 152
      },
      {
        "x": "car",
        "y": 153
      },
      {
        "x": "moto",
        "y": 200
      },
      {
        "x": "bicycle",
        "y": 95
      },
      {
        "x": "horse",
        "y": 228
      },
      {
        "x": "skateboard",
        "y": 143
      },
      {
        "x": "others",
        "y": 197
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(355, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 22
      },
      {
        "x": "helicopter",
        "y": 42
      },
      {
        "x": "boat",
        "y": 20
      },
      {
        "x": "train",
        "y": 182
      },
      {
        "x": "subway",
        "y": 229
      },
      {
        "x": "bus",
        "y": 203
      },
      {
        "x": "car",
        "y": 116
      },
      {
        "x": "moto",
        "y": 142
      },
      {
        "x": "bicycle",
        "y": 227
      },
      {
        "x": "horse",
        "y": 102
      },
      {
        "x": "skateboard",
        "y": 175
      },
      {
        "x": "others",
        "y": 8
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(80, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 51
      },
      {
        "x": "helicopter",
        "y": 76
      },
      {
        "x": "boat",
        "y": 113
      },
      {
        "x": "train",
        "y": 130
      },
      {
        "x": "subway",
        "y": 141
      },
      {
        "x": "bus",
        "y": 207
      },
      {
        "x": "car",
        "y": 164
      },
      {
        "x": "moto",
        "y": 27
      },
      {
        "x": "bicycle",
        "y": 93
      },
      {
        "x": "horse",
        "y": 259
      },
      {
        "x": "skateboard",
        "y": 298
      },
      {
        "x": "others",
        "y": 63
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(107, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 96
      },
      {
        "x": "helicopter",
        "y": 178
      },
      {
        "x": "boat",
        "y": 38
      },
      {
        "x": "train",
        "y": 243
      },
      {
        "x": "subway",
        "y": 196
      },
      {
        "x": "bus",
        "y": 285
      },
      {
        "x": "car",
        "y": 19
      },
      {
        "x": "moto",
        "y": 274
      },
      {
        "x": "bicycle",
        "y": 45
      },
      {
        "x": "horse",
        "y": 20
      },
      {
        "x": "skateboard",
        "y": 83
      },
      {
        "x": "others",
        "y": 232
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(111, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 276
      },
      {
        "x": "helicopter",
        "y": 44
      },
      {
        "x": "boat",
        "y": 45
      },
      {
        "x": "train",
        "y": 31
      },
      {
        "x": "subway",
        "y": 236
      },
      {
        "x": "bus",
        "y": 288
      },
      {
        "x": "car",
        "y": 199
      },
      {
        "x": "moto",
        "y": 63
      },
      {
        "x": "bicycle",
        "y": 151
      },
      {
        "x": "horse",
        "y": 249
      },
      {
        "x": "skateboard",
        "y": 74
      },
      {
        "x": "others",
        "y": 177
      }
    ]
  }
]


export default function Line({ isDashboard = false }) {
  const theme = useTheme();
  return (
    <div>
      {isDashboard? false :   <Header title={"Geography"} subtitle={"Simple Geography Chart"} />}
      <Box sx={{ height: isDashboard ? "380px" : '75vh' }}>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
          }}
          theme={{
            "text": {
              "fontSize": 11,
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "red"
            }
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? null : 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? null : 'Count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
          }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        />
      </Box>
    </div>
  )
}
