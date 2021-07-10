import { useContext } from 'react';

export default function CountryDetails() {

const {country} = useContext(CountryContext);

  return (
    <h1>{country}</h1>
  )
}