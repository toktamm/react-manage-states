import { useContext } from 'react';
import { CountryContext } from './Home'

export default function CountryDetails() {

const {country} = useContext(CountryContext);

  return (
    <h1>{country}</h1>
  )
}