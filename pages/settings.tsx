import { ChangeEventHandler, MouseEventHandler, useContext, useEffect, useState } from 'react'
import { Stationinfo } from '../typings'
import MyStationsContext from '../context/my-stations-context'
import { NextPage } from 'next'

const Settings: NextPage = () => {

  const [stations, setStations] = useState<Stationinfo[]>([])
  const [stationName, setStationName] = useState('')
  const [stationToChange, setStationToChange] = useState('Home')

  const { homeStation, setHomeStation, workStation, setWorkStation } = useContext(MyStationsContext)

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.irail.be/stations/?format=json')
      const data = await response.json()
      setStations(data.station)
    })()
  }, [])

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => setStationToChange(e.target.value)

  const handleSelectedStation = (station: Stationinfo) => {
    setStationName(station.standardname)
    if (stationToChange === 'Home') {
      setHomeStation(station)
    } else {
      setWorkStation(station)
    }
  }

  return (
    <>
      <p>Home Station: {homeStation && homeStation.standardname}</p>
      <p>Work Station: {workStation && workStation.standardname}</p>
      <form>
        <p>Set Station</p>
        <div>
          <input
            type="radio"
            value="Home"
            checked={stationToChange === 'Home'}
            onChange={handleChange}
          /> Home
        </div>
        <div>
          <input
            type="radio"
            value="Work"
            checked={stationToChange === 'Work'}
            onChange={handleChange}
          /> Work
        </div>
        <p>station to change: {stationToChange}</p>
        <input type="search" name="search" id="search" value={stationName} onChange={e => setStationName(e.target.value)} />
        <ul>
          {stations.filter(station => station.standardname.toLowerCase().includes(stationName.toLowerCase())).map(station => <li key={station.id} onClick={() => handleSelectedStation(station) }>{station.standardname}</li>)}
        </ul>
      </form>
    </>
  )
}

export default Settings
