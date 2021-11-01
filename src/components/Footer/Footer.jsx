import { Grid, Text } from '@nextui-org/react'

const Footer = ({ className: footerClassName, currentClientsAmount, maxClientsAmount }) => {
    return <Grid.Container justify="space-between" className={footerClassName}>
        <Text h4>Clientes en el restaurante</Text>
        <Text h4 b>{currentClientsAmount}/{maxClientsAmount}</Text>
    </Grid.Container>
}

export default Footer