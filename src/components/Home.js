import { createContext } from 'react';
// import { QueryClient, QueryClientProvider } from 'react-query';

import CountryProvider from './CountryProvider';
import HomeContent from './HomeContent';

import './Home.css'

// const queryClient = new QueryClient();


//step 3: to convert the lifted state into global state we create a context
//context stores the state at the top of the application and any child below it can
//reach out and grab it from the parent without it having to be passed down through prop drilling
//from one component to the next 
export const CountryContext = createContext();

export default function Home() {

  return (
    // <QueryClientProvider client={queryClient} >
      <CountryProvider>
        <HomeContent />
      </CountryProvider>
    // </QueryClientProvider>

  )
}

