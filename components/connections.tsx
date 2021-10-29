import { ConnectionData } from '../typings'
import ConnectionItem from './connection-item'
import styles from './connections.module.css'

type Props = {
  connectionData: ConnectionData
}

const Connections = ({ connectionData }: Props) => {
  return (
    <div className={styles.connections}>
      <ul>
        {connectionData.connection.map(connection => <ConnectionItem key={connection.id} connection={connection} />)}
      </ul>
    </div>
  )
}

export default Connections
