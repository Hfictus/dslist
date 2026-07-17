


import type { GameListDTO } from '../types';

interface Props {
    list: GameListDTO;
    onSelect: (id: number, name: string) => void;
    active: boolean;
}

export function GameListCard({ list, onSelect, active }: Props) {
    return (
        <button
            onClick={() => onSelect(list.id, list.name)}
            style={{
                width: '100%',
                padding: '16px',
                margin: '8px 0',
                backgroundColor: active ? 'var(--accent-blue)' : '#fff',
                color: active ? '#fff' : 'var(--text-dark)',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '16px',
                textAlign: 'left',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
            }}
        >
            {list.name}
        </button>
    );
}

