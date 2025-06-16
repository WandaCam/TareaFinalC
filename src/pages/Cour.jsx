import CourseCard from '../components/CourseCard';
import Baile1Img from '../img/baile1.jpg'
import Baile2Img from '../img/baile2.jpg'
import Baile3Img from '../img/baile3.jpg'
import Baile4Img from '../img/baile4.jpg'
import Baile5Img from '../img/baile5.jpg'
import Baile6Img from '../img/baile6.jpg'
import Baile7Img from '../img/baile7.jpg'
import Baile8Img from '../img/baile8.jpg'


const cursos = [
   {
    nombre: "Morenada",
    descripcion: "La Morenada es una danza emblemática del altiplano boliviano. Se caracteriza por su ritmo lento y cadencioso, trajes lujosos, máscaras de afrodescendientes y coreografías que representan la esclavitud. Es símbolo de identidad cultural.",
    imagen: Baile1Img,
    precio: "Bs. 200",
  },
  {
    nombre: "Caporales",
    descripcion: "Inspirada en el capataz o caporal, esta danza combina fuerza, energía y ritmo. Los bailarines realizan saltos ágiles, con botas pesadas y cascabeles, representando dominio y presencia. Muy popular en festivales y carnavales.",
    imagen: Baile2Img,
    precio: "Bs. 250",
  },
  {
    nombre: "Cueca",
    descripcion: "La Cueca boliviana es una danza de conquista amorosa que se baila en pareja. Es patrimonio nacional y se caracteriza por sus giros, pañuelos en mano y la elegancia de los pasos. Tiene variaciones según la región.",
    imagen: Baile3Img,
    precio: "Bs. 180",
  },
  {
    nombre: "Tinku",
    descripcion: "El Tinku es una danza tradicional de origen ritual que simula un enfrentamiento entre comunidades. Su vestimenta colorida y pasos fuertes reflejan la fuerza del altiplano y el espíritu combativo del pueblo andino.",
    imagen: Baile4Img,
    precio: "Bs. 230",
  },
  {
    nombre: "Saya",
    descripcion: "La Saya es una danza afroboliviana con raíces profundas en las comunidades de los Yungas. Se caracteriza por su ritmo contagioso, vestimenta vibrante y la representación de la resistencia cultural afrodescendiente.",
    imagen: Baile5Img,
    precio: "Bs. 190",
  },
  {
    nombre: "Chovena",
    descripcion: "Danza oriental boliviana que destaca por su ritmo rápido y vestuario colorido. Representa la alegría y el espíritu festivo de la región amazónica, con movimientos ágiles y expresivos.",
    imagen: Baile6Img,
    precio: "Bs. 210",
  },
  {
    nombre: "Tobas",
    descripcion: "Danza guerrera originaria del oriente boliviano. Se distingue por saltos altos, movimientos intensos y trajes con plumas. Representa el coraje de los pueblos indígenas frente a la conquista.",
    imagen: Baile7Img,
    precio: "Bs. 240",
  },
  {
    nombre: "Waca Waca",
    descripcion: "Satírica y divertida, la Waca Waca representa las corridas de toros en estilo burlesco. Los bailarines imitan al toro y al torero, con trajes coloridos y mucha interacción escénica. Muy usada en el Carnaval de Oruro.",
    imagen: Baile8Img,
    precio: "Bs. 175",
  },
];

export function Cour() {
  return (
     <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center text-red-900 mb-6">
        Oferta de cursos!
      </h2>
      {cursos.map((curso, i) => (
        <CourseCard key={i} curso={curso} />
      ))}
    </div>
  );
}

export default Cour;