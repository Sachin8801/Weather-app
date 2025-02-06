import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (location: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a city..."
          className="w-full px-4 py-2 pl-10 pr-12 text-gray-700 bg-white/90 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
        <button
          type="submit"
          className="absolute right-2 top-1.5 px-3 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-colors duration-300"
        >
          Search
        </button>
      </div>
    </form>
  );
}
