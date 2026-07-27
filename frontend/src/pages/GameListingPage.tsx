import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { GameListItem } from '../components/GameListItem';
import { GameModal } from '../components/GameModal';
import { api } from '../api/axios';
import type { GameMinDTO, GameDTO } from '../types';

export function GameListingPage() {
  const { listId } = useParams();
  const location = useLocation();
  const listName = location.state?.listName || 'Listagem de Jogos';

  const [games, setGames] = useState<GameMinDTO[]>([]);
  const [selectedGame, setSelectedGame] = useState<GameDTO | null>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  useEffect(() => {
    api.get<GameMinDTO[]>(`/lists/${listId}/games`).then((res) => {
      setGames(res.data);
    });
  }, [listId]);

  const handleSelectGame = (id: number) => {
    api.get<GameDTO>(`/games/${id}`).then((res) => {
      setSelectedGame(res.data);
    });
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (index: number) => {
    if (draggedIndex === null || draggedIndex === index) return;
  };

  /**
   * Manipula o evento de soltar (drop) de um card em uma nova posição da lista.
   * Remove o jogo arrastado de sua posição original e o insere no índice de destino,
   * deslocando os elementos intermediários na tela e notificando o servidor.
   */
  const handleDrop = (destinationIndex: number) => {
    if (draggedIndex === null || draggedIndex === destinationIndex) return;

    const updatedGames = [...games];

    // Reordenação por deslocamento (Shift/Splice)
    const [movedGame] = updatedGames.splice(draggedIndex, 1);
    updatedGames.splice(destinationIndex, 0, movedGame);

    setGames(updatedGames);

    // Requisição ao back-end para persistir
    api.post(`/lists/${listId}/replacement`, {
      sourceIndex: draggedIndex,
      destinationIndex: destinationIndex
    }).catch((err) => {
      console.error("Erro ao salvar ordem no servidor", err);
    });

    setDraggedIndex(null);
  };

  return (
    <div className="min-h-screen bg-[#cdd5e0]">
      <Header showListingsLink />
      
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">{listName}</h1>
        
        <div>
          {games.map((game, index) => (
            <GameListItem
              key={game.id}
              game={game}
              index={index}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => handleSelectGame(game.id)}
            />
          ))}
        </div>
      </main>

      {/* Modal centralizado com fundo transparente */}
      {selectedGame && (
        <GameModal
          game={selectedGame}
          onClose={() => setSelectedGame(null)}
        />
      )}
    </div>
  );
}