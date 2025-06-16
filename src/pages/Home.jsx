import Accordion from '../components/Accordion';
import Baile1Img from '../img/baile1.jpg'
import Baile2Img from '../img/baile2.jpg'
import Baile3Img from '../img/baile3.jpg'

const danzas = [
  { nombre: 'Morenada', region:'La Paz' },
  { nombre: 'Cueca', region:'Chuquisaca' },
  { nombre: 'Chovena', region:'Pando' },
  { nombre: 'Taquirari', region:'Beni' },
  { nombre: 'Tinku', region:'Potosi' },
];

export function Home() {
  return (
    <div className="space-y-10">
      <section className="w-full h-72 bg-cover bg-center rounded shadow" style={{ backgroundImage: 'url("../img/academia.jpg")' }}>
        <div className="bg-red-900 bg-opacity-50 h-full flex items-center justify-center">
          <h2 className="text-3xl text-white font-bold">Bienvenidos a la academia Sergio el bailador</h2>
        </div>
      </section>
      <section className="px-4">
        <h3 className="text-2xl font-bold text-red-700 mb-4 text-center">Danzas por región</h3>
        <Accordion danzas={danzas} />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        <div className="h-64 bg-cover bg-center rounded shadow" style={{ backgroundImage: `url(${Baile1Img})` }}></div>
        <div className="h-64 bg-cover bg-center rounded shadow" style={{ backgroundImage: `url(${Baile2Img})` }}></div>
        <div className="h-64 bg-cover bg-center rounded shadow" style={{ backgroundImage: `url(${Baile3Img})` }}></div>
        
      </section>
    </div>
  );
}

export default Home;
