import {useEffect, useState} from 'react'
import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'

function App() {

  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  const handleCountryChange = async (country) => {
   const fetchedData = await fetchData(country)
   setData(fetchedData)
   if (country !== global) setCountry(country)
  }
 
  useEffect(() => {
     async function handleFetch(){
       const data = await fetchData()
       setData(data)
    }
    handleFetch()
  }, [])
  
  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
