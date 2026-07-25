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

  /** Clicar sobre um jogo e arrastar para mudar posição, rearranjar os outros jogos na lista:
   * Manipula o evento de soltar (drop) de um card em uma nova posição da lista.
   * Remove o jogo arrastado de sua posição original e o insere no índice de destino,
   * deslocando os elementos intermediários na tela e notificando o servidor.
  */
  const handleDrop = (destinationIndex: number) => {
    if (draggedIndex === null || draggedIndex === destinationIndex) return;

    const updatedGames = [...games];
    // Troca direta das duas posições (Swap)
    const temp = updatedGames[draggedIndex];
    updatedGames[draggedIndex] = updatedGames[destinationIndex];
    updatedGames[destinationIndex] = temp;

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


/** Trocar dois jogos de posição, sem alterar posição dos demais (Troca Direta / Swap): 
 * Manipula o evento de soltar (drop) de um card em uma nova posição da lista.
 * Executa uma troca direta (swap) entre o jogo de origem e o de destino no estado do React,
 * preservando a ordem dos demais jogos e enviando a alteração para a API.
const handleDrop = (destinationIndex: number) => {
    if (draggedIndex === null || draggedIndex === destinationIndex) return;

    // 1. Cria cópia da lista e realiza a troca direta (Swap)
    const updatedGames = [...games];
    const temp = updatedGames[draggedIndex];
    updatedGames[draggedIndex] = updatedGames[destinationIndex];
    updatedGames[destinationIndex] = temp;

    // 2. Atualiza a tela imediatamente
    setGames(updatedGames);

    // 3. Envia os índices para o Back-end persistir a troca direta
    api.post(`/lists/${listId}/replacement`, {
      sourceIndex: draggedIndex,
      destinationIndex: destinationIndex
    }).catch((err) => {
      console.error("Erro ao salvar ordem no servidor", err);
    });

    setDraggedIndex(null);
  };
*/

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