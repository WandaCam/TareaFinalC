import { Link } from "react-router-dom";

export function Navbar (){
    return(
      <nav className="bg-[#6B0F1A] text-white p-4 flex justify-center gap-10 shadow-md">
        <Link to="/" className=" hover:text-[#FFD700]">Inicio</Link>
        <Link to="/cursos" className="hover:text-[#FFD700]">Oferta de Cursos</Link>
        <Link to="/nosotros" className="hover:text-[#FFD700]">Nosotros</Link>
      </nav>
    );
}
 export default Navbar;