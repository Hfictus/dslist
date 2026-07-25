import { Link } from 'react-router-dom';
import img from '../assets/start-page-img.png';


export function Home() {
  return (
    <div className="min-h-screen bg-[#060b18] text-white flex flex-col justify-between">
      <main className="max-w-6xl mx-auto px-6 pt-16 pb-[5px] min-[1200px]:pb-0 flex-1 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <span className="text-cyan-400 font-bold text-sm tracking-wider uppercase">DSList PRO</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2 mb-6 leading-tight">
            Suas coleções do jeito certo
          </h1>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Organize sua coleção de games de um jeito prático e divertido. Na verdade você vai aprender a criar este aplicativo e elevar seus conhecimentos para o próximo nível :)
          </p>
          <Link 
            to="/lists" 
            className="block w-full text-center bg-cyan-400 text-black font-bold py-3 rounded-md hover:bg-cyan-300 transition-colors shadow-lg"
          >
            Iniciar
          </Link>
        </div>

        {/* imagem ilustrativa */}
        <div className="w-full max-w-md lg:w-1/2 flex justify-center items-center">
          <img 
            src={img} 
            alt="Ilustração DSList" 
            className="max-w-full h-auto object-contain"
            onError={(e) => {
              // Fallback visual caso ainda não haja um link de imagem válido
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          
        </div>
      </main>
    </div>
  );
}