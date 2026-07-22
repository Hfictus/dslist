import type { GameDTO } from '../types';

interface GameModalProps {
  game: GameDTO;
  onClose: () => void;
}

export function GameModal({ game, onClose }: GameModalProps) {
  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 animate-fade-in"
    >
      {/* O e.stopPropagation impede que o clique dentro do card feche o modal */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg p-4 sm:p-6 max-w-xl w-full shadow-2xl relative border border-slate-200 max-h-[90dvh] overflow-y-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-3 right-4 text-slate-400 hover:text-slate-700 text-xl font-bold z-10"
        >
          ✕
        </button>
        
        <div className="flex flex-col sm:flex-row gap-5">
          <img 
            src={game.imgUrl} 
            alt={game.title} 
            className="w-full sm:w-44 h-48 sm:h-56 object-cover rounded-md shadow-sm"
          />
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-indigo-600 uppercase">{game.genre}</span>
              <h2 className="text-2xl font-bold text-slate-800 leading-tight mb-1">{game.title}</h2>
              <p className="text-xs text-slate-500 mb-2">Ano: {game.year} | Plataformas: {game.platforms}</p>
              <div className="text-amber-500 font-bold text-sm mb-3">
                {'★'.repeat(Math.round(game.score))} <span className="text-slate-600 font-normal">({game.score})</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-600 mt-4 leading-relaxed border-t pt-3">
          {game.longDescription || game.shortDescription}
        </p>
      </div>
    </div>
  );
}