import { Departure } from '../typings'
import styles from './departure-item.module.css'

type Props = {
  station: string
  departure: Departure
}

const DepartureItem = ({ station, departure }: Props) => {

  const depStation = station
  const depTime = new Date(+departure.time * 1000).toLocaleTimeString('nl-BE').substring(0, 5)
  const depPlatform = departure.platform
  const depDirection = departure.direction.name
  const depDelay = departure.delay

  return (
    <div className={styles.departure}>
      <span style={{ fontWeight: 'bold' }}>{`${depTime} `}</span>
      <span style={+depDelay ? { color: 'red', fontWeight: 'bold', backgroundColor: 'yellow'} : {}}>{`+${+depDelay / 60}' `}</span>
      vertrek in
      <span style={{ fontWeight: 'bold' }}>{` ${depStation} `}</span>
      op
      <span style={{ fontWeight: 'bold' }}>{` spoor ${depPlatform} `}</span>
      richting
      <span style={{ fontWeight: 'bold' }}>{` ${depDirection}`}</span>
    </div>
  )
}

export default DepartureItem
