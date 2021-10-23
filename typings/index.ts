// http://json2ts.com/

export interface Stationinfo {
  locationX: string
  locationY: string
  id: string
  name: string
  '@id': string
  standardname: string
}

export interface Vehicleinfo {
  name: string
  shortname: string
  number: string
  type: string
  '@id': string
}

export interface Platforminfo {
  name: string
  normal: string
}

export interface Stop {
  id: string
  station: string
  stationinfo: Stationinfo
  scheduledArrivalTime: string
  arrivalCanceled: string
  arrived: string
  scheduledDepartureTime: string
  arrivalDelay: string
  departureDelay: string
  departureCanceled: string
  left: string
  isExtraStop: string
  departureConnection: string
}

export interface Stops {
  number: string
  stop: Stop[]
}

export interface Direction {
  name: string
}

export interface Alert {
  id: string
  header: string
  description: string
  lead: string
  startTime: string
  endTime: string
}

export interface Alerts {
  number: string
  alert: Alert[]
}

export interface Occupancy {
  '@id': string
  name: string
}

export interface Departure {
  delay: string
  station: string
  stationinfo: Stationinfo
  time: string
  vehicle: string
  vehicleinfo: Vehicleinfo
  platform: string
  platforminfo: Platforminfo
  canceled: string
  stops: Stops
  departureConnection: string
  direction: Direction
  left: string
  walking: string
  alerts: Alerts
  occupancy: Occupancy
}

export interface Arrival {
  delay: string
  station: string
  stationinfo: Stationinfo
  time: string
  vehicle: string
  vehicleinfo: Vehicleinfo
  platform: string
  platforminfo: Platforminfo
  canceled: string
  direction: Direction
  arrived: string
  walking: string
}

export interface Via {
  id: string
  arrival: Arrival
  departure: Departure
  timeBetween: string
  station: string
  stationinfo: Stationinfo
  vehicle: string
  vehicleinfo: Vehicleinfo
  direction: Direction
}

export interface Vias {
  number: string
  via: Via[]
}

export interface Remarks {
  number: string
  remark: any[]
}

export interface Connection {
  id: string
  departure: Departure
  arrival: Arrival
  vias: Vias
  duration: string
  remarks: Remarks
  alerts: Alerts
  occupancy: Occupancy
}

export interface ConnectionData {
  version: string
  timestamp: string
  connection: Connection[]
}
