import academiaImg from '../img/academia.jpg';
import directorImg from '../img/director.jpg';
import equipoImg from '../img/equipo.jpg';


export function Nosotros() {
  return (
    <div className="space-y-10 text-gray-800">
      <section className="bg-red-900 text-white p-10 text-center">
        <h2 className="text-4xl font-bold mb-2">Sobre Nosotros</h2>
        <p className="text-lg max-w-2xl mx-auto">
          En la Academia Sergio el Bailador nos dedicamos a promover la riqueza cultural boliviana a través de la danza tradicional, con pasión, compromiso y excelencia.
        </p>
      </section>
      <section className="flex justify-center">
        <div className="w-full max-w-3xl p-4">
          <p className="text-center italic text-gray-600 mb-4">Elgrupo de danza</p>
          <div className="h-64 bg-cover bg-center rounded shadow" style={{ backgroundImage: `url(${academiaImg})` }}></div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-bold text-red-800 mb-2">Nuestra Misión</h3>
          <p>
            Formar bailarines comprometidos con la cultura boliviana, promoviendo valores, disciplina y amor por nuestras tradiciones, a través de una enseñanza integral y profesional.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-bold text-red-800 mb-2">Nuestra Visión</h3>
          <p>
            Ser reconocidos como la academia líder en danza folclórica en Bolivia y en el exterior, consolidándonos como un referente de excelencia artística, identidad y proyección cultural.
          </p>
        </div>
      </section>

      <section className="px-6">
        <h3 className="text-2xl font-bold text-red-800 mb-4 text-center">Nuestros Valores</h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <li className="bg-gray-100 p-4 rounded shadow">Amor por la Cultura</li>
          <li className="bg-gray-100 p-4 rounded shadow">Disciplina y Constancia</li>
          <li className="bg-gray-100 p-4 rounded shadow">Creatividad</li>
        </ul>
      </section>
      <section className="px-6">
        <h3 className="text-2xl font-bold text-red-800 mb-4 text-center">Nuestro Equipo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="h-64 bg-cover bg-center rounded shadow" style={{ backgroundImage: `url(${directorImg})` }}></div>
            <h4 className="text-lg font-semibold">Sergio Vargas</h4>
            <p className="text-sm text-gray-600">Director General / Coreógrafo Principal</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="h-64 bg-cover bg-center rounded shadow" style={{ backgroundImage: `url(${equipoImg})` }}></div>
            <h4 className="text-lg font-semibold">Equipo de Instructores</h4>
            <p className="text-sm text-gray-600">Profesionales en danzas bolivianas de todas las regiones</p>
          </div>
        </div>
      </section>
      <section className="bg-red-900 text-white p-10 text-center mt-10">
        <h3 className="text-2xl font-bold mb-2">Contáctanos</h3>
        <p>Dirección: Av. Principal #123, La Paz, Bolivia</p>
        <p>Teléfono: +591 70006000</p>
        <p>Email: contacto@sergioelbailador.bo</p>
      </section>
    </div>
  );
}

export default Nosotros;