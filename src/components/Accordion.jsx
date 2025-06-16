import { useState } from 'react';

export function Accordion({ danzas }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2 text-white">
      {danzas.map((danza, i) => (
        <div key={i} >
          <button
            onClick={() => toggle(i)}
            className="w-full text-left px-4 py-2 bg-red-900 hover:bg-red-700"
          >
            {danza.nombre}
          </button>
          {openIndex === i && (
            <div className="px-4 py-2 bg-white text-gray-700">
              Información sobre la danza {danza.nombre} de {danza.region}. Magica experiencia, que esperas
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;