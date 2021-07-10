import { useState } from 'react';
import CountryPicker from './CountryPicker';
import CountryDetails from './CountryDetails';

import './Home.css'

//step 3: to convert the lifted state into global state we create a context
const CountryContext = createContext();

export default function Home() {

  //step 2: lifted state from the child component into the parent component
  const [country, setCountry] = useState('CA');

  return (
    <div className='container'>      
      <CountryDetails country={country} />
      <CountryPicker country={country} setCountry={setCountry} />
    </div>
  )
}