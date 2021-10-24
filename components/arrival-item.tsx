import { Arrival } from '../typings'

type Props = {
  arrival: Arrival
}

const ArrivalItem = ({ arrival }: Props) => {

  const arrTime = new Date(+arrival.time * 1000).toLocaleTimeString('nl-BE')
  const arrStation = arrival.station
  const arrPlatform = arrival.platform

  return (
    <div>
      {`${arrTime} aankomst in ${arrStation} op spoor ${arrPlatform}`}
    </div>
  )
}

export default ArrivalItem
