import React from 'react';

const HabitList = () => {
  const habits = ['Read a book', 'Exercise 30 mins', 'Meditate 10 mins'];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Habits</h2>
      <ul>
        {habits.map((habit, index) => (
          <li key={index} className="bg-gray-100 p-4 rounded-lg mb-2">
            {habit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;
