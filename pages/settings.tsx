import { ChangeEventHandler, MouseEventHandler, useContext, useEffect, useState } from 'react'
import { Stationinfo } from '../typings'
import MyStationsContext from '../context/my-stations-context'
import { NextPage } from 'next'
import styles from './settings.module.css'
import Link from 'next/link'
import trainPic from '../public/images/train.png'
import Image from 'next/image'

const Settings: NextPage = () => {

  const [stations, setStations] = useState<Stationinfo[]>([])
  const [stationName, setStationName] = useState('')
  const [stationToChange, setStationToChange] = useState('')

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
    setStationName('')
    setStationToChange('')
  }

  return (
    <div className={styles.settings}>


      <div className={styles.myStations}>
        <h3 onClick={() => setStationToChange('Home')}>Thuis: {homeStation && homeStation.standardname}</h3>
        <Link href="/">
          <a className={styles.link}>
            <Image src={trainPic} alt="train" width={120} height={64} />
          </a>
        </Link>
        <h3 onClick={() => setStationToChange('Work')}>Werk: {workStation && workStation.standardname}</h3>
      </div>

      {stationToChange && (
        <form>
          <div className={styles.formControl}>
            <span>Wijzig {stationToChange === 'Home' ? 'Thuis' : 'Werk'} </span>
            <input type="search" name="search" id="search" value={stationName} onChange={e => setStationName(e.target.value)} />
          </div>
          <ul>
            {stations.filter(station => station.standardname.toLowerCase().includes(stationName.toLowerCase())).map(station => <li key={station.id} onClick={() => handleSelectedStation(station)}>{station.standardname}</li>)}
          </ul>
        </form>
      )}

    </div>
  )
}

export default Settings
