import type { GameMinDTO } from '../types';

interface GameListItemProps {
  game: GameMinDTO;
  index: number;
  onDragStart: (index: number) => void;
  onDragOver: (index: number) => void;
  onDrop: (index: number) => void;
  onClick: () => void;
}

export function GameListItem({ game, index, onDragStart, onDragOver, onDrop, onClick }: GameListItemProps) {
  return (
    <div
      draggable
      onDragStart={() => onDragStart(index)}
      onDragOver={(e) => {
        e.preventDefault();
        onDragOver(index);
      }}
      onDrop={() => onDrop(index)}
      onClick={onClick}
      className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing transition-all border border-slate-100 mb-3"
    >
      <img 
        src={game.imgUrl} 
        alt={game.title} 
        className="w-20 h-24 object-cover rounded-md mr-4 flex-shrink-0"
      />
      <div>
        <h3 className="text-lg font-bold text-slate-800">{game.title}</h3>
        <p className="text-xs text-slate-400 mb-1">{game.year}</p>
        <p className="text-xs text-slate-500 line-clamp-2">{game.shortDescription}</p>
      </div>
    </div>
  );
}