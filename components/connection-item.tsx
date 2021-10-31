import React from 'react'
import { Connection } from '../typings'
import ArrivalItem from './arrival-item'
import DepartureItem from './departure-item'
import styles from './connection-item.module.css'
import { FaTrain } from 'react-icons/fa'
import { convertMinsToHrsMins } from '../utils/convertMinsToHrsMins'

type Props = {
  connection: Connection
}

const ConnectionItem = ({ connection }: Props) => {

  const duration = connection.duration
  const depTime = new Date(+connection.departure.time * 1000).toLocaleTimeString('nl-BE').substring(0, 5)
  const arrTime = new Date(+connection.arrival.time * 1000).toLocaleTimeString('nl-BE').substring(0, 5)

  return (
    <div className={styles.connection}>
      <div className={styles.connectionTitle}>
        <div>
          {`${depTime} `}
          <FaTrain />
        </div>
        <div>{`${convertMinsToHrsMins(+duration / 60)}`}</div>
        <div>
          <FaTrain />
          {` ${arrTime}`}
        </div>
      </div>

      <DepartureItem station={connection.departure.station} departure={connection.departure} />

      {connection.vias?.via?.map(via => (
        <div key={via.id}>
          <ArrivalItem station={via.station} arrival={via.arrival} />
          <DepartureItem station={via.station} departure={via.departure} />
        </div>
      ))}

      <ArrivalItem station={connection.arrival.station} arrival={connection.arrival} />

    </div>
  )
}

export default ConnectionItem
