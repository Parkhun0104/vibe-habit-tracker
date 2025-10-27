import React from 'react';

const HabitList = ({ habits, deleteHabit, updateHabit, toggleComplete }) => {
  const handleEdit = (habit) => {
    const newText = window.prompt('Update habit:', habit.text);
    if (newText) {
      updateHabit(habit.id, newText);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Habits</h2>
      <ul className="space-y-2">
        {habits.map((habit) => (
          <li
            key={habit.id}
            className="bg-gray-100 p-4 rounded-lg mb-2 flex justify-between items-center"
          >
            <input
              type="checkbox"
              checked={habit.completed}
              onChange={() => toggleComplete(habit.id)}
              className="mr-2"
            />
            <span
              className={habit.completed ? 'line-through text-gray-500' : ''}
            >
              {habit.text}
            </span>
            <div className="ml-auto">
              <button
                onClick={() => handleEdit(habit)}
                className="bg-yellow-500 text-white px-2 py-1 rounded ml-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteHabit(habit.id)}
                className="bg-red-500 text-white px-2 py-1 rounded ml-2"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;
