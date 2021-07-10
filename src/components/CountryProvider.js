import { useState } from 'react';
import { CountryContext } from './Home'


export default function CountryProvider({ children }) {

  const [country, setCountry] = useState('CA');


  return <CountryContext.Provider value={{ country, setCountry }}>
    {children}
  </CountryContext.Provider>


}