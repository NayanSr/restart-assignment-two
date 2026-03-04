
import './App.css';
import Navigation from '../src/components/Navigation/Navigation'
import Footer from './components/Navigation/Footer/Footer';

function App() {


  return (
    <div className='max-w-7xl mx-auto border-2 border-green-800 p-1 flex flex-col min-h-screen'>
     <Navigation/>
      <div className='flex-1'>
        main
      </div>
      <Footer/>
    </div>
  )
}

export default App
