import './App.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'
import { useEffect, useState } from 'react'

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
})

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    client
      .query({
        query: gql`
          query GetRates {
            rates(currency: "USD") {
              currency
            }
          }
        `,
      })
      .then((result) => {
        // console.log(result)
        setData(result.data.rates)
      })
  })

  return (
    <>
      <h1>Currencies</h1>
      <div className='App'>
        {data.map((rate, i) => (
          <p key={i}>{rate.currency}</p>
        ))}
      </div>
    </>
  )
}

export default App
