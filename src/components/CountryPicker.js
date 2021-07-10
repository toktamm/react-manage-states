import { useContext } from 'react';
import { CountryContext } from './Home'


export default function CountryPicker() {

  const { country, setCountry } = useContext(CountryContext);

  return (
    <select value={country} onChange={(event) => setCountry(event.target.value)}>
      <option value="CA">Canada</option>
      <option value="CO">Colombia</option>
    </select>
  )
}