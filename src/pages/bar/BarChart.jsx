import { Box } from '@mui/material';
import { ResponsiveAreaBump } from '@nivo/bump'
import { useTheme } from '@emotion/react';

const data = [
  {
    "id": "JavaScript",
    "data": [
      {
        "x": 2000,
        "y": 20
      },
      {
        "x": 2001,
        "y": 19
      },
      {
        "x": 2002,
        "y": 18
      },
      {
        "x": 2003,
        "y": 23
      },
      {
        "x": 2004,
        "y": 10
      },
      {
        "x": 2005,
        "y": 21
      }
    ]
  },
  {
    "id": "ReasonML",
    "data": [
      {
        "x": 2000,
        "y": 18
      },
      {
        "x": 2001,
        "y": 20
      },
      {
        "x": 2002,
        "y": 20
      },
      {
        "x": 2003,
        "y": 15
      },
      {
        "x": 2004,
        "y": 18
      },
      {
        "x": 2005,
        "y": 20
      }
    ]
  },
  {
    "id": "TypeScript",
    "data": [
      {
        "x": 2000,
        "y": 30
      },
      {
        "x": 2001,
        "y": 28
      },
      {
        "x": 2002,
        "y": 10
      },
      {
        "x": 2003,
        "y": 10
      },
      {
        "x": 2004,
        "y": 13
      },
      {
        "x": 2005,
        "y": 20
      }
    ]
  },
  {
    "id": "Elm",
    "data": [
      {
        "x": 2000,
        "y": 18
      },
      {
        "x": 2001,
        "y": 25
      },
      {
        "x": 2002,
        "y": 29
      },
      {
        "x": 2003,
        "y": 23
      },
      {
        "x": 2004,
        "y": 25
      },
      {
        "x": 2005,
        "y": 27
      }
    ]
  },
  {
    "id": "CoffeeScript",
    "data": [
      {
        "x": 2000,
        "y": 20
      },
      {
        "x": 2001,
        "y": 18
      },
      {
        "x": 2002,
        "y": 13
      },
      {
        "x": 2003,
        "y": 25
      },
      {
        "x": 2004,
        "y": 22
      },
      {
        "x": 2005,
        "y": 23
      }
    ]
  }
];

export default function BarChart({isDashboard=false}) {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashboard? '310px' : '75vh' }}>
      <ResponsiveAreaBump
        data={data}
        margin={isDashboard? {top: 40, right: 20, bottom: 40, left: 20} : { top: 40, right: 80, bottom: 40, left: 80 }}
        spacing={8}
        colors={{ scheme: 'purpleRed_green' }}
        theme={{
          "text": {
            "fontSize": 11,
            "fill": "#333333",
            "outlineWidth": 0,
            "outlineColor": "red"
          },
          "axis": {
            "domain": {
              "line": {
                "stroke": "#777777",
                "strokeWidth": 1
              }
            },
            "legend": {
              "text": {
                "fontSize": 12,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "transparent"
              }
            },
            "ticks": {
              "line": {
                "stroke": "#777777",
                "strokeWidth": 1
              },
              "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
              }
            }
          },
          "grid": {
            "line": {
              "stroke": "#dddddd",
              "strokeWidth": 1
            }
          },
          "legends": {
            "title": {
              "text": {
                "fontSize": 11,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "transparent"
              }
            },
            "text": {
              "fontSize": 11,
              "fill": "#333333",
              "outlineWidth": 0,
              "outlineColor": "transparent"
            },
            "ticks": {
              "line": {},
              "text": {
                "fontSize": 10,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "transparent"
              }
            }
          },
          "annotations": {
            "text": {
              "fontSize": 13,
              "fill": "#333333",
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
            },
            "link": {
              "stroke": "#000000",
              "strokeWidth": 1,
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
            },
            "outline": {
              "stroke": "#000000",
              "strokeWidth": 2,
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
            },
            "symbol": {
              "fill": "#000000",
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
            }
          },
          "tooltip": {
            "container": {
              "background": theme.palette.background.default,
              "fontSize": 12
            },
            "basic": {},
            "chip": {},
            "table": {},
            "tableCell": {},
            "tableCellValue": {}
          }
        }}
        // @ts-ignore
        blendMode={{ blendMode: theme.palette.secondary.dark ? 'darken' : 'lighten' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: 'CoffeeScript'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'TypeScript'
            },
            id: 'lines'
          }
        ]}
        endLabel={false}
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -36,
          truncateTickAt: 0
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 32,
          truncateTickAt: 0
        }}
      />
    </Box>
  )
}

