import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Cour } from './pages/Cour'
import { Nosotros } from './pages/Nosotros'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <div className='flex flex-col min-h-screen bg-[#f3f3f3] text-gray-800'>
      <Header />
      <Navbar />
      <main className='flex-grow p-6'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cursos' element={<Cour />} />
          <Route path='/nosotros' element={<Nosotros />} />
        </Routes>
      </main>
      <Footer />
    </div>      
  );
}

export default App;
