import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './components/Home';
import './App.css';


const queryClient = new QueryClient();


function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient} >

        Home Sweet Home
        <Home />
      </QueryClientProvider>

    </div>
  );
}

export default App;
