export function Modal({ show, onClose, precio }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h2 className="text-xl font-bold mb-4">Precio del curso</h2>
        <p className="mb-4">{precio}</p>
        <button
          onClick={onClose}
          className="bg-red-900 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default Modal;
