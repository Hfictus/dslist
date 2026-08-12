import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { api } from '../api/axios';
import type { GameListDTO } from '../types';

export function GameListsPage() {
  const [lists, setLists] = useState<GameListDTO[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get<GameListDTO[]>('/lists').then((res) => setLists(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-[#cdd5e0]">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Minhas coleções</h2>
          <div className="flex flex-col gap-3">
            {lists.map((list) => (
              <button
                key={list.id}
                onClick={() => navigate(`/lists/${list.id}`, { state: { listName: list.name } })}
                className="text-left font-semibold text-slate-700 hover:text-indigo-600 py-2 transition-colors cursor-pointer"
              >
                {list.name}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}