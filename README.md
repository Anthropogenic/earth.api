# earth.api + hge.earth

If you are using a web3 compatible browser the domain is available at [earth.api](https://earth.api) all other browsers can reach the data at [hge.earth](https://hge.earth)

## Current REST API Routes

All data is sourced from the [National Oceanic and Atmospheric Administration](https://gml.noaa.gov/ccgg/trends/global.html).

### CH₄

Methane is a chemical compound with the chemical formula CH₄. It is a group-14 hydride, the simplest alkane, and the main constituent of natural gas. The relative abundance of methane on Earth makes it an economically attractive fuel, although capturing and storing it poses technical challenges due to its gaseous state under normal conditions for temperature and pressure. ~ Wikipedia

#### Monthly Data

API Path:
`api/ch4/monthly`

Sample Data from 1983-07:

```
{
	"id": "198307",
	"year": 1983,
	"month": 7,
	"measurement": "1626.0",
	"unc": "2.3",
	"trend": "1635.6",
	"trend_unc": "1.5",
	"unit": "ppb"
},
```

### CO₂

Carbon dioxide is a chemical compound occurring as a colorless gas with a density about 53% higher than that of dry air. ~ Wikipedia

#### Yearly Data:

`api/co2/yearly`

Sample Data for 1980:

```
 {
	"id": "1980",
	"year": "1980",
	"measurement": "338.91",
	"unc": "0.1",
	"unit": "ppm"
},
```

#### Monthly Data:

API Path:
`api/co2/monthly`

Sample Data for 1908-01:

```
{
	"id": "198001",
	"year": 1980,
	"month": 1,
	"measurement": "338.55",
	"trend": "337.93",
	"unit": "ppm"
},
```

#### Weekly Data:

API Path:
`api/co2/weekly`

Sample Data for 1974-05-19:

```
{
	"id": "19740519",
	"year": 1974,
	"month": 5,
	"day": 19,
	"measurement": "333.37",
	"unit": "ppm"
},
```

### N₂O

Nitrous oxide, commonly known as laughing gas, nitrous, or nos, is a chemical compound, an oxide of nitrogen with the formula N ₂O. At room temperature, it is a colourless non-flammable gas, and has a slightly sweet scent and taste. At elevated temperatures, nitrous oxide is a powerful oxidiser similar to molecular oxygen. ~ Wikipedia

#### Yearly Data:

API Path:
`api/n2o/yearly`

Sample Data from 2001:

```
{
	"id": "2001",
	"year": "2001",
	"measurement": "0.71",
	"unc": "0.11",
	"unit": "ppb"
},
```

### SF₆

Sulfur hexafluoride or sulphur hexafluoride is an extremely potent and persistent greenhouse gas that is primarily utilized as an electrical insulator and arc suppressant. ~ Wikipedia

#### Yearly Data:

`api/sf6/yearly`

Sample Data from 1998:

```
 {
	"id": "1998",
	"year": "1998",
	"measurement": "0.20",
	"unc": "0.004",
	"unit": "ppt"
},
```

#### Monthly Data:

`api/sf6/monthly`

Sample Data from 1997-07:

```
{
	"id": "199707",
	"year": 1997,
	"month": 7,
	"measurement": "4.00",
	"unc": "0.005",
	"trend": "4.01",
	"trend_unc": "0.004",
	"unit": "ppt"
},
```

## Resources
