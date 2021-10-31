import { Arrival } from '../typings'
import styles from './arrival-item.module.css'

type Props = {
  station: string
  arrival: Arrival
}

const ArrivalItem = ({ station, arrival }: Props) => {

  const arrStation = station
  const arrTime = new Date(+arrival.time * 1000).toLocaleTimeString('nl-BE').substring(0, 5)
  const arrPlatform = arrival.platform
  const arrDelay = arrival.delay

  return (
    <div className={styles.arrival}>
      <span style={{ fontWeight: 'bold' }}>{`${arrTime} `}</span>
      <span style={+arrDelay ? { color: 'red', fontWeight: 'bold', backgroundColor: 'yellow' } : {}}>{`+${+arrDelay / 60}'`}</span>
      <span>{` aankomst in ${arrStation} op spoor ${arrPlatform}`}</span>
    </div>
  )
}

export default ArrivalItem
