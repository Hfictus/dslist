import { useEffect, useState } from 'react';
import { api } from './api/axios';
import { Header } from './components/Header';
import { GameListCard } from './components/GameListCard';
import { GameListItem } from './components/GameListItem';
import type { GameListDTO, GameMinDTO, GameDTO } from './types';

export default function App() {
  const [lists, setLists] = useState<GameListDTO[]>([]);
  const [selectedList, setSelectedList] = useState<{ id: number; name: string } | null>(null);
  const [games, setGames] = useState<GameMinDTO[]>([]);
  const [selectedGame, setSelectedGame] = useState<GameDTO | null>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  useEffect(() => {
    api.get<GameListDTO[]>('/lists').then((res) => {
      setLists(res.data);
      if (res.data.length > 0) {
        setSelectedList({ id: res.data[0].id, name: res.data[0].name });
      }
    });
  }, []);

  useEffect(() => {
    if (selectedList) {
      api.get<GameMinDTO[]>(`/lists/${selectedList.id}/games`).then((res) => {
        setGames(res.data);
      });
    }
  }, [selectedList]);

  const handleSelectGame = (id: number) => {
    api.get<GameDTO>(`/games/${id}`).then((res) => {
      setSelectedGame(res.data);
    });
  };

  // Lógica de Arrastar e Soltar (Front-end + Envio ao Back-end)
  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (index: number) => {
    if (draggedIndex === null || draggedIndex === index) return;
  };

  const handleDropItem = (destinationIndex: number) => {
    if (draggedIndex === null || !selectedList) return;

    // Atualização otimista no front-end para resposta imediata ao usuário
    const updatedGames = [...games];
    const [removed] = updatedGames.splice(draggedIndex, 1);
    updatedGames.splice(destinationIndex, 0, removed);
    setGames(updatedGames);

    // Envia a substituição para persistência no banco via Back-end
    api.post(`/lists/${selectedList.id}/replacement`, {
      sourceIndex: draggedIndex,
      destinationIndex: destinationIndex
    }).then(() => {
      console.log("Posição atualizada com sucesso no Back-end!");
    }).catch(err => {
      console.error("Erro ao salvar reordenação", err);
    });

    setDraggedIndex(null);
  };

  return (
    <>
      <Header />
      <main className="container">

        {/* Detalhes do Jogo selecionado */}
        {selectedGame && (
          <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', marginBottom: '20px', borderLeft: '5px solid var(--accent-blue)' }}>
            <button onClick={() => setSelectedGame(null)} style={{ float: 'right', background: 'none', border: 'none', cursor: 'pointer', color: 'red', fontWeight: 'bold' }}>Fechar X</button>
            <h2 style={{ fontSize: '20px', marginBottom: '8px' }}>{selectedGame.title}</h2>
            <p style={{ fontSize: '14px', color: '#555', marginBottom: '10px' }}>{selectedGame.longDescription}</p>
            <span style={{ fontSize: '12px', background: '#eee', padding: '4px 8px', borderRadius: '4px' }}>Nota: {selectedGame.score}</span>
          </div>
        )}

        {/* Seção das Minhas Coleções */}
        <section style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', margin: '12px 0 6px 0', color: '#0c1017' }}>Minhas coleções</h2>
          {lists.map((list) => (
            <GameListCard
              key={list.id}
              list={list}
              active={selectedList?.id === list.id}
              onSelect={(id, name) => setSelectedList({ id, name })}
            />
          ))}
        </section>

        {/* Seção dos Jogos da Lista Selecionada */}
        {selectedList && (
          <section>
            <h2 style={{ fontSize: '24px', margin: '16px 0', color: '#0c1017' }}>{selectedList.name}</h2>
            <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>💡 Toque e arraste um item para reorganizar a ordem</p>
            <div>
              {games.map((game, index) => (
                <GameListItem
                  key={game.id}
                  game={game}
                  index={index}
                  onDragStart={handleDragStart}
                  onDragOver={() => handleDragOver(index)}
                  onDrop={() => handleDropItem(index)}
                  onSelectGame={handleSelectGame}
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
