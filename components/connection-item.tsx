import React from 'react'
import { Connection } from '../typings'
import ArrivalItem from './arrival-item'
import DepartureItem from './departure-item'
import styles from './connection-item.module.css'
import { FaTrain } from 'react-icons/fa'
import {convertMinsToHrsMins} from '../utils/convertMinsToHrsMins'

type Props = {
  connection: Connection
}

const ConnectionItem = ({ connection }: Props) => {

  const duration = connection.duration
  // const depTime = new Date(+connection.departure.time * 1000).toLocaleTimeString('nl-BE')
  // const arrTime = new Date(+connection.arrival.time * 1000).toLocaleTimeString('nl-BE')

  return (
    <li>
      <h3><FaTrain /> {`Totale reistijd: ${convertMinsToHrsMins(+duration / 60)}`}</h3>

      <DepartureItem station={connection.departure.station} departure={connection.departure} />

      {connection.vias.via.map(via => (
        <div key={via.id}>
          <ArrivalItem station={via.station} arrival={via.arrival} />
          <DepartureItem station={via.station} departure={via.departure} />
        </div>
      ))}

      <ArrivalItem station={connection.arrival.station} arrival={connection.arrival} />

    </li>
  )
}

export default ConnectionItem
