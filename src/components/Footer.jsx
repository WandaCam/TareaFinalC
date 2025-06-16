export function Footer() {
  return (
    <footer className="bg-red-900 text-white p-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">

        <div>
          <h4 className="font-bold mb-2 text-white ">Academia</h4>
          <p>Sergio el Bailador es una academia de damzas</p>
        </div>
        <div>
          <h4 className="font-bold mb-2 text-white">Contacto</h4>
          <p>Se encuentrs en la parte de Nosotros c:</p> 
          <a href="/nosotros" className="hover:underline">Nosotros</a>
        </div>
        <div>
          <h4 className="font-bold mb-2 text-white">Hecho por Wanda Camila Chura Cruz</h4>
        </div>
      </div>

      <div className="text-center text-xs mt-6 border-t border-white pt-4">
        Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
