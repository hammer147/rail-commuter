import React from 'react'
import { Connection } from '../typings'
import ArrivalItem from './arrival-item'
import DepartureItem from './departure-item'

type Props = {
  connection: Connection
}

const ConnectionItem = ({ connection }: Props) => {

  const duration = connection.duration
  const depTime = new Date(+connection.departure.time * 1000).toLocaleTimeString('nl-BE')
  const arrTime = new Date(+connection.arrival.time * 1000).toLocaleTimeString('nl-BE')

  return (
    <li>
      <div>{`Totale reistijd: ${+duration / 60} minuten`}</div>

      <DepartureItem departure={connection.departure} />

      {connection.vias.via.map(via => (
        <div key={via.id}>
          <ArrivalItem arrival={via.arrival} />
          <DepartureItem departure={via.departure} />
        </div>
      ))}

      <ArrivalItem arrival={connection.arrival} />

    </li>
  )
}

export default ConnectionItem
