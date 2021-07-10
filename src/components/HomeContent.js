import { useMemo } from 'react';
import CountryPicker from './CountryPicker';
import CountryDetails from './CountryDetails';

const HomeContent = useMemo(() => {
  return (
    <div className='container'>
      <CountryDetails />
      <CountryPicker />
    </div>
  );
}, []);

// export default HomeContent;

// export default HomeContent = memo(() => {
//   return (
//     <div className='container'>
//       <CountryDetails />
//       <CountryPicker />
//     </div>
//   );
// });

