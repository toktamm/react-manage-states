 import { useState } from 'react';


export default function CountryPicker({ country, setCountry }) {


  return(
    <select value={country} onChange={(event) => setCountry(event.target.value) }>
      <option value="CA">Canada</option>
      <option calue="CO">Colombia</option>
    </select>
  )
}