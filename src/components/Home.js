import { useState } from 'react';
import CountryPicker from './CountryPicker';
import CountryDetails from './CountryDetails';


import './Home.css'


export default function Home() {

  const [country, setCountry] = useState('CA');

  return (
    <div className='container'>
      Home Sweet Home
      <div>
      <CountryDetails country={country} />
      <CountryPicker country={country} setCountry={setCountry} />
      </div>
    </div>
  )
}