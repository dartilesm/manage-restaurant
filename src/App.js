import { useState, useContext } from 'react'
import { Text, Spacer, Input, Container, Grid, Button } from '@nextui-org/react';
import styles from './app.module.css'
import Table from './components/Table/Table';
import Footer from './components/Footer/Footer';
import { ClientContext } from './context/ClientsContext';

function App() {
  const { data, setData } = useContext(ClientContext)
  const [table, setTable] = useState({ name: '', maxClientAmount: '', currentClientAmount: '' })

  const setMaxClientAmount = (event) => {
    setData({
      ...data,
      maxClientsAmount: +event.target.value
    })
  }

  const canAddTable = Object.keys(table).filter(key => table[key]).length === 2

  const addTable = () => {
    const tables =  [...data.tables, table]
    setData({
      ...data,
      tables
    })
    setTable({ name: '', maxClientAmount: '', currentClientAmount: '' })
  }


  return (<>
    <Container className={styles.container}>
      <Text h1>Control de clientes</Text>
      <Spacer y={1} />
      <Grid.Container justify="center">
        <Input
            bordered 
            labelPlaceholder="Cantidad max clientes" 
            color="primary"
            type="number"
            size="large"
            value={data.maxClientsAmount}
            onChange={setMaxClientAmount}
        />
      </Grid.Container>
      <Spacer y={1} />
      <Text h3 b align="center">Mesas</Text>
      <Spacer y={2} />
      <Grid.Container justify="center" align="center" gap={2} wrap="nowrap">
        <Grid>
          <Input type="text" labelPlaceholder="Identificacion" bordered color="primary" value={table.name} onChange={e => setTable({ ...table, name: e.target.value })} />
        </Grid>
        <Grid>
          <Input type="number" labelPlaceholder="Cantidad máx clientes" bordered color="primary" value={table.maxClientAmount} onChange={e => setTable({ ...table, maxClientAmount: +e.target.value})} />
        </Grid>
        <Grid>
          <Button auto onClick={addTable} disabled={!canAddTable}>Agregar mesa</Button>
        </Grid>
      </Grid.Container>
      <Spacer y={2} />
      <Grid.Container justify="center" gap={2}>
        
        {
          data.tables.map((table, index) => <Grid> 
            <Table {...table} tableIndex={index} />
          </Grid>)
        }
      </Grid.Container>
      <Spacer y={2} />
    </Container>
    <Footer className={styles.footer} {...data} />
  </>)
}

export default App
