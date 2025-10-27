import React, { useState } from 'react';
import HabitList from './components/HabitList';
import HabitForm from './components/HabitForm';
import './index.css';

function App() {
  const [habits, setHabits] = useState([{ id: 1, text: 'Read a book' }]);

  const handleAddHabit = (habitText) => {
    const newHabit = {
      id: Date.now(),
      text: habitText,
    };
    setHabits([...habits, newHabit]);
  };

  const handleDeleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Vibe Habit Tracker</h1>
      <HabitForm addHabit={handleAddHabit} />
      <HabitList habits={habits} deleteHabit={handleDeleteHabit} />
    </div>
  );
}

export default App;