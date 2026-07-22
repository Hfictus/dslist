import { Link } from 'react-router-dom';

interface HeaderProps {
  showListingsLink?: boolean;
}

export function Header({ showListingsLink = false }: HeaderProps) {
  return (
    <header className="bg-[#0b1329] text-white py-4 px-6 md:px-12 flex justify-between items-center shadow-md">
      <Link to="/" className="text-xl font-bold tracking-wide hover:opacity-80 transition-opacity">
        DSList
      </Link>
      {showListingsLink && (
        <Link to="/lists" className="text-sm font-semibold hover:underline text-slate-200">
          Listas
        </Link>
      )}
    </header>
  );
}