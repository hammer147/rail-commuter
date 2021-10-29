import { Departure } from '../typings'
import styles from './departure-item.module.css'

type Props = {
  station: string
  departure: Departure
}

const DepartureItem = ({ station, departure }: Props) => {

  const depStation = station
  const depTime = new Date(+departure.time * 1000).toLocaleTimeString('nl-BE').substring(0,5)
  const depPlatform = departure.platform
  const depDirection = departure.direction.name
  const depDelay = departure.delay

  return (
    <div className={styles.departure}>
      {`${depTime} +${depDelay}' vertrek in ${depStation} op spoor ${depPlatform} richting ${depDirection} `}
    </div>
  )
}

export default DepartureItem
