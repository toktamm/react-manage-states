import { useState } from 'react';
import CountryPicker from './CountryPicker';
import CountryDetails from './CountryDetails';
import CountryProvider from './CountryProvider';

import './Home.css'

//step 3: to convert the lifted state into global state we create a context
//context stores the state at the top of the application and any child below it can
//reach out and grab it from the parent without it having to be passed down through prop drilling
//from one component to the next 
const CountryContext = createContext();

export default function Home() {

  return <CountryProvider>
  </CountryProvider>

  // return (
  //   <div className='container'>      
  //     <CountryDetails country={country} />
  //     <CountryPicker country={country} setCountry={setCountry} />
  //   </div>
  // )
}