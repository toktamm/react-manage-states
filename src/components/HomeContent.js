import CountryPicker from './CountryPicker';
import CountryDetails from './CountryDetails';

export default function HomeContent() {
  return (
    <div className='container'>
      <CountryDetails />
      <CountryPicker />
    </div>
  )
}