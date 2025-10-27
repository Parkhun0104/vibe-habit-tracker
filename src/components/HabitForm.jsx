import React, { useState } from 'react';

const HabitForm = ({ addHabit }) => {
  const [habit, setHabit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habit.trim()) {
      addHabit(habit);
      setHabit('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2"
    >
      <input
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="Enter new habit"
        className="border p-2 flex-1"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full sm:w-auto"
      >
        Add Habit
      </button>
    </form>
  );
};

export default HabitForm;
