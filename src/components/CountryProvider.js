import { useState } from 'react';

export default function CountryProvider({ children }) {

  const [country, setCountry] = useState('CA');


  return <CountryContext.provider value={{ country, setCountry }}>
    {children}
  </CountryContext.provider>


}