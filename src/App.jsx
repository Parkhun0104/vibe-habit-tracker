import React, { useState, useEffect } from 'react';
import HabitList from './components/HabitList';
import HabitForm from './components/HabitForm';
import './index.css';

function App() {
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem('habits');
    return savedHabits ? JSON.parse(savedHabits) : [];
  });

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

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