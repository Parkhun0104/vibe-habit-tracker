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
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="Enter new habit"
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Habit
      </button>
    </form>
  );
};

export default HabitForm;
