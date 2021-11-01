import { Button, Card, Col, Grid, Row, Text } from '@nextui-org/react'
import { useContext, useState } from 'react'
import { ClientContext } from '../../context/ClientsContext'


const Table = ({ name = '', maxClientAmount = 4, currentClientAmount: initialClientAmount, tableIndex = 0 }) => {
    const { data, setData } = useContext(ClientContext)
    const [currentClientAmount, setCurrentClientAmount] = useState(initialClientAmount || 0)

    const addClient = () => {
        const newClientAmount = currentClientAmount + 1
        if (newClientAmount > maxClientAmount || data.currentClientsAmount + 1 > data.maxClientsAmount) {
          setCurrentClientAmount(currentClientAmount)
        } else {
          setCurrentClientAmount(newClientAmount)
          const tables = data.tables
          tables[tableIndex] = {
            ...tables[tableIndex],
            currentClientAmount: newClientAmount
          }
          setData({
            ...data,
            currentClientsAmount: data.currentClientsAmount + 1,
            tables
          })
        }
    }

    const removeClient = () => {
        const newClientAmount = currentClientAmount - 1
        if (newClientAmount < 0) {
          setCurrentClientAmount(currentClientAmount)
        } else {
          setCurrentClientAmount(newClientAmount)
          const tables = data.tables
          tables[tableIndex] = {
            ...tables[tableIndex],
            currentClientAmount: newClientAmount
          }
          setData({
            ...data,
            currentClientsAmount: data.currentClientsAmount - 1,
            tables
          })
        }
    }

    return <Card width="300px" height="300px" color="#f6f6f6" cover>
    <Card.Header style={{ position: 'absolute', zIndex: 1, top: 5, backgroundColor: 'rgba(0, 0, 0, .8)' }}>
      <Col>
        <Text h3 color="white">
          Mesa {name}
        </Text>
      </Col>
    </Card.Header>
        <Card.Image
        autoResize={false}
        src='https://www.enter.co/wp-content/uploads/2017/02/menu-restaurant-vintage-tableFINAL-768x432.jpg'
        height={300}
        width="100%"
        alt="Card example background"
        />
        <Grid>
    </Grid>
    <Card.Footer             
      blur
      border
      borderColor="rgba(255, 255, 255, 0.2)"
      style={{ position: 'absolute', zIndex: 1, bottom: 0 }}>
      <Row>
        <Col>
          <Text h5 b align="center">Clientes</Text>
          <Row justify="space-between">
                <Button auto color="error" disabled={+currentClientAmount === 0} onClick={removeClient}>Quitar</Button>
                <Text h3>{ currentClientAmount } / { maxClientAmount }</Text>
                <Button auto onClick={addClient} disabled={currentClientAmount === maxClientAmount || data.currentClientsAmount === data.maxClientsAmount}>Agregar</Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
    </Card>
}

export default Table