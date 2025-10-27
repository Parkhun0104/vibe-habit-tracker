import React from 'react';

const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className="flex space-x-2 mb-4">
      <button
        onClick={() => setFilter('ALL')}
        className={`px-3 py-1 rounded ${
          filter === 'ALL' ? 'bg-blue-600 text-white' : 'bg-gray-200'
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('ACTIVE')}
        className={`px-3 py-1 rounded ${
          filter === 'ACTIVE' ? 'bg-blue-600 text-white' : 'bg-gray-200'
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter('COMPLETED')}
        className={`px-3 py-1 rounded ${
          filter === 'COMPLETED' ? 'bg-blue-600 text-white' : 'bg-gray-200'
        }`}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
