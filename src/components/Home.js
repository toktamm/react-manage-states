import React from 'react';
import CountryPicker from './CountryPicker';

import './Home.css'


export default function Home() {
  return (
    <div className='container'>
      Home Sweet Home
      <div>
      <CountryPicker />
      </div>
    </div>
  )
}