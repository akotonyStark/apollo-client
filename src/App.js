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
            rates(currency: "GHS") {
              currency
              rate
            }
          }
        `,
      })
      .then((result) => {
        console.log(result)
        setData(result.data.rates)
      })
  })

  return (
    <>
      <div className='App'>
        <h2>My first Apollo app 🚀</h2>
        {data.map((item, i) => (
          <p key={i}>
            {item.currency}-{item.rate}
          </p>
        ))}
      </div>
    </>
  )
}

export default App
