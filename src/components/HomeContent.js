import { useMemo } from 'react';
import CountryPicker from './CountryPicker';
import CountryDetails from './CountryDetails';

export default function HomeContent() {
  return (
    <div className='container'>
      <CountryDetails />
      <CountryPicker />
    </div>
  );
};

// export default HomeContent;

// export default HomeContent = memo(() => {
//   return (
//     <div className='container'>
//       <CountryDetails />
//       <CountryPicker />
//     </div>
//   );
// });

