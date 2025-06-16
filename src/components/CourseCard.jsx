import { useState } from 'react';
import Modal from './Modal';

export function CourseCard({ curso }) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex bg-white rounded shadow p-4 items-center gap-4">
      <img src={curso.imagen} className="w-32 h-32 object-cover rounded" />
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-black">{curso.nombre}</h3>
        <p className="text-black">{curso.descripcion}</p>
      </div>
      <button
        onClick={() => setShow(true)}
        className="bg-red-900 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Ver Precio
      </button>
      <Modal show={show} onClose={() => setShow(false)} precio={curso.precio} />
    </div>
  );
}

export default CourseCard;
