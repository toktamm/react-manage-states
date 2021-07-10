import { useContext } from 'react';
import { CountryContext } from './Home';
import { useQuery } from 'react-query';


async function fetchCountry(country) {
  const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${country}`);
  const data = await response.json();
  return data;
}

export default function CountryDetails() {

  const { country } = useContext(CountryContext);


  // we're going to use react-query to manage the state of the external data
  // we have to pass in a key to use useQuery as its first parameter.
  // we can have multiple keys or have them as an array of keys
  // whatever the keys are we are going to pass them as
  // the first, second, third, etc argument to the async function above
  // the key here is country. what the key does is say any time this key changes
  // is when you should go and fetch new data. because now it's invalid and we need refreshed data
  // for the second parameter you have to provide a function that goes and makes the request to
  // load the external data
  const { data, isLoading, error } = useQuery([country], fetchCountry);

  if (isLoading) return <span>Loading...</span>
  if (error) return <span>Error Occurred!</span>

  // if we get to this return it means we have data
  return (
    <div>
      <h1>{country}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )

}