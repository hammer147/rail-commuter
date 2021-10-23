import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { Stationinfo } from '../typings'

type MyStationsContextType = {
  homeStation: Stationinfo | null,
  setHomeStation: Dispatch<SetStateAction<Stationinfo | null>>
  workStation: Stationinfo | null,
  setWorkStation: Dispatch<SetStateAction<Stationinfo | null>>
}

const MyStationsContext = createContext({} as MyStationsContextType)

type Props = {
  children: ReactNode
}

export const MyStationsProvider = ({ children }: Props) => {

  const [homeStation, setHomeStation] = useState<Stationinfo | null>(null)
  const [workStation, setWorkStation] = useState<Stationinfo | null>(null)

  useEffect(() => {
    const homeStationValue = localStorage.getItem('homeStation')
    if (homeStationValue) setHomeStation(JSON.parse(homeStationValue))
    const workStationValue = localStorage.getItem('workStation')
    if (workStationValue) setWorkStation(JSON.parse(workStationValue))
  }, [])

  useEffect(() => localStorage.setItem('homeStation', JSON.stringify(homeStation)), [homeStation])
  useEffect(() => localStorage.setItem('workStation', JSON.stringify(workStation)), [workStation])

  return (
    <MyStationsContext.Provider value={{ homeStation, setHomeStation, workStation, setWorkStation }}>
      {children}
    </MyStationsContext.Provider>
  )
}

export default MyStationsContext
