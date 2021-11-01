import { useState, createContext, useEffect } from 'react'

export const ClientContext = createContext()


const inititalData = window.localStorage.getItem('data') ? JSON.parse(window.localStorage.getItem('data')) : {
    maxClientsAmount: '',
    currentClientsAmount: 0,
    tables: []
}

console.log(inititalData)

const ClientProvider = ({ children }) => {
    const [data, setData] = useState(inititalData)

    useEffect(() => {
        window.localStorage.setItem('data', JSON.stringify(data))
    }, [data])

    return <ClientContext.Provider value={{ data, setData }}>
        { children }
    </ClientContext.Provider>
}

export default ClientProvider