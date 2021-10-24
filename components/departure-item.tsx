import { Departure } from '../typings'

type Props = {
  departure: Departure
}

const DepartureItem = ({ departure }: Props) => {

  const depTime = new Date(+departure.time * 1000).toLocaleTimeString('nl-BE')
  const depStation = departure.station
  const depPlatform = departure.platform
  const depDirection = departure.direction.name

  return (
    <div>
      {`${depTime} vertrek in ${depStation} op spoor ${depPlatform} richting ${depDirection} `}
    </div>
  )
}

export default DepartureItem
