import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Homepage from './pages/Homepage';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const queryClient= new QueryClient();

  return (
    <div className='body'>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Homepage></Homepage>
      </QueryClientProvider>
      <Footer />
    </div>
  );
}

export default App;
