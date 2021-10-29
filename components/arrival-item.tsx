import { Arrival } from '../typings'
import styles from './arrival-item.module.css'

type Props = {
  station: string
  arrival: Arrival
}

const ArrivalItem = ({ station, arrival }: Props) => {

  const arrStation = station
  const arrTime = new Date(+arrival.time * 1000).toLocaleTimeString('nl-BE').substring(0,5)
  const arrPlatform = arrival.platform
  const arrDelay = arrival.delay

  return (
    <div className={styles.arrival}>
      {`${arrTime} +${arrDelay}' aankomst in ${arrStation} op spoor ${arrPlatform}`}
    </div>
  )
}

export default ArrivalItem
