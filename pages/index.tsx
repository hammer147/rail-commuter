import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import useGeolocation from '../hooks/useGeolocation'
import { sphericalDistance } from '../utils/sphericalDistance'
import styles from '../styles/Home.module.css'
import MyStationsContext from '../context/my-stations-context'
import { ConnectionData } from '../typings'

const Home: NextPage = () => {

  const { homeStation, setHomeStation, workStation, setWorkStation } = useContext(MyStationsContext)
  const { isLocating, position, error } = useGeolocation()
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [connectionData, setConnectionData] = useState<ConnectionData>()

  useEffect(() => {
    if (position && homeStation && workStation) {
      const distanceToHomeStation = sphericalDistance(position.coords.latitude, position.coords.longitude, +homeStation.locationY, +homeStation.locationX)
      const distanceToWorkStation = sphericalDistance(position.coords.latitude, position.coords.longitude, +workStation.locationY, +workStation.locationX)
      if (distanceToHomeStation < distanceToWorkStation) {
        setFrom(homeStation.standardname)
        setTo(workStation.standardname)
      } else {
        setFrom(workStation.standardname)
        setTo(homeStation.standardname)
      }
    }
  }, [position, homeStation, workStation])

  useEffect(() => {
    (async () => {
      if (from && to) {
        const response = await fetch(`https://api.irail.be/connections/?from=${from}&to=${to}&format=json&lang=nl`)
        setConnectionData(await response.json())
      }
    })()
  }, [from, to])

  return (
    <div>
      {position && (
        <div>
          <p>Location at: {new Date(position.timestamp).toLocaleTimeString('nl-BE')}</p>
          <p>Location Latitude: {position.coords.latitude}</p>
          <p>Location Longitude: {position.coords.longitude}</p>
          <p>From: {from}</p>
          <p>To: {to}</p>
          <p>{JSON.stringify(connectionData)}</p>
        </div>
      )}
    </div>
  )
}

export default Home
