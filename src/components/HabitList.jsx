import React from 'react';

const HabitList = ({ habits }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Habits</h2>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id} className="bg-gray-100 p-4 rounded-lg mb-2">
            {habit.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;
