import React from 'react';
import CountryPicker from './CountryPicker';
import CountryDetails from './CountryDetails';


import './Home.css'


export default function Home() {

  const [country, setCountry] = useState('CA');

  return (
    <div className='container'>
      Home Sweet Home
      <div>
      <CountryDetails />
      <CountryPicker />
      </div>
    </div>
  )
}