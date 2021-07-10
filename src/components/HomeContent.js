import CountryPicker from './CountryPicker';
import CountryDetails from './CountryDetails';

export default function Home() {
  return (
    <div className='container'>
      <CountryDetails />
      <CountryPicker />
    </div>
  )
}