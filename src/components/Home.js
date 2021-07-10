import React from 'react';
import CountryPicker from './CountryPicker';
import CountryDetails from './CountryDetails';


import './Home.css'


export default function Home() {
  return (
    <div className='container'>
      Home Sweet Home
      <div>
      <CountryPicker />
      <CountryDetails />
      </div>
    </div>
  )
}