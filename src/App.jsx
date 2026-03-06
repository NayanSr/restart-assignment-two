
import './App.css';
import Navigation from '../src/components/Navigation/Navigation'
import Footer from './components/Navigation/Footer/Footer';
import Banner from './components/Banner/Banner';
import Main from './components/Main/Main';
import { Suspense } from 'react';

function App() {
  const tickets= fetch('tickets.json').then(res=>res.json())


  return (
    <div className='max-w-7xl mx-auto border-2 border-green-800 p-1 flex flex-col min-h-screen'>
     <Navigation/>
      <div className='flex-1'>
        <Banner/>
        <Suspense fallback={<p>Loading tickets...</p>} >
          <Main tickets={tickets}/>
        </Suspense>
      </div>
      <Footer/>
    </div>
  )
}

export default App
