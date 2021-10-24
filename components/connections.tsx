import { ConnectionData } from '../typings'
import ConnectionItem from './connection-item'

type Props = {
  connectionData: ConnectionData
}

const Connections = ({ connectionData }: Props) => {
  return (
    <div>
      <h2>Connections</h2>
      <ul>
        {connectionData.connection.map(connection => <ConnectionItem key={connection.id} connection={connection} />)}
      </ul>
    </div>
  )
}

export default Connections
