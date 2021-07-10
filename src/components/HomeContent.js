import { memo } from 'react';
import CountryPicker from './CountryPicker';
import CountryDetails from './CountryDetails';


function HomeContent() {
  return (
    <div className='container'>
      <CountryDetails />
      <CountryPicker />
    </div>
  );
};

export default memo(HomeContent);




// export default HomeContent = memo(() => {
//   return (
//     <div className='container'>
//       <CountryDetails />
//       <CountryPicker />
//     </div>
//   );
// });

