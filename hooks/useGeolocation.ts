import { useEffect, useState } from 'react'

const useGeolocation = () => {
  const [error, setError] = useState('')
  const [isLocating, setIsLocating] = useState(false)
  const [position, setPosition] = useState<GeolocationPosition | null>(null)

  useEffect(() => {
    geoFindMe()
  }, [])

  const geoFindMe = () => {

    const success: PositionCallback = position => {
      setIsLocating(false)
      setPosition(position)
    }

    const error: PositionErrorCallback = () => {
      setIsLocating(false)
      setError('Unable to retrieve your location')
    } 

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser')
    } else {
      setIsLocating(true)
      navigator.geolocation.getCurrentPosition(success, error)
    }
  }

  return { isLocating, position, error }
}

export default useGeolocation
