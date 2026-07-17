



//import React from 'react';
import type { GameMinDTO } from '../types';

interface Props {
    game: GameMinDTO;
    index: number;
    onDragStart: (index: number) => void;
    onDragOver: (index: number) => void;
    onDrop: () => void;
    onSelectGame: (id: number) => void;
}

export function GameListItem({ game, index, onDragStart, onDragOver, onDrop, onSelectGame }: Props) {
    return (
        <div
            draggable
            onDragStart={() => onDragStart(index)}
            onDragOver={(e) => {
                e.preventDefault();
                onDragOver(index);
            }}
            onDrop={onDrop}
            onClick={() => onSelectGame(game.id)}
            style={{
                display: 'flex',
                padding: '12px',
                margin: '10px 0',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
                cursor: 'grab',
                transition: 'transform 0.2s'
            }}
        >
            <img
                src={game.imgUrl}
                alt={game.title}
                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px', marginRight: '16px' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '4px' }}>{game.title}</h3>
                <p style={{ fontSize: '14px', color: '#64748b' }}>{game.year}</p>
            </div>
        </div>
    );
}
