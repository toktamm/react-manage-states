
export default function Home() {
  return (
    <div className='container'>
      <CountryDetails country={country} />
      <CountryPicker country={country} setCountry={setCountry} />
    </div>
  )
}