import { useState } from 'react'
import { useColorMode } from '@chakra-ui/color-mode'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const legends = [
  { name: 'Yellow', color: '#FAE8A4' },
  { name: 'Blue', color: '#AE7AFF' },
  { name: 'Green', color: '#98E9AB' },
  { name: 'Red', color: '#E99898' },
  { name: 'Dark Blue', color: '#8B62CC' },
]

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json'

type MapProps = {}

const Map = ({}: MapProps) => {
  const [content, setContent] = useState<any>('')
  const { colorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'

  const countries = [
    {
      id: 'UKR',
      color: '#00C4FF',
      price: 2500,
    },
    {
      id: 'USA',
      color: '#AE7AFF',
      price: 15000,
    },
    {
      id: 'MEX',
      color: '#FF00A2',
      price: 3200,
    },
    {
      id: 'BRA',
      color: '#00C4FF',
      price: 4400,
    },
    {
      id: 'AUS',
      color: '#F26E6F',
      price: 7400,
    },
    {
      id: 'ESP',
      color: '#98E9AB',
      price: 6000,
    },
    {
      id: 'CHN',
      color: '#E5A943',
      price: 2200,
    },
    {
      id: 'ZAF',
      color: '#C36EF2',
      price: 2200,
    },
  ]

  const handleCountryHover = (geography: any) => {
    const countryData = countries.find(country => country.id === geography.id)
    countryData && setContent('$' + countryData.price)
  }

  const handleCountryLeave = () => {
    setContent('')
  }

  return (
    <div className="overflow-hidden p-5 pb-10 lg:pb-6 md:pb-5">
      <ComposableMap className="-ml-12 -mt-12 md:-ml-8 md:-mt-6">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              if (geo.properties.name === 'Antarctica') {
                return null
              }

              const countryData = countries.find(country => country.id === geo.id)

              return (
                <Geography
                  className="relative"
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => handleCountryHover(geo)}
                  onMouseLeave={handleCountryLeave}
                  fill={countryData ? countryData.color : isDarkMode ? '#161616' : '#FAF4F0'}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={content}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>
      <Tooltip className="text-sm font-bold" id="my-tooltip" />
      <div className="-mx-5 -mt-20 flex flex-wrap justify-center md:-mx-2 md:-mt-10">
        {legends.map((item: any, index: number) => (
          <div className="mx-5 mt-3 flex items-center text-xs font-bold md:mx-2" key={index}>
            <div className="mr-1.5 h-2 w-2 rounded-full" style={{ backgroundColor: item.color }}></div>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Map
