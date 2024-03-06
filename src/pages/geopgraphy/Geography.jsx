import { Box } from '@mui/material'
import React from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'
import { useTheme } from '@emotion/react'
import { geo } from './world_countries'
import Header from "../../components/Header";


const data = [
  {
    "id": "AFG",
    "value": 805111
  },
  {
    "id": "AGO",
    "value": 202747
  },
  {
    "id": "ALB",
    "value": 612851
  },
  {
    "id": "ARE",
    "value": 289503
  },
  {
    "id": "ARG",
    "value": 137502
  },
  {
    "id": "ARM",
    "value": 286184
  },
  {
    "id": "ATA",
    "value": 581011
  },
  {
    "id": "ATF",
    "value": 498267
  },
  {
    "id": "AUT",
    "value": 309808
  },
  {
    "id": "AZE",
    "value": 338874
  },
  {
    "id": "BDI",
    "value": 667164
  },
  {
    "id": "BEL",
    "value": 981559
  },
  {
    "id": "BEN",
    "value": 737736
  },
  {
    "id": "BFA",
    "value": 939445
  },
  {
    "id": "BGD",
    "value": 878548
  },
  {
    "id": "BGR",
    "value": 216229
  },
  {
    "id": "BHS",
    "value": 506490
  },
  {
    "id": "BIH",
    "value": 715298
  },
  {
    "id": "BLR",
    "value": 234634
  },
  {
    "id": "BLZ",
    "value": 523190
  },
  {
    "id": "BOL",
    "value": 512765
  },
  {
    "id": "BRN",
    "value": 899712
  },
  {
    "id": "BTN",
    "value": 334599
  },
  {
    "id": "BWA",
    "value": 788830
  },
  {
    "id": "CAF",
    "value": 571824
  },
  {
    "id": "CAN",
    "value": 670458
  },
  {
    "id": "CHE",
    "value": 474267
  },
  {
    "id": "CHL",
    "value": 117770
  },
  {
    "id": "CHN",
    "value": 7011
  },
  {
    "id": "CIV",
    "value": 975147
  },
  {
    "id": "CMR",
    "value": 717537
  },
  {
    "id": "COG",
    "value": 406188
  },
  {
    "id": "COL",
    "value": 962361
  },
  {
    "id": "CRI",
    "value": 134151
  },
  {
    "id": "CUB",
    "value": 527118
  },
  {
    "id": "-99",
    "value": 19435
  },
  {
    "id": "CYP",
    "value": 988129
  },
  {
    "id": "CZE",
    "value": 445173
  },
  {
    "id": "DEU",
    "value": 904625
  },
  {
    "id": "DJI",
    "value": 571156
  },
  {
    "id": "DNK",
    "value": 624010
  },
  {
    "id": "DOM",
    "value": 93987
  },
  {
    "id": "DZA",
    "value": 916853
  },
  {
    "id": "ECU",
    "value": 518971
  },
  {
    "id": "EGY",
    "value": 332819
  },
  {
    "id": "ERI",
    "value": 77359
  },
  {
    "id": "ESP",
    "value": 792119
  },
  {
    "id": "EST",
    "value": 141505
  },
  {
    "id": "ETH",
    "value": 878663
  },
  {
    "id": "FIN",
    "value": 131645
  },
  {
    "id": "FJI",
    "value": 120129
  },
  {
    "id": "FLK",
    "value": 671511
  },
  {
    "id": "FRA",
    "value": 189937
  },
  {
    "id": "GAB",
    "value": 701187
  },
  {
    "id": "GBR",
    "value": 917449
  },
  {
    "id": "GEO",
    "value": 117988
  },
  {
    "id": "GHA",
    "value": 87923
  },
  {
    "id": "GIN",
    "value": 366362
  },
  {
    "id": "GMB",
    "value": 370965
  },
  {
    "id": "GNB",
    "value": 945653
  },
  {
    "id": "GNQ",
    "value": 432207
  },
  {
    "id": "GRC",
    "value": 935472
  },
  {
    "id": "GTM",
    "value": 690720
  },
  {
    "id": "GUY",
    "value": 718933
  },
  {
    "id": "HND",
    "value": 545060
  },
  {
    "id": "HRV",
    "value": 42321
  },
  {
    "id": "HTI",
    "value": 162206
  },
  {
    "id": "HUN",
    "value": 927638
  },
  {
    "id": "IDN",
    "value": 613502
  },
  {
    "id": "IND",
    "value": 568419
  },
  {
    "id": "IRL",
    "value": 283829
  },
  {
    "id": "IRN",
    "value": 731373
  },
  {
    "id": "IRQ",
    "value": 80958
  },
  {
    "id": "ISL",
    "value": 511527
  },
  {
    "id": "ISR",
    "value": 167557
  },
  {
    "id": "ITA",
    "value": 578019
  },
  {
    "id": "JAM",
    "value": 95664
  },
  {
    "id": "JOR",
    "value": 862549
  },
  {
    "id": "JPN",
    "value": 813035
  },
  {
    "id": "KAZ",
    "value": 930626
  },
  {
    "id": "KEN",
    "value": 450319
  },
  {
    "id": "KGZ",
    "value": 187066
  },
  {
    "id": "KHM",
    "value": 751006
  },
  {
    "id": "OSA",
    "value": 862496
  },
  {
    "id": "KWT",
    "value": 991766
  },
  {
    "id": "LAO",
    "value": 630980
  },
  {
    "id": "LBN",
    "value": 465727
  },
  {
    "id": "LBR",
    "value": 730150
  },
  {
    "id": "LBY",
    "value": 351137
  },
  {
    "id": "LKA",
    "value": 967523
  },
  {
    "id": "LSO",
    "value": 692619
  },
  {
    "id": "LTU",
    "value": 718596
  },
  {
    "id": "LUX",
    "value": 954800
  },
  {
    "id": "LVA",
    "value": 261592
  },
  {
    "id": "MAR",
    "value": 538713
  },
  {
    "id": "MDA",
    "value": 346807
  },
  {
    "id": "MDG",
    "value": 281258
  },
  {
    "id": "MEX",
    "value": 936796
  },
  {
    "id": "MKD",
    "value": 299467
  },
  {
    "id": "MLI",
    "value": 797686
  },
  {
    "id": "MMR",
    "value": 969420
  },
  {
    "id": "MNE",
    "value": 409954
  },
  {
    "id": "MNG",
    "value": 333782
  },
  {
    "id": "MOZ",
    "value": 17291
  },
  {
    "id": "MRT",
    "value": 208367
  },
  {
    "id": "MWI",
    "value": 332090
  },
  {
    "id": "MYS",
    "value": 805769
  },
  {
    "id": "NAM",
    "value": 1782
  },
  {
    "id": "NCL",
    "value": 129892
  },
  {
    "id": "NER",
    "value": 691829
  },
  {
    "id": "NGA",
    "value": 436939
  },
  {
    "id": "NIC",
    "value": 22565
  },
  {
    "id": "NLD",
    "value": 535659
  },
  {
    "id": "NOR",
    "value": 909113
  },
  {
    "id": "NPL",
    "value": 682747
  },
  {
    "id": "NZL",
    "value": 622076
  },
  {
    "id": "OMN",
    "value": 31979
  },
  {
    "id": "PAK",
    "value": 960126
  },
  {
    "id": "PAN",
    "value": 952624
  },
  {
    "id": "PER",
    "value": 736402
  },
  {
    "id": "PHL",
    "value": 756455
  },
  {
    "id": "PNG",
    "value": 161743
  },
  {
    "id": "POL",
    "value": 737357
  },
  {
    "id": "PRI",
    "value": 321080
  },
  {
    "id": "PRT",
    "value": 431394
  },
  {
    "id": "PRY",
    "value": 196690
  },
  {
    "id": "QAT",
    "value": 943096
  },
  {
    "id": "ROU",
    "value": 659763
  },
  {
    "id": "RUS",
    "value": 974633
  },
  {
    "id": "RWA",
    "value": 754477
  },
  {
    "id": "ESH",
    "value": 326092
  },
  {
    "id": "SAU",
    "value": 424912
  },
  {
    "id": "SDN",
    "value": 311948
  },
  {
    "id": "SDS",
    "value": 871891
  },
  {
    "id": "SEN",
    "value": 408962
  },
  {
    "id": "SLB",
    "value": 542243
  },
  {
    "id": "SLE",
    "value": 128660
  },
  {
    "id": "SLV",
    "value": 202270
  },
  {
    "id": "ABV",
    "value": 210804
  },
  {
    "id": "SOM",
    "value": 23455
  },
  {
    "id": "SRB",
    "value": 253712
  },
  {
    "id": "SUR",
    "value": 985625
  },
  {
    "id": "SVK",
    "value": 769526
  },
  {
    "id": "SVN",
    "value": 127326
  },
  {
    "id": "SWZ",
    "value": 438715
  },
  {
    "id": "SYR",
    "value": 304743
  },
  {
    "id": "TCD",
    "value": 886749
  },
  {
    "id": "TGO",
    "value": 201810
  },
  {
    "id": "THA",
    "value": 878249
  },
  {
    "id": "TJK",
    "value": 630653
  },
  {
    "id": "TKM",
    "value": 758498
  },
  {
    "id": "TLS",
    "value": 109237
  },
  {
    "id": "TTO",
    "value": 827911
  },
  {
    "id": "TUN",
    "value": 41437
  },
  {
    "id": "TUR",
    "value": 266091
  },
  {
    "id": "TWN",
    "value": 154087
  },
  {
    "id": "TZA",
    "value": 403977
  },
  {
    "id": "UGA",
    "value": 251199
  },
  {
    "id": "UKR",
    "value": 19511
  },
  {
    "id": "URY",
    "value": 666210
  },
  {
    "id": "USA",
    "value": 350440
  },
  {
    "id": "UZB",
    "value": 977647
  },
  {
    "id": "VEN",
    "value": 93278
  },
  {
    "id": "VNM",
    "value": 820934
  },
  {
    "id": "VUT",
    "value": 918405
  },
  {
    "id": "PSE",
    "value": 703805
  },
  {
    "id": "YEM",
    "value": 26202
  },
  {
    "id": "ZAF",
    "value": 914521
  },
  {
    "id": "ZMB",
    "value": 243911
  },
  {
    "id": "ZWE",
    "value": 480439
  },
  {
    "id": "KOR",
    "value": 829137
  }
]


export default function Geography({ isDashboard = false }) {
  const theme = useTheme();
  return (
    <div>
      {isDashboard? false :   <Header title={"Geography"} subtitle={"Simple Geography Chart"} />}
      
      <Box sx={{ height: isDashboard ? '370px' : '75vh', flexGrow: 1, marginTop: "20px" }}>
        <ResponsiveChoropleth
          data={data}
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
          projectionScale={isDashboard ? 80 : 130}
          features={geo.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors="RdBu"
          domain={[0, 1000000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          enableGraticule={true}
          graticuleLineColor=""
          borderWidth={0.5}
          borderColor="#152538"
          // @ts-ignore
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
            },
            {
              id: 'gradient',
              type: 'linearGradient',
              colors: [
                {
                  offset: 0,
                  color: '#000'
                },
                {
                  offset: 100,
                  color: 'inherit'
                }
              ]
            }
          ]}
          fill={[
            {
              match: {
                id: 'CAN'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'CHN'
              },
              id: 'lines'
            },
            {
              match: {
                id: 'ATA'
              },
              id: 'gradient'
            }
          ]}
          legends={
            isDashboard ? [] :
              [
                {
                  anchor: 'bottom-left',
                  direction: 'column',
                  justify: true,
                  translateX: 20,
                  translateY: -100,
                  itemsSpacing: 0,
                  itemWidth: 94,
                  itemHeight: 18,
                  itemDirection: 'left-to-right',
                  itemTextColor: theme.palette.text.primary,
                  itemOpacity: 0.85,
                  symbolSize: 18,
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemTextColor: '#000000',
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
